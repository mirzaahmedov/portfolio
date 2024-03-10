import { createElement } from "react";
import { FaReact } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import babyblissImg from "@/assets/babybliss.png";
import zipfyImg from "@/assets/zipfy.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Hammol LTD",
    description:
      "I worked as a front-end developer for 1 year, where I acquired new skills and gained valuable experience.",
    icon: createElement(FaReact),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "OX Systems",
    description:
      "I worked for a SaaS company and contributed as a front-end developer",
    icon: createElement(FaReact),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Upwork",
    description:
      "I worked as a freelance front-end developer on Upwork. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB",
    icon: createElement(SiUpwork),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "Hammol LTD",
    description: "I am currently working as front-end developer",
    icon: createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "BabyBliss",
    description:
      "I worked as a front-end developer for 1 year, where I acquired new skills and gained valuable experience.",
    tags: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "React hooks",
      "React Query",
      "React form hook",
    ],
    imageUrl: babyblissImg,
    href: "https://babybliss.uz",
  },
  {
    title: "Zipfy",
    description:
      "Zipfy, my side project, is a concise URL shortener for easy link sharing.",
    tags: [
      "Golang",
      "Echo",
      "PostgreSQL",
      "Redis",
      "AWS",
      "AWS E2C",
      "React",
      "React hooks",
      "React Query",
    ],
    imageUrl: zipfyImg,
    href: "https://zipfy.uz",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "Golang",
  "Gin",
  "Gorilla mux",
  "GraphQL",
  "Apollo",
  "PostgreSQL",
  "Framer Motion",
] as const;
