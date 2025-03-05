import React, { useState, useEffect } from "react";
import navLinks from "./navData"; // Import navigation data

const NavBar = () => {
  // Mobile toggle state
  const [isOpen, setIsOpen] = useState(false);

  // Desktop hover states
  const [openDropdown, setOpenDropdown] = useState(null); // index of top-level item hovered
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // index of second-level item hovered

  // Mobile dropdown states
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState(null);

  // Track scroll to change background for desktop nav
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop hover handlers
  const handleMouseEnter = (topIndex) => {
    // Hovering over a top-level item
    setOpenDropdown(topIndex);

    // If this top-level has a subMenu, auto-open the first sub by default
    const firstLevelItem = navLinks[topIndex];
    if (firstLevelItem?.subMenu?.length) {
      setOpenSubDropdown(0);
    } else {
      setOpenSubDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    // Leaving the dropdown area
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const handleSubMouseEnter = (subIndex) => {
    // Hovering over a first-level submenu item
    setOpenSubDropdown(subIndex);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-24 py-2 md:py-3 text-md font-bold font-sans transition-colors duration-300 z-50
        ${
          isScrolled
            ? "bg-white text-black shadow"
            : "bg-transparent text-white"
        }
      `}
    >
      {/* Logo */}
      <div className="m-2">
        <a href="/">
          <img className="h-8" src="/logo.png" alt="Logo" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="m-2 hidden lg:flex space-x-6">
        {navLinks.map((link, topIndex) => (
          <div
            key={topIndex}
            className="relative"
            onMouseEnter={() => handleMouseEnter(topIndex)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Top-level link */}
            <a
              href={link.path}
              className={`px-3 text-md font-semibold flex items-center cursor-pointer transition-all ${
                isScrolled ? "hover:text-gray-700" : "hover:text-gray-200"
              }`}
            >
              {link.name}
              {/* Show dropdown arrow only if there is a subMenu */}
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
            </a>

            {/* Combined Dropdown (Desktop, hover) */}
            {link.subMenu?.length > 0 && (
              <div
                className={`absolute left-0 top-full w-auto shadow-lg z-50 bg-white transition-opacity duration-200 ${
                  openDropdown === topIndex
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {openDropdown === topIndex && (
                  <div className="flex">
                    {/* First-level submenu column */}
                    <div className="p-2 w-48 border-r">
                      {link.subMenu.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="w-full text-left px-4 py-2 text-sm font-semibold text-black hover:text-blue-800 hover:bg-slate-200 cursor-pointer"
                          onMouseEnter={() => handleSubMouseEnter(subIndex)}
                        >
                          {sub.name}
                        </div>
                      ))}
                    </div>

                    {openDropdown === topIndex && (
                      <div
                        className={`p-2 ${
                          openSubDropdown !== null &&
                          link.subMenu[openSubDropdown] &&
                          link.subMenu[openSubDropdown].subMenu?.length > 10
                            ? "w-96"
                            : "w-60"
                        }`}
                      >
                        {openSubDropdown !== null &&
                          link.subMenu[openSubDropdown] &&
                          link.subMenu[openSubDropdown].subMenu?.length > 0 &&
                          (link.subMenu[openSubDropdown].subMenu.length > 10 ? (
                            /* 2-column layout, but vertically stacked 1-5 on left, 6-10 on right, etc. */
                            (() => {
                              const items =
                                link.subMenu[openSubDropdown].subMenu;
                              const half = Math.ceil(items.length / 2);
                              const firstColumn = items.slice(0, half);
                              const secondColumn = items.slice(half);

                              return (
                                <div className="grid grid-cols-2 gap-2">
                                  {/* Left column */}
                                  <div className="flex flex-col">
                                    {firstColumn.map((item, itemIndex) => (
                                      <a
                                        key={itemIndex}
                                        href={item.path || "#"}
                                        className="block px-4 py-2 text-sm font-semibold text-black hover:text-blue-800 hover:bg-slate-200"
                                      >
                                        {item.name || item}
                                      </a>
                                    ))}
                                  </div>

                                  {/* Right column */}
                                  <div className="flex flex-col">
                                    {secondColumn.map((item, itemIndex) => (
                                      <a
                                        key={itemIndex}
                                        href={item.path || "#"}
                                        className="block px-4 py-2 text-sm font-semibold text-black hover:text-blue-800 hover:bg-slate-200"
                                      >
                                        {item.name || item}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              );
                            })()
                          ) : (
                            /* If 10 or fewer items, show them in a single column */
                            <div className="flex flex-col">
                              {link.subMenu[openSubDropdown].subMenu.map(
                                (item, itemIndex) => (
                                  <a
                                    key={itemIndex}
                                    href={item.path || "#"}
                                    className="block px-4 py-2 text-sm font-semibold text-black hover:text-blue-800 hover:bg-slate-200"
                                  >
                                    {item.name || item}
                                  </a>
                                )
                              )}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="m-2 lg:hidden">
        <button
          className={`inline-flex items-center text-lg font-extrabold px-3 py-2 rounded-md transition-all duration-300
            ${isScrolled ? "text-blue-900" : "bg-transparent text-white"}
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE SIDEBAR MENU */}
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
              <a
                href={link.path}
                className="w-full text-left px-2 py-2 text-sm text-blue-800 hover:text-blue-950 font-semibold flex justify-between items-center"
                onClick={() => {
                  // Toggle first-level mobile
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
              </a>

              {/* First-level sub-menu in mobile */}
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 ${
                  openMobileDropdown === index ? "max-h-96" : "max-h-0"
                }`}
              >
                {link.subMenu?.map((sub, subIndex) => (
                  <div key={subIndex}>
                    <a
                      href={sub.path}
                      className="w-full text-left px-2 py-1 text-sm text-blue-800 hover:text-blue-950 font-semibold flex justify-between items-center"
                      onClick={() => {
                        // Toggle second-level mobile
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
                    </a>

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
                          href={item.path}
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
