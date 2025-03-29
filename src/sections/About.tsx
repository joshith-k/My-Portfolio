"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import theOneThing from "@/assets/images/theonething.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import GithubIcon from "@/assets/icons/github.svg";
import Typescript from "@/assets/icons/typescript.svg";
import NextJsIcon from "@/assets/icons/next.svg";
import TailwindIcon from "@/assets/icons/icons8-tailwind-css.svg";
import NodeJsIcon from "@/assets/icons/node.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import GitIcon from "@/assets/icons/git.svg";
import MongoDbIcon from "@/assets/icons/mongodb.svg";
import MySQLIcon from "@/assets/icons/mysql.svg";
import VercelIcon from "@/assets/icons/vercel.svg";

import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "TypeScript",
    iconType: Typescript,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Redux",
    iconType: ReduxIcon,
  },
  {
    title: "Next.js",
    iconType: NextJsIcon,
  },
  {
    title: "Node.js",
    iconType: NodeJsIcon, // Add correct import for Node.js icon
  },
  {
    title: "Express.js",
    iconType: ExpressIcon, // Add correct import for Express.js icon
  },
  {
    title: "MongoDB",
    iconType: MongoDbIcon, // Add correct import for MongoDB icon
  },
  {
    title: "MySQL",
    iconType: MySQLIcon, // Add correct import for MySQL icon
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon, // Add correct import for Tailwind CSS icon
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "Git",
    iconType: GitIcon, // Add correct import for Git icon
  },
  {
    title: "Vercel",
    iconType: VercelIcon, // Add correct import for Vercel icon
  },
];

const hobbies = [
  {
    title: "Photography",
    emoji: "📷",
    left: "60%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "65%",
    top: "65%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Movies",
    emoji: "🎞️",
    left: "35%",
    top: "65%",
  },
  {
    title: "Vehicle Restoration",
    emoji: "⚙️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Organising",
    emoji: "🛋️",
    left: "50%",
    top: "5%",
  },
];

const books = [
  {
    title: "The One Thing",
    author: "Gary Keller & Jay Papasan",
    description:
      "A book about focusing on the one most important thing in your life to achieve extraordinary results.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "A guide to building good habits, breaking bad ones, and making small changes that lead to remarkable results.",
  },
];
interface AboutSectionProps {
  id: string;
}

export const AboutSection = ({ id }: AboutSectionProps) => {
  const constraintsRef = useRef(null);
  return (
    <div className="py-20 lg:py-28 " id={id}>
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about Who I am, What I do, and What Inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-full overflow-x-auto flex gap-4 px-4">
                {[
                  { title: "The One Thing", image: theOneThing },
                  { title: "Atomic Habits", image: bookImage },
                ].map((book, index) => (
                  <div key={index} className="w-20 shrink-0 object-contain">
                    <Image src={book.image} alt={book.title} />
                    <p className="text-center mt-1">{book.title}</p>
                  </div>
                ))}
              </div>
            </Card> */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="px-4 py-2 overflow-hidden animate-move-up  [animation-duration:30s]">
                <ul className="list-disc pl-4 space-y-2">
                  {books.map((book, index) => (
                    <li key={index}>
                      <p className="font-semibold">{book.title}</p>
                      <p className="text-sm text-gray-600">by {book.author}</p>
                      <p className="text-sm text-gray-500">
                        {book.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences"
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName=" animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my Interest and Hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2  lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 "></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>{" "}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
