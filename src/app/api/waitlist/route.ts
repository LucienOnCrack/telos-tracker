import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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
    const exists = await prisma.waitlist.findUnique({
      where: { phone },
    });

    if (exists) {
      return NextResponse.json(
        { error: 'Phone number already registered' },
        { status: 400 }
      );
    }

    // Create new waitlist entry
    await prisma.waitlist.create({
      data: {
        name,
        phone,
      },
    });

    // Get total count for position
    const total = await prisma.waitlist.count();

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist',
      position: total,
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
  try {
    const entries = await prisma.waitlist.findMany({
      orderBy: { createdAt: 'asc' },
      select: {
        name: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      total: entries.length,
      waitlist: entries.map((entry: { name: string; createdAt: Date }, idx: number) => ({
        position: idx + 1,
        name: entry.name,
        timestamp: entry.createdAt.getTime(),
      })),
    });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to fetch waitlist' },
      { status: 500 }
    );
  }
}
