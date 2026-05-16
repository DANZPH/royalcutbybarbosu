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

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
  const senderName =
    process.env.BREVO_SENDER_NAME?.trim() || "Royal Cut By Barbosu";
  const notificationEmail =
    process.env.BREVO_NOTIFICATION_EMAIL?.trim() || senderEmail;

  if (!apiKey) {
    return { success: false, error: new Error("Missing BREVO_API_KEY") };
  }

  if (!senderEmail) {
    return {
      success: false,
      error: new Error("Missing BREVO_SENDER_EMAIL")
    };
  }

  if (!notificationEmail) {
    return {
      success: false,
      error: new Error("Missing BREVO_NOTIFICATION_EMAIL")
    };
  }

  const safeName = escapeHtml(fullName);
  const safeEmail = email ? escapeHtml(email) : "";
  const safePhone = escapeHtml(phone);
  const safeService = escapeHtml(service);
  const safeDate = escapeHtml(date);
  const safeTime = escapeHtml(time);
  const safeRequests = requests ? escapeHtml(requests) : "";

  const htmlContent = `
  <html>
    <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
      
      <div style="max-width:600px;margin:20px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background:#111827;color:#ffffff;padding:20px;text-align:center;">
          <h1 style="margin:0;font-size:20px;">New Booking Received</h1>
          <p style="margin:5px 0 0;font-size:13px;opacity:0.8;">
            ${senderName}
          </p>
        </div>

        <!-- Content -->
        <div style="padding:20px;">

          <!-- Customer Info -->
          <h2 style="font-size:16px;color:#111827;margin-bottom:10px;">Customer Details</h2>
          <div style="background:#f9fafb;padding:12px;border-radius:8px;margin-bottom:15px;">
            <p style="margin:6px 0;"><strong>Name:</strong> ${safeName}</p>
            ${email ? `<p style="margin:6px 0;"><strong>Email:</strong> ${safeEmail}</p>` : ""}
            <p style="margin:6px 0;"><strong>Phone:</strong> ${safePhone}</p>
            <p style="margin:6px 0;"><strong>New Customer:</strong> ${
              isNewCustomer ? "Yes" : "No"
            }</p>
          </div>

          <!-- Booking Info -->
          <h2 style="font-size:16px;color:#111827;margin-bottom:10px;">Booking Details</h2>
          <div style="background:#f9fafb;padding:12px;border-radius:8px;margin-bottom:15px;">
            <p style="margin:6px 0;"><strong>Service:</strong> ${safeService}</p>
            <p style="margin:6px 0;"><strong>Date:</strong> ${safeDate}</p>
            <p style="margin:6px 0;"><strong>Time:</strong> ${safeTime}</p>
          </div>

          ${
            requests
              ? `
          <h2 style="font-size:16px;color:#111827;margin-bottom:10px;">Special Requests</h2>
          <div style="background:#fff7ed;padding:12px;border-left:4px solid #f97316;border-radius:8px;">
            <p style="margin:0;">${safeRequests}</p>
          </div>
          `
              : ""
          }

        </div>

        <!-- Footer -->
        <div style="background:#f3f4f6;padding:15px;text-align:center;font-size:12px;color:#6b7280;">
          This is an automated booking notification.
        </div>

      </div>

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
    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey
        },
        body: JSON.stringify(payload)
      }
    );

    const raw = await response.text();
    let data: unknown = raw;

    try {
      data = raw ? JSON.parse(raw) : null;
    } catch {
      // ignore JSON parse errors
    }

    if (!response.ok) {
      console.error("Brevo API error:", response.status, data);

      if (response.status === 401) {
        console.error(
          "Brevo unauthorized: verify API key and account status."
        );
      }

      const errorMessage =
        typeof data === "object" && data && "message" in data
          ? (data as { message: string }).message
          : `Brevo API error (status ${response.status})`;

      return {
        success: false,
        error: new Error(errorMessage),
        brevoError: data
      };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error sending Brevo email:", error);
    return { success: false, error };
  }
}