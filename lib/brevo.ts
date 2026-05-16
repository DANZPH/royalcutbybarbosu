type BookingNotificationInput = {
  fullName: string;
  email?: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  requests?: string;
  isNewCustomer: boolean;
};

export async function sendBookingNotification({
  fullName,
  email,
  phone,
  service,
  date,
  time,
  requests,
  isNewCustomer
}: BookingNotificationInput) {
  const apiKey = typeof process !== 'undefined' ? process.env.BREVO_API_KEY : undefined;
  const senderEmail = typeof process !== 'undefined' ? process.env.BREVO_SENDER_EMAIL : undefined;
  const senderName = typeof process !== 'undefined' ? process.env.BREVO_SENDER_NAME : 'Royal Cut By Barbosu';
  const notificationEmail = typeof process !== 'undefined'
    ? process.env.BREVO_NOTIFICATION_EMAIL || senderEmail
    : senderEmail;

  if (!apiKey) {
    return { success: false, error: new Error('Missing BREVO_API_KEY') };
  }

  if (!senderEmail) {
    return { success: false, error: new Error('Missing BREVO_SENDER_EMAIL') };
  }

  if (!notificationEmail) {
    return { success: false, error: new Error('Missing BREVO_NOTIFICATION_EMAIL') };
  }

  const htmlContent = `
    <html>
      <body>
        <h1>New Booking Received</h1>
        <p><strong>Customer Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          ${email ? `<li><strong>Email:</strong> ${email}</li>` : ''}
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>New Customer:</strong> ${isNewCustomer ? 'Yes' : 'No'}</li>
        </ul>
        <p><strong>Booking Details:</strong></p>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
        </ul>
        ${requests ? `<p><strong>Special Requests:</strong><br/>${requests}</p>` : ''}
      </body>
    </html>
  `;

  const payload: Record<string, unknown> = {
    sender: { name: senderName, email: senderEmail },
    to: [{ email: notificationEmail, name: senderName }],
    subject: `New Booking: ${service} - ${fullName}`,
    htmlContent
  };

  if (email) {
    payload.replyTo = { email, name: fullName };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify(payload)
    });

    const raw = await response.text();
    let data: unknown = raw;
    try {
      data = raw ? JSON.parse(raw) : null;
    } catch {
      // ignore JSON parse errors
    }

    if (!response.ok) {
      console.error('Brevo API error:', response.status, data);
      return {
        success: false,
        error: new Error(`Brevo API error (status ${response.status})`)
      };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending Brevo email:', error);
    return { success: false, error };
  }
}
