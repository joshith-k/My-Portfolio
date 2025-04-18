import warrantyPage from "@/assets/images/warranty.png";
import schoolErpPage from "@/assets/images/schoolERP.png";
import theatreLandingPage from "@/assets/images/theatre2.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

// const portfolioProjects = [
//   {
//     company: "Acme Corp",
//     year: "2022",
//     title: "Dark Saas Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/4k7IdSLxh6w",
//     image: warrantyPage,
//   },
//   {
//     company: "Innovative Co",
//     year: "2021",
//     title: "Light Saas Landing Page",
//     results: [
//       { title: "Boosted sales by 20%" },
//       { title: "Expanded customer reach by 35%" },
//       { title: "Increased brand awareness by 15%" },
//     ],
//     link: "https://youtu.be/7hi5zwO75yc",
//     image: schoolErpPage,
//   },
//   {
//     company: "Quantum Dynamics",
//     year: "2023",
//     title: "AI Startup Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
// ];

const portfolioProjects = [
  {
    company: "OEM Client",
    year: "2023",
    title: "Warranty Management System UI",
    results: [
      {
        title:
          "Implemented a responsive dashboard based on provided Figma designs.",
      },
      {
        title: "Used React and Tailwind CSS to develop reusable UI components.",
      },
      {
        title:
          "Optimized page load times and API integration for a seamless user experience.",
      },
    ],
    link: "https://github.com/yourusername/warranty-ui", // Replace with actual link
    image: warrantyPage,
  },
  {
    company: "Client Project",
    year: "2023",
    title: "Theater Booking Application UI",
    results: [
      {
        title:
          "Developed a frontend interface for booking tickets based on a given UI design.",
      },
      {
        title:
          "Integrated dynamic seat selection and state management using Redux.",
      },
      {
        title: "Ensured smooth UI updates with optimized React rendering.",
      },
    ],
    link: "https://theater-booking-app.vercel.app", // Replace with actual link
    image: theatreLandingPage,
  },
  {
    company: "Education Sector",
    year: "2022",
    title: "College Management System UI",
    results: [
      {
        title:
          "Converted provided designs into a fully responsive React-based admin panel.",
      },
      {
        title:
          "Implemented role-based access control with authentication UI flows.",
      },
      {
        title:
          "Used Redux and React Query for efficient data fetching and state management.",
      },
    ],
    link: "https://github.com/yourusername/college-ui", // Replace with actual link
    image: schoolErpPage,
  },
];

interface ProjectSectionProps {
  id: string;
}

export const ProjectsSection = ({ id }: ProjectSectionProps) => {
  return (
    <section className="pb-16 lg:py-24" id={id}>
      <div className="container">
        <SectionHeader
          eyebrow=" Real-World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 
                inline-flex gap-2 font-bold uppercase tracking-widest
                text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50 "
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full 
                md:w-auto px-6 rounded-xl font-semibold inline-flex items-center 
                justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a> */}
                </div>
                <div className="relative ">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full 
                    lg:w-auto lg:max-w-none rounded-xl"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
