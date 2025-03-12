import React, { useState, useEffect } from "react";

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState("");
  const NAVBAR_HEIGHT = 80; // Adjust if your navbar height differs
  const STICKY_NAV_HEIGHT = 60; // Adjust based on your sticky nav height
  const OFFSET = NAVBAR_HEIGHT + STICKY_NAV_HEIGHT + 16; // Extra padding

  // Function to detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "info",
        "offerings",
        "percentage",
        "info-bar",
        "benefits",
        "faq",
      ];
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

  // Function to scroll to section smoothly with offset
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
    <nav className="sticky top-16 z-50 bg-slate-100 shadow-md border-b">
      <ul className="flex justify-center space-x-8 py-4 text-lg font-medium text-gray-700">
        {[
          { id: "info", label: "Info" },
          { id: "offerings", label: "Offerings" },
          { id: "percentage", label: "Percentage" },
          { id: "info-bar", label: "Info Bar" },
          { id: "benefits", label: "Benefits" },
          { id: "faq", label: "FAQ" },
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

export default StickyNav;
