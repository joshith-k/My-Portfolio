"use client";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparklesIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

interface HeroSectionProps {
  id: string;
}

export const HeroSection = ({ id }: HeroSectionProps) => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id={id}
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* 
        shouldOrbit?: boolean;
        orbitDuration?: string;
        shouldSpin?: boolean;
        spinDuration?: string; 
        */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit={true}
          orbitDuration="30s"
          shouldSpin={true}
          spinDuration="3s"
        >
          <SparklesIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit={true}
          orbitDuration="32s"
          shouldSpin={true}
          spinDuration="3s"
        >
          <SparklesIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit={true}
          orbitDuration="34s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit={true}
          orbitDuration="36s"
          shouldSpin={true}
          spinDuration="3s"
        >
          <SparklesIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit={true}
          orbitDuration="38s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit={true}
          orbitDuration="40s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit={true}
          orbitDuration="42s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit={true}
          orbitDuration="44s"
        >
          <SparklesIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit={true}
          orbitDuration="46s"
          shouldSpin={true}
          spinDuration="3s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit={true}
          orbitDuration="48s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Open to new opportunities</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Joshith K
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in building scalable, high-performance React
            applications with seamless user experiences.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-50">
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl relative"
            onClick={handleScrollToProjects}
          >
            <span className="font-semibold">Explore My Work</span>
            {/* <ArrowDown className="size-4" /> */}
          </button>
          <a href="/Resume.pdf" download target="_blank">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl relative">
              {/* <span>📩</span> */}
              <ArrowDown className="size-4" />
              <span className="font-semibold">Download Resume</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
