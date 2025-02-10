import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/nodemailer";

interface ContactFormRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, message }: ContactFormRequest = await request.json();

    await sendEmail(
      `New Contact Form Submission: ${name}`,
      `You have received a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    return NextResponse.json(
      {
        message: "Thanks for your message! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
