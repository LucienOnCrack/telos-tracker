import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (will reset on server restart)
// For production, use a database like Supabase, Firebase, or Airtable
const waitlist: Array<{
  name: string;
  phone: string;
  timestamp: number;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required' },
        { status: 400 }
      );
    }

    // Check if phone already exists
    const exists = waitlist.find((entry) => entry.phone === phone);
    if (exists) {
      return NextResponse.json(
        { error: 'Phone number already registered' },
        { status: 400 }
      );
    }

    const entry = {
      name,
      phone,
      timestamp: Date.now(),
    };

    waitlist.push(entry);

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist',
      position: waitlist.length,
    });
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    total: waitlist.length,
    waitlist: waitlist.map((entry, idx) => ({
      position: idx + 1,
      name: entry.name,
      timestamp: entry.timestamp,
    })),
  });
}
