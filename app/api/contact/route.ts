"use server";

import { NextResponse } from "next/server";

import ContactEmail from "@/email/ContactEmail";
import { ContactEmailProps } from "@/types";
import "dotenv/config";
import { Resend } from "resend";

const resend = new Resend(process.env.AUTH_RESEND_KEY);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactEmailProps;

    await resend.emails.send({
      from: "no-reply@qiklearn.club",
      to: "nikeshcohen@outlook.com",
      subject: "URGENT: New Contact From Portfolio",
      react: ContactEmail({
        formData: body.formData,
        date: body.date,
      }),
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
