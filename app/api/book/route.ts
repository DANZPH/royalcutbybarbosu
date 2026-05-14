import { NextResponse } from 'next/server';
import { sendBookingNotification } from '@/lib/brevo';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, service, date, time, requests, isNewCustomer } = body;

    // Basic validation
    if (!fullName || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required booking fields' },
        { status: 400 }
      );
    }

    const result = await sendBookingNotification({
      fullName,
      email: email || undefined,
      phone,
      service,
      date,
      time,
      requests,
      isNewCustomer: Boolean(isNewCustomer)
    });

    if (result.success) {
      return NextResponse.json({ message: 'Booking notification sent successfully' });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
