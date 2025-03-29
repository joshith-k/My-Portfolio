"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  // Function to scroll to a section
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = ["hero", "projects", "about", "contact"];

    const onScroll = () => {
      let closestSection = null;
      let minDistance = window.innerHeight; // Start with a large distance

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 3);

          if (distance < minDistance && rect.bottom > 0) {
            closestSection = id;
            minDistance = distance;
          }
        }
      }

      if (closestSection) {
        setActiveSection(closestSection);
      } else {
        // If no section is found, keep the last known active section or pick the next available one
        const availableSections = sections.filter((id) =>
          document.getElementById(id)
        );
        if (availableSections.length > 0) {
          if (!availableSections.includes(activeSection)) {
            setActiveSection(availableSections[0]); // Pick the first available section
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection]); // Re-run when active section changes

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {["hero", "projects", "about", "contact"].map((id) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeSection === id ? "bg-white text-gray-900" : "text-white"
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  );
};
