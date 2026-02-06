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
  from: "Karabakh Fitness <onboarding@resend.dev>",
  to: process.env.CONTACT_RECEIVER_EMAIL,
  subject: "📩 Yeni əlaqə mesajı – Karabakh Fitness",
  html: `
  <div style="background:#0a0a0a; padding:32px; font-family:Arial, Helvetica, sans-serif;">
    
    <div style="
      max-width:600px;
      margin:0 auto;
      background:#111;
      border:1px solid #222;
      border-radius:12px;
      overflow:hidden;
    ">
      
      <!-- HEADER -->
      <div style="padding:24px 32px; border-bottom:1px solid #222;">
        <h2 style="margin:0; color:#10b981;">
          Karabakh Fitness
        </h2>
        <p style="margin-top:8px; color:#9ca3af; font-size:14px;">
          Yeni əlaqə formu mesajı
        </p>
      </div>

      <!-- CONTENT -->
      <div style="padding:32px; color:#e5e7eb;">
        
        <p style="margin-bottom:20px; font-size:15px;">
          Aşağıdakı məlumatlarla yeni müraciət daxil olub:
        </p>

        <table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;">
          <tr>
            <td style="padding:8px 0; color:#9ca3af; width:120px;">Ad</td>
            <td style="padding:8px 0; font-weight:600;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#9ca3af;">Telefon</td>
            <td style="padding:8px 0; font-weight:600;">${phone}</td>
          </tr>
        </table>

        <div style="margin-top:24px;">
          <p style="color:#9ca3af; margin-bottom:6px;">Mesaj</p>
          <div style="
            background:#0a0a0a;
            border:1px solid #222;
            border-radius:8px;
            padding:16px;
            font-size:14px;
            line-height:1.6;
          ">
            ${message || "Mesaj qeyd edilməyib"}
          </div>
        </div>

        <!-- CTA -->
        <div style="margin-top:32px; text-align:center;">
          <a
            href="https://wa.me/${phone.replace(/[^0-9]/g, "")}"
            style="
              display:inline-block;
              background:#10b981;
              color:#000;
              text-decoration:none;
              padding:12px 20px;
              border-radius:8px;
              font-weight:600;
              font-size:14px;
            "
          >
            WhatsApp ilə əlaqə saxla
          </a>
        </div>

      </div>

      <!-- FOOTER -->
      <div style="
        padding:16px;
        text-align:center;
        font-size:12px;
        color:#6b7280;
        border-top:1px solid #222;
      ">
        © ${new Date().getFullYear()} Karabakh Fitness
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
