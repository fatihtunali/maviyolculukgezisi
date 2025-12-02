import sgMail from "@sendgrid/mail";

// Initialize SendGrid
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || "info@maviyolculukgezisi.com";
const ADMIN_EMAIL = "info@maviyolculukgezisi.com";
const LOGO_URL = "https://maviyolculukgezisi.com/assets/images/logo/logo-main.png";
const SITE_URL = "https://maviyolculukgezisi.com";

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

// Base email template with logo
function getEmailTemplate(content: string, footerText: string = ""): string {
  return `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mavi Yolculuk Gezisi</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%); padding: 30px; text-align: center;">
              <a href="${SITE_URL}" style="text-decoration: none;">
                <img src="${LOGO_URL}" alt="Mavi Yolculuk Gezisi" width="200" style="max-width: 200px; height: auto;" />
              </a>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #1e293b; padding: 30px; text-align: center;">
              <p style="margin: 0 0 15px 0; color: #94a3b8; font-size: 14px;">
                ${footerText || "Bu e-posta maviyolculukgezisi.com'dan otomatik olarak gönderilmiştir."}
              </p>
              <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px;">
                Tuzla Mahallesi, 509. Sokak No:6, Fethiye, Muğla 48300, Türkiye
              </p>
              <p style="margin: 0; color: #64748b; font-size: 12px;">
                Tel: +90 252 614 47 57 | WhatsApp: +90 549 614 47 57
              </p>
              <p style="margin: 15px 0 0 0; color: #64748b; font-size: 11px;">
                © ${new Date().getFullYear()} Mavi Yolculuk Gezisi. Tüm hakları saklıdır.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

async function sendEmail(options: EmailOptions): Promise<boolean> {
  if (!SENDGRID_API_KEY) {
    console.warn("[Email] SendGrid API key not configured, skipping email");
    return false;
  }

  try {
    await sgMail.send({
      to: options.to,
      from: {
        email: FROM_EMAIL,
        name: "Mavi Yolculuk Gezisi",
      },
      subject: options.subject,
      text: options.text,
      html: options.html,
    });
    console.log(`[Email] Sent to ${options.to}: ${options.subject}`);
    return true;
  } catch (error) {
    console.error("[Email] Failed to send:", error);
    return false;
  }
}

// Booking notification to admin
export async function sendBookingNotificationToAdmin(booking: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  yachtName: string;
  startDate: string;
  endDate: string;
  guests: number;
  specialRequests?: string;
  totalPrice?: number;
  currency?: string;
}): Promise<boolean> {
  const subject = `🚢 Yeni Rezervasyon Talebi: ${booking.yachtName}`;

  const text = `
Yeni rezervasyon talebi alındı!

Misafir Bilgileri:
- İsim: ${booking.firstName} ${booking.lastName}
- E-posta: ${booking.email}
- Telefon: ${booking.phone}

Rezervasyon Detayları:
- Yat: ${booking.yachtName}
- Tarihler: ${booking.startDate} - ${booking.endDate}
- Misafir Sayısı: ${booking.guests}
${booking.totalPrice ? `- Toplam Fiyat: ${booking.totalPrice} ${booking.currency || "EUR"}` : ""}

Özel İstekler:
${booking.specialRequests || "Yok"}

---
Bu e-posta maviyolculukgezisi.com'dan otomatik olarak gönderilmiştir.
  `.trim();

  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="display: inline-block; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 12px 24px; border-radius: 30px; font-size: 16px; font-weight: 600;">
        🚢 Yeni Rezervasyon Talebi
      </div>
    </div>

    <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 24px; text-align: center;">${booking.yachtName}</h2>

    <!-- Misafir Bilgileri -->
    <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h3 style="color: #0369a1; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #0369a1; padding-bottom: 8px;">
        👤 Misafir Bilgileri
      </h3>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="8">
        <tr>
          <td style="color: #64748b; width: 120px;">İsim:</td>
          <td style="color: #1e293b; font-weight: 600;">${booking.firstName} ${booking.lastName}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">E-posta:</td>
          <td><a href="mailto:${booking.email}" style="color: #0369a1;">${booking.email}</a></td>
        </tr>
        <tr>
          <td style="color: #64748b;">Telefon:</td>
          <td><a href="tel:${booking.phone}" style="color: #0369a1;">${booking.phone}</a></td>
        </tr>
      </table>
    </div>

    <!-- Rezervasyon Detayları -->
    <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h3 style="color: #0369a1; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #0369a1; padding-bottom: 8px;">
        📅 Rezervasyon Detayları
      </h3>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="8">
        <tr>
          <td style="color: #64748b; width: 120px;">Yat:</td>
          <td style="color: #1e293b; font-weight: 600;">${booking.yachtName}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">Başlangıç:</td>
          <td style="color: #1e293b; font-weight: 600;">${booking.startDate}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">Bitiş:</td>
          <td style="color: #1e293b; font-weight: 600;">${booking.endDate}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">Misafir:</td>
          <td style="color: #1e293b; font-weight: 600;">${booking.guests} kişi</td>
        </tr>
        ${booking.totalPrice ? `
        <tr>
          <td style="color: #64748b;">Fiyat:</td>
          <td style="color: #059669; font-weight: 700; font-size: 20px;">${booking.totalPrice} ${booking.currency || "EUR"}</td>
        </tr>
        ` : ""}
      </table>
    </div>

    ${booking.specialRequests ? `
    <!-- Özel İstekler -->
    <div style="background: #fef3c7; border-radius: 8px; padding: 20px; border-left: 4px solid #f59e0b;">
      <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">📝 Özel İstekler</h3>
      <p style="color: #78350f; margin: 0; line-height: 1.6;">${booking.specialRequests}</p>
    </div>
    ` : ""}
  `;

  const html = getEmailTemplate(content);
  return sendEmail({ to: ADMIN_EMAIL, subject, text, html });
}

