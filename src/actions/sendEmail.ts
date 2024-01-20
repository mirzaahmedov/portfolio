"use server";

import { createElement } from "react";
import { Resend } from "resend";
import { isValidString } from "@/utils/validation";
import { getErrorMessage } from "@/utils/error";
import ContactEmail from "@/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(formData: FormData) {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!isValidString(email, 500)) {
    return {
      error: "Invalid email address",
    };
  }
  if (!isValidString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mirzaahmedov.dev@gmail.com",
      subject: "Message from potential client or recruiter",
      reply_to: email,
      text: message,
      react: createElement(ContactEmail, { email, message }),
    });
    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}

export default sendEmail;
