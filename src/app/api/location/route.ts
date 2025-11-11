import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (will reset on server restart)
// For production, use a database like Redis, Supabase, or Firebase
let currentLocation: {
  latitude: number;
  longitude: number;
  timestamp: number;
} | null = null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { latitude, longitude, timestamp } = body;

    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
      return NextResponse.json(
        { error: 'Invalid coordinates' },
        { status: 400 }
      );
    }

    currentLocation = {
      latitude,
      longitude,
      timestamp: timestamp || Date.now(),
    };

    return NextResponse.json({ success: true, location: currentLocation });
  } catch (error) {
    console.error('Error storing location:', error);
    return NextResponse.json(
      { error: 'Failed to store location' },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (!currentLocation) {
    return NextResponse.json(
      { error: 'No location data available' },
      { status: 404 }
    );
  }

  // Check if location is stale (older than 5 minutes)
  const isStale = Date.now() - currentLocation.timestamp > 5 * 60 * 1000;

  return NextResponse.json({
    location: currentLocation,
    stale: isStale,
  });
}
