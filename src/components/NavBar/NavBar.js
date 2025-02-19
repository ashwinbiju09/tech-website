import React, { useState, useEffect } from "react";
import navLinks from "./navData"; // Import navigation data

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Desktop dropdown states
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  // Mobile dropdown states
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState(null);

  // Close dropdown (desktop) when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="w-full flex justify-between items-center px-4 md:px-24 py-2 md:py-3 text-md font-bold relative font-sans">
      {/* Logo */}
      <div className="m-2">
        <a href="/">
          <img className="h-8" src="/assets/logo.png" alt="Logo" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="m-2 hidden lg:flex space-x-6">
        {navLinks.map((link, index) => (
          <div key={index} className="relative dropdown-container">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenDropdown(openDropdown === index ? null : index);
                setOpenSubDropdown(null);
              }}
              className="px-3 text-sm font-semibold text-blue-800 hover:text-blue-950 flex items-center cursor-pointer transition-all"
            >
              {link.name}
              {link.subMenu?.length > 0 && (
                <svg className="w-3 h-3 ml-2" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>

            {/* First Level Dropdown (Desktop) */}
            <div
              className={`
                absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg z-50 
                transition-all duration-300 ease-in-out transform origin-top
                ${
                  openDropdown === index
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-0"
                }
              `}
            >
              {openDropdown === index && link.subMenu?.length > 0 && (
                <div>
                  {link.subMenu.map((sub, subIndex) => (
                    <div key={subIndex} className="relative dropdown-container">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenSubDropdown(
                            openSubDropdown === subIndex ? null : subIndex
                          );
                        }}
                        className="w-full text-left px-4 py-2 text-sm font-semibold text-blue-800 hover:text-blue-950 flex justify-between items-center"
                      >
                        {sub.name}
                        {sub.subMenu?.length > 0 && (
                          <svg
                            className="w-3 h-3 ml-2"
                            viewBox="0 0 6 10"
                            fill="none"
                          >
                            <path
                              d="M1 9l4-4-4-4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>

                      {/* Second Level Dropdown (Desktop) */}
                      <div
                        className={`
                          absolute left-full top-0 ml-2 w-56 bg-white shadow-lg rounded-lg z-50
                          transition-all duration-300 ease-in-out transform origin-top-left
                          ${
                            openSubDropdown === subIndex
                              ? "opacity-100 scale-y-100"
                              : "opacity-0 scale-y-0"
                          }
                        `}
                      >
                        {openSubDropdown === subIndex &&
                          sub.subMenu?.length > 0 && (
                            <div>
                              {sub.subMenu.map((item, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href={item.path || "#"}
                                  className="block px-4 py-2 text-sm font-semibold text-blue-800 hover:text-blue-950"
                                >
                                  {item.name || item}
                                </a>
                              ))}
                            </div>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="m-2 lg:hidden">
        <button
          className="inline-flex items-center text-lg font-extrabold text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-10 fixed top-0 right-0 w-3/4 md:w-1/2 h-full bg-slate-100 text-blue-800 hover:text-blue-950 flex flex-col p-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="w-full flex justify-center">
          <button
            className="px-5 py-2 rounded-md text-lg font-extrabold"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="w-full flex flex-col items-start mt-4">
          {navLinks.map((link, index) => (
            <div key={index} className="w-full">
              <button
                className="w-full text-left px-2 py-2 text-sm text-blue-800 hover:text-blue-950 font-semibold flex justify-between items-center"
                onClick={() => {
                  setOpenMobileDropdown(
                    openMobileDropdown === index ? null : index
                  );
                  setOpenMobileSubDropdown(null);
                }}
              >
                {link.name}
                {link.subMenu?.length > 0 && (
                  <span className="ml-2">
                    {openMobileDropdown === index ? "−" : "+"}
                  </span>
                )}
              </button>

              {/* First-level sub-menu in mobile */}
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 ${
                  openMobileDropdown === index ? "max-h-96" : "max-h-0"
                }`}
              >
                {link.subMenu?.map((sub, subIndex) => (
                  <div key={subIndex}>
                    <button
                      className="w-full text-left px-2 py-1 text-sm text-blue-800 hover:text-blue-950 font-semibold flex justify-between items-center"
                      onClick={() => {
                        setOpenMobileSubDropdown(
                          openMobileSubDropdown === subIndex ? null : subIndex
                        );
                      }}
                    >
                      {sub.name}
                      {sub.subMenu?.length > 0 && (
                        <span className="ml-2">
                          {openMobileSubDropdown === subIndex ? "−" : "+"}
                        </span>
                      )}
                    </button>

                    {/* Second-level sub-menu in mobile */}
                    <div
                      className={`pl-4 overflow-hidden transition-all duration-300 ${
                        openMobileSubDropdown === subIndex
                          ? "max-h-96"
                          : "max-h-0"
                      }`}
                    >
                      {sub.subMenu?.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.path || "#"}
                          className="block px-2 py-1 text-sm text-blue-800 hover:text-blue-950"
                        >
                          {item.name || item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
