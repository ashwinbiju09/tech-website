import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const NAVBAR_HEIGHT = 80;
  const STICKY_NAV_HEIGHT = 60;
  const OFFSET = NAVBAR_HEIGHT + STICKY_NAV_HEIGHT + 16;

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
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
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
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

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "insights", label: "Insights" },
  ];

  return (
    <nav className="hidden md:block sticky top-16 lg:top-12 z-40 py-4">
      <div className="max-w-4xl mx-auto bg-slate-100 rounded-lg shadow-md border border-slate-200">
        <ul className="flex justify-center space-x-8 py-2 text-md font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-1 transition-all duration-300 hover:text-yellow-400"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
