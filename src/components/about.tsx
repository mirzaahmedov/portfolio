"use client";

import { motion } from "framer-motion";
import useSectionNavigation from "@/hooks/use-section-navigation";
import SectionHeading from "./section-heading";

function About() {
  const { ref: containerRef } = useSectionNavigation({
    id: "about",
    threshold: 1.0,
  });

  return (
    <motion.section
      id="about"
      ref={containerRef}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Greetings! I&apos;m Bekzod</span>, a
        dedicated <span className="font-medium">web developer</span> with over{" "}
        <span className="font-medium">2 years </span>of hands-on experience. I
        specialize in{" "}
        <span className="italic">crafting seamless digital experiences</span>{" "}
        using my expertise in{" "}
        <span className="font-medium">TypeScript, React, Tailwind CSS,</span>{" "}
        and <span className="font-medium">Framer Motion</span>. Fluent in{" "}
        <span className="font-medium">HTML, CSS</span>, and{" "}
        <span className="font-medium">JavaScript</span>, I{" "}
        <span className="italic">love solving complex problems</span>, often
        honing my skills on <span className="font-medium">LeetCode</span>.
        Additionally, I delve into the backend world using{" "}
        <span className="font-medium">Go</span> programming language, bringing{" "}
        <span className="italic">robustness and efficiency</span> to the digital
        solutions I create. I take pride in translating ideas into
        <span className="italic">visually stunning websites</span> that
        seamlessly merge form and function.
      </p>
      <p>
        Outside the coding realm, I enjoy diving into the realms of{" "}
        <span className="font-medium">UI/UX design</span> and{" "}
        <span className="font-medium">3D modeling</span> as hobbies. Let&apos;s
        connect to discuss how we can{" "}
        <span className="italic">bring your digital aspirations to life</span>.
      </p>
    </motion.section>
  );
}

export default About;
