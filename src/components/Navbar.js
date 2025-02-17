import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "About us", path: "#" },
  {
    name: "Services",
    subMenu: [
      {
        name: "SAP",
        subMenu: [
          "SAP Consulting",
          "SAP Implementation",
          "SAP Migrations",
          "SAP Support",
        ],
      },
      {
        name: "Oracle",
        subMenu: ["Oracle Consulting", "Oracle Development"],
      },
      {
        name: "Digital Application",
        subMenu: [
          "Application Development & Maintenance",
          "Application Modernization",
          "Application Re-Engineering",
        ],
      },
      {
        name: "DevOps",
        subMenu: [],
      },
      {
        name: "Data, Automation AI",
        subMenu: [
          "Data Engineering",
          "Data Analytics",
          "Data Modernization",
          "Automation AI",
        ],
      },
    ],
  },
  {
    name: "COEs",
    subMenu: [
      {
        name: "AWS",
        subMenu: ["AWS Migration", "AWS Managed", "AWS Transformation"],
      },
      {
        name: "SAP",
        subMenu: [],
      },
      {
        name: "Microsoft",
        subMenu: [],
      },
    ],
  },
  { name: "Industries", path: "#" },
  { name: "Career", path: "#" },
  { name: "Contact Us", path: "#" },
];

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
              className="px-3 text-sm font-semibold text-blue-900 flex items-center cursor-pointer transition-all"
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
              {/* Only render if subMenu exists and dropdown is open */}
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
                        className="w-full text-left px-4 py-2 text-sm font-semibold text-blue-900 flex justify-between items-center"
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
                                  href="#"
                                  className="block px-4 py-2 text-sm font-semibold text-blue-900"
                                >
                                  {item}
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
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-10 fixed top-0 right-0 w-3/4 md:w-1/2 h-full bg-slate-100 text-blue-900 flex flex-col p-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="w-full flex justify-center">
          <button
            className="px-5 py-2 rounded-md text-lg font-extrabold"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="w-full flex flex-col items-start mt-4">
          {navLinks.map((link, index) => (
            <div key={index} className="w-full">
              <button
                className="w-full text-left px-2 py-2 text-sm text-blue-900 font-semibold flex justify-between items-center"
                onClick={() => {
                  setOpenMobileDropdown(
                    openMobileDropdown === index ? null : index
                  );
                  // Reset second-level if a different top-level is toggled
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

              {/* First-level sub-menu in mobile with a sliding transition */}
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 ${
                  openMobileDropdown === index ? "max-h-96" : "max-h-0"
                }`}
              >
                {link.subMenu?.map((sub, subIndex) => (
                  <div key={subIndex}>
                    <button
                      className="w-full text-left px-2 py-1 text-sm text-blue-900 font-semibold flex justify-between items-center"
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

                    {/* Second-level sub-menu in mobile with a sliding transition */}
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
                          href="#"
                          className="block px-2 py-1 text-sm text-blue-900"
                        >
                          {item}
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
