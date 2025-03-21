import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const NAVBAR_HEIGHT = 80;
  const STICKY_NAV_HEIGHT = 60;
  const OFFSET = NAVBAR_HEIGHT + STICKY_NAV_HEIGHT + 16;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "services", "insights"];
      let foundSection = "";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= OFFSET && rect.bottom >= OFFSET) {
            foundSection = section;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - OFFSET,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="hidden md:block sticky top-14 z-40 bg-white shadow-md border-b">
      <ul className="flex justify-center space-x-8 py-2 text-md font-medium text-gray-700">
        {[
          { id: "overview", label: "Overview" },
          { id: "services", label: "Services" },
          { id: "insights", label: "Insights" },
        ].map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1 transition-all duration-300 ${
                activeSection === item.id
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-500 hover:text-blue-700"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
