"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = {
  project: (typeof projectsData)[number];
};
function Project({ project }: ProjectProps) {
  const { title, description, tags, imageUrl } = project;

  const containerRef = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.33 1 "],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.a
      target="_blank"
      href={project.href}
      ref={containerRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="block group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden 
        sm:pr-8 sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition-colors rounded-lg"
      >
        <div className="px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="text-white bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wide rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] 
          group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 
          group-hover:scale-105 transition group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2"
        />
      </section>
    </motion.a>
  );
}

export default Project;
