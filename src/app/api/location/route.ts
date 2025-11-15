import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (will reset on server restart)
// For production, use a database like Redis, Supabase, or Firebase
const trackerLocations = new Map<string, {
  latitude: number;
  longitude: number;
  timestamp: number;
}>();

// Store complete route history for each tracker
const trackerHistory = new Map<string, Array<{
  latitude: number;
  longitude: number;
  timestamp: number;
}>>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { trackerId, latitude, longitude, timestamp } = body;

    if (!trackerId || typeof trackerId !== 'string') {
      return NextResponse.json(
        { error: 'Invalid tracker ID' },
        { status: 400 }
      );
    }

    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
      return NextResponse.json(
        { error: 'Invalid coordinates' },
        { status: 400 }
      );
    }

    const location = {
      latitude,
      longitude,
      timestamp: timestamp || Date.now(),
    };

    trackerLocations.set(trackerId, location);

    // Add to history
    if (!trackerHistory.has(trackerId)) {
      trackerHistory.set(trackerId, []);
    }
    const history = trackerHistory.get(trackerId)!;

    // Only add if location has changed significantly (avoid duplicates)
    const lastLocation = history[history.length - 1];
    const shouldAdd = !lastLocation ||
      Math.abs(lastLocation.latitude - latitude) > 0.0001 ||
      Math.abs(lastLocation.longitude - longitude) > 0.0001;

    if (shouldAdd) {
      history.push(location);
      // Keep last 1000 points to avoid memory issues
      if (history.length > 1000) {
        history.shift();
      }
    }

    return NextResponse.json({ success: true, trackerId, location });
  } catch (error) {
    console.error('Error storing location:', error);
    return NextResponse.json(
      { error: 'Failed to store location' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const trackerId = searchParams.get('trackerId');

  // If trackerId is specified, return that tracker's location
  if (trackerId) {
    const location = trackerLocations.get(trackerId);

    if (!location) {
      return NextResponse.json(
        { error: 'No location data available for this tracker' },
        { status: 404 }
      );
    }

    // Check if location is stale (older than 5 minutes)
    const isStale = Date.now() - location.timestamp > 5 * 60 * 1000;

    return NextResponse.json({
      trackerId,
      location,
      stale: isStale,
    });
  }

  // Otherwise, return all tracker locations
  if (trackerLocations.size === 0) {
    return NextResponse.json(
      { error: 'No location data available' },
      { status: 404 }
    );
  }

  const allTrackers = Array.from(trackerLocations.entries()).map(([id, location]) => ({
    trackerId: id,
    location,
    stale: Date.now() - location.timestamp > 5 * 60 * 1000,
    history: trackerHistory.get(id) || [],
  }));

  return NextResponse.json({ trackers: allTrackers });
}
