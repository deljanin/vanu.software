import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(request: Request) {
  try {
    const { extra, name, email, message } = await request.json();

    // Prevent spam (honeypot field)
    if (extra !== undefined && extra.length > 0) {
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    }

    const htmlContent = `
      <h3>Website contact</h3>
      <table style="width: 50%; border-collapse: collapse;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Name</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Email</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Message</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${message}</td>
        </tr>
      </table>`;

    const msg = {
      to: "contact@vanu.software",
      from: "website@vanu.software",
      subject: "Website form",
      text: `Contact info: name: ${name}; email: ${email}; message: ${message}`,
      html: htmlContent,
    };

    await sgMail.send(msg);
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
