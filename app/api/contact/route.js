import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "FitZone <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `📩 Yeni müraciət: ${name}`,
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb; padding: 40px 20px; color: #111827;">
        <div style="max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e5e7eb;">
          
          <div style="padding: 32px 32px 20px 32px; text-align: center;">
            <h1 style="margin: 0; color: #10b981; font-size: 24px; letter-spacing: -0.5px;">FitZone</h1>
            <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 14px;">Yeni veb-sayt müraciəti</p>
          </div>

          <div style="height: 1px; background: #f3f4f6; margin: 0 32px;"></div>

          <div style="padding: 32px;">
            <div style="margin-bottom: 24px;">
              <label style="font-size: 12px; font-weight: 700; color: #10b981; text-transform: uppercase; display: block; margin-bottom: 4px;">Göndərən</label>
              <p style="margin: 0; font-size: 16px; font-weight: 500;">${name}</p>
            </div>

            <div style="margin-bottom: 24px;">
              <label style="font-size: 12px; font-weight: 700; color: #10b981; text-transform: uppercase; display: block; margin-bottom: 4px;">Telefon</label>
              <p style="margin: 0; font-size: 16px; font-weight: 500;">${phone}</p>
            </div>

            <div>
              <label style="font-size: 12px; font-weight: 700; color: #10b981; text-transform: uppercase; display: block; margin-bottom: 4px;">Mesaj</label>
              <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.6;">${message || "Mesaj qeyd edilməyib."}</p>
            </div>
          </div>

          <div style="padding: 0 32px 32px 32px;">
            <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" 
               style="display: block; text-align: center; background: #111827; color: #ffffff; text-decoration: none; padding: 14px; border-radius: 12px; font-weight: 600; font-size: 14px;">
               WhatsApp ilə cavabla
            </a>
          </div>

          <div style="background: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #f3f4f6;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
              © ${new Date().getFullYear()} FitZone Fitness Center
            </p>
          </div>
        </div>
      </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Email göndərilmədi" }),
      { status: 500 }
    );
  }
}