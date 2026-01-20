import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, pickupLocation, destination, date, time, message, type } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Log the booking request (in production, save to database)
    console.log('Booking Request:', {
      name,
      email,
      pickupLocation,
      destination,
      date,
      time,
      message,
      type,
      timestamp: new Date().toISOString()
    })

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Integrate with booking system
    // 4. Send notification to team

    return NextResponse.json({
      success: true,
      message: 'Booking request received successfully',
      data: {
        confirmationNumber: `ER-${Date.now()}`,
        status: 'pending'
      }
    })

  } catch (error) {
    console.error('Booking API Error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Elite Rides Contact API' },
    { status: 200 }
  )
}