// Contact form notification to admin
export async function sendContactNotificationToAdmin(contact: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  yacht?: string;
  message: string;
}): Promise<boolean> {
  const subjectLine = `✉️ Yeni İletişim Mesajı: ${contact.subject}`;

  const text = `
Yeni iletişim formu mesajı alındı!

Gönderen Bilgileri:
- İsim: ${contact.name}
- E-posta: ${contact.email}
${contact.phone ? `- Telefon: ${contact.phone}` : ""}

Konu: ${contact.subject}
${contact.yacht ? `İlgilenilen Yat: ${contact.yacht}` : ""}

Mesaj:
${contact.message}

---
Bu e-posta maviyolculukgezisi.com'dan otomatik olarak gönderilmiştir.
  `.trim();

  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="display: inline-block; background: linear-gradient(135deg, #0369a1, #0c4a6e); color: white; padding: 12px 24px; border-radius: 30px; font-size: 16px; font-weight: 600;">
        ✉️ Yeni İletişim Mesajı
      </div>
    </div>

    <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 24px; text-align: center;">${contact.subject}</h2>

    <!-- Gönderen Bilgileri -->
    <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h3 style="color: #0369a1; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #0369a1; padding-bottom: 8px;">
        👤 Gönderen Bilgileri
      </h3>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="8">
        <tr>
          <td style="color: #64748b; width: 120px;">İsim:</td>
          <td style="color: #1e293b; font-weight: 600;">${contact.name}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">E-posta:</td>
          <td><a href="mailto:${contact.email}" style="color: #0369a1;">${contact.email}</a></td>
        </tr>
        ${contact.phone ? `
        <tr>
          <td style="color: #64748b;">Telefon:</td>
          <td><a href="tel:${contact.phone}" style="color: #0369a1;">${contact.phone}</a></td>
        </tr>
        ` : ""}
        ${contact.yacht ? `
        <tr>
          <td style="color: #64748b;">İlgilenilen Yat:</td>
          <td style="color: #1e293b; font-weight: 600;">${contact.yacht}</td>
        </tr>
        ` : ""}
      </table>
    </div>

    <!-- Mesaj -->
    <div style="background: #f0f9ff; border-radius: 8px; padding: 20px; border-left: 4px solid #0369a1;">
      <h3 style="color: #0c4a6e; margin: 0 0 10px 0; font-size: 16px;">💬 Mesaj</h3>
      <p style="color: #1e293b; margin: 0; line-height: 1.8; white-space: pre-wrap;">${contact.message}</p>
    </div>
  `;

  const html = getEmailTemplate(content);
  return sendEmail({ to: ADMIN_EMAIL, subject: subjectLine, text, html });
}

// Booking confirmation to customer
export async function sendBookingConfirmationToCustomer(booking: {
  firstName: string;
  lastName: string;
  email: string;
  yachtName: string;
  startDate: string;
  endDate: string;
  guests: number;
  totalPrice?: number;
  currency?: string;
}): Promise<boolean> {
  const subject = `✅ Rezervasyon Talebiniz Alındı - ${booking.yachtName}`;

  const text = `
Sayın ${booking.firstName} ${booking.lastName},

${booking.yachtName} için rezervasyon talebinizi aldık!

Rezervasyon Detayları:
- Yat: ${booking.yachtName}
- Tarihler: ${booking.startDate} - ${booking.endDate}
- Misafir Sayısı: ${booking.guests}
${booking.totalPrice ? `- Tahmini Fiyat: ${booking.totalPrice} ${booking.currency || "EUR"}` : ""}

Ekibimiz en kısa sürede sizinle iletişime geçecektir.

Sorularınız için:
Telefon: +90 252 614 47 57
WhatsApp: +90 549 614 47 57
E-posta: info@maviyolculukgezisi.com

Teşekkür ederiz,
Mavi Yolculuk Gezisi Ekibi
  `.trim();

  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="display: inline-block; background: linear-gradient(135deg, #059669, #047857); color: white; padding: 15px 30px; border-radius: 30px; font-size: 18px; font-weight: 600;">
        ✅ Talebiniz Başarıyla Alındı
      </div>
    </div>

    <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
      Sayın <strong>${booking.firstName} ${booking.lastName}</strong>,
    </p>

    <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
      <strong>${booking.yachtName}</strong> için rezervasyon talebinizi aldık! Ekibimiz en kısa sürede sizinle iletişime geçecektir.
    </p>

    <!-- Rezervasyon Detayları -->
    <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border-radius: 12px; padding: 25px; margin-bottom: 25px; border: 1px solid #bae6fd;">
      <h3 style="color: #0369a1; margin: 0 0 20px 0; font-size: 18px; text-align: center;">
        📋 Rezervasyon Detayları
      </h3>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="12" style="background: white; border-radius: 8px;">
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="color: #64748b;">Yat</td>
          <td style="color: #1e293b; font-weight: 600; text-align: right;">${booking.yachtName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="color: #64748b;">Başlangıç Tarihi</td>
          <td style="color: #1e293b; font-weight: 600; text-align: right;">${booking.startDate}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="color: #64748b;">Bitiş Tarihi</td>
          <td style="color: #1e293b; font-weight: 600; text-align: right;">${booking.endDate}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="color: #64748b;">Misafir Sayısı</td>
          <td style="color: #1e293b; font-weight: 600; text-align: right;">${booking.guests} kişi</td>
        </tr>
        ${booking.totalPrice ? `
        <tr>
          <td style="color: #64748b;">Tahmini Fiyat</td>
          <td style="color: #059669; font-weight: 700; font-size: 22px; text-align: right;">${booking.totalPrice} ${booking.currency || "EUR"}</td>
        </tr>
        ` : ""}
      </table>
    </div>

    <!-- İletişim -->
    <div style="background: #1e293b; border-radius: 12px; padding: 25px; text-align: center;">
      <h3 style="color: #f59e0b; margin: 0 0 15px 0; font-size: 16px;">📞 Bize Ulaşın</h3>
      <p style="margin: 8px 0; color: #e2e8f0;">
        Telefon: <a href="tel:+902526144757" style="color: #f59e0b; text-decoration: none;">+90 252 614 47 57</a>
      </p>
      <p style="margin: 8px 0; color: #e2e8f0;">
        WhatsApp: <a href="https://wa.me/905496144757" style="color: #22c55e; text-decoration: none;">+90 549 614 47 57</a>
      </p>
      <p style="margin: 8px 0; color: #e2e8f0;">
        E-posta: <a href="mailto:info@maviyolculukgezisi.com" style="color: #f59e0b; text-decoration: none;">info@maviyolculukgezisi.com</a>
      </p>
    </div>
  `;

  const html = getEmailTemplate(content, "Hayalinizdeki mavi yolculuk macerası başlıyor!");
  return sendEmail({ to: booking.email, subject, text, html });
}

