"use client";

import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import sendEmail from "@/actions/sendEmail";
import useSectionNavigation from "@/hooks/use-section-navigation";
import SectionHeading from "./section-heading";
import SubmitButton from "./submit-button";

function Contact() {
  const { ref: containerRef } = useSectionNavigation({
    id: "contact",
    threshold: 1.0,
  });

  return (
    <motion.section
      id="contact"
      ref={containerRef}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.5, once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mirzaahmedov.dev@gmail.com">
          mirzaahmedov.dev@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          try {
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully");
          } catch {
            toast.error("Something went wrong");
          }
        }}
      >
        <input
          required
          maxLength={500}
          type="email"
          name="email"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg border border-black/10"
        />
        <textarea
          required
          maxLength={5000}
          name="message"
          placeholder="Your message"
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
        ></textarea>
        <SubmitButton>Submit</SubmitButton>
      </form>
    </motion.section>
  );
}

export default Contact;
