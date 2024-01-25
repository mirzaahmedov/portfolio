"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import useSectionNavigation from "@/hooks/use-section-navigation";
import profileImg from "@/assets/profile.jpg";

function Intro() {
  const { ref: containerRef } = useSectionNavigation({
    id: "home",
    threshold: 0.5,
  });

  return (
    <section
      ref={containerRef}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              priority
              src={profileImg}
              alt="Mirzaahmedov Bekzod"
              className="w-24 h-24 rounded-full border-[0.35rem] border-white object-cover object-center shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hello, I&apos;m Bekzod.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2+ years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">ReactJS</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full 
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-transform" />
        </Link>
        <a
          download
          href="/Bekzod-Mirzaahmedov_cv.pdf"
          className="group flex items-center gap-2 bg-white px-7 py-3 rounded-full outline-none 
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://linkedin.com/in/mirzaahmedov"
          target="_blank"
          className="flex items-center gap-2 bg-white text-gray-700 hover:text-gray-950 p-4 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://linkedin.com/in/mirzaahmedov"
          target="_blank"
          className="flex items-center gap-2 bg-white text-gray-700 hover:text-gray-950 p-4 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/mirzaahmedov"
          target="_blank"
          className="flex items-center gap-2 bg-white text-gray-700 hover:text-gray-950 p-4 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