// Newsletter welcome email
export async function sendNewsletterWelcome(email: string): Promise<boolean> {
  const subject = "🎉 Bültenimize Hoş Geldiniz! - Mavi Yolculuk Gezisi";

  const text = `
Mavi Yolculuk Gezisi bültenine abone olduğunuz için teşekkür ederiz!

Bundan sonra size özel teklifler, yeni rotalar ve mavi yolculuk ipuçları göndereceğiz.

Türkiye'nin en güzel koylarında unutulmaz bir tatil deneyimi için bizi ziyaret edin:
https://maviyolculukgezisi.com

Sorularınız için:
Telefon: +90 252 614 47 57
E-posta: info@maviyolculukgezisi.com

Teşekkürler,
Mavi Yolculuk Gezisi Ekibi
  `.trim();

  const content = `
    <div style="text-align: center;">
      <div style="font-size: 64px; margin-bottom: 20px;">🎉</div>

      <h1 style="color: #1e293b; margin: 0 0 15px 0; font-size: 28px;">
        Bültenimize Hoş Geldiniz!
      </h1>

      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
        Abone olduğunuz için teşekkür ederiz! Bundan sonra size özel teklifler, yeni rotalar ve mavi yolculuk ipuçları göndereceğiz.
      </p>

      <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border-radius: 12px; padding: 25px; margin-bottom: 30px;">
        <p style="color: #0c4a6e; font-size: 18px; margin: 0; line-height: 1.6;">
          🌊 Türkiye'nin en güzel koylarında<br>
          <strong>unutulmaz bir tatil deneyimi</strong> sizi bekliyor!
        </p>
      </div>

      <a href="${SITE_URL}/yachts" style="display: inline-block; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 16px 40px; border-radius: 30px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 20px;">
        Yatlarımızı Keşfedin →
      </a>

      <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
        Abonelikten çıkmak için <a href="${SITE_URL}/unsubscribe?email=${encodeURIComponent(email)}" style="color: #64748b;">buraya tıklayın</a>
      </p>
    </div>
  `;

  const html = getEmailTemplate(content, "Mavi Yolculuk Gezisi ailesine katıldığınız için teşekkürler!");
  return sendEmail({ to: email, subject, text, html });
}
