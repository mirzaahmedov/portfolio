"use client";

import type { Variants } from "framer-motion";

import { motion } from "framer-motion";
import useSectionNavigation from "@/hooks/use-section-navigation";
import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";

const fadeInAnimationsVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills() {
  const { ref: containerRef } = useSectionNavigation({
    id: "skills",
    threshold: 1.0,
  });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
