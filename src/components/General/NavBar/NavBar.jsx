import React, { useState, useEffect } from "react";
import navLinks from "./navData";
import Logo from "../../../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (topIndex) => {
    setOpenDropdown(topIndex);
    const firstLevel = navLinks[topIndex];
    if (firstLevel?.subMenu?.length) setOpenSubDropdown(0);
    else setOpenSubDropdown(null);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const handleSubMouseEnter = (subIndex) => {
    setOpenSubDropdown(subIndex);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${
        isScrolled ? "bg-white text-black shadow" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-24 py-2 md:py-3 font-bold font-sans">
        <a href="/" className="m-2">
          <img className="h-8" src={Logo} alt="Logo" />
        </a>

        {/* Desktop Nav */}
        <div
          className="hidden lg:block relative"
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex space-x-6">
            {navLinks.map((link, topIndex) => (
              <div
                key={topIndex}
                onMouseEnter={() => handleMouseEnter(topIndex)}
                className={`cursor-pointer px-3 text-md font-semibold transition-all ${
                  isScrolled ? "hover:text-gray-700" : "hover:text-gray-200"
                }`}
              >
                <a href={link.path || "#"}>{link.name}</a>
              </div>
            ))}
          </div>

          {openDropdown !== null &&
            navLinks[openDropdown]?.subMenu?.length > 0 && (
              <div
                className="
          absolute top-full left-1/2
          -translate-x-1/2
          bg-gradient-to-br from-slate-100 to-slate-300
          shadow-lg pointer-events-auto
          min-w-[42rem]
          max-h-[600px]
          overflow-auto
          p-4
        "
              >
                <div className="flex">
                  {/* First column */}
                  <div className="border-r w-1/3 pr-4">
                    {navLinks[openDropdown].subMenu.map((sub, subIndex) => {
                      if (sub.Heading) {
                        return (
                          <div key={subIndex} className="px-4">
                            {/* Heading with an underline */}
                            <div className="py-2 text-md font-extrabold text-black uppercase border-b border-slate-300 mb-2">
                              {sub.Heading}
                            </div>
                            {/* Children align with heading */}
                            {sub.subMenu?.map((child, childIndex) => (
                              <div
                                key={childIndex}
                                onMouseEnter={() =>
                                  handleSubMouseEnter(childIndex)
                                }
                                className="cursor-pointer py-2 text-sm font-semibold text-black hover:text-blue-800"
                              >
                                {child.name}
                              </div>
                            ))}
                          </div>
                        );
                      }
                      return (
                        <div
                          key={subIndex}
                          onMouseEnter={() => handleSubMouseEnter(subIndex)}
                          className="cursor-pointer px-4 py-2 text-sm font-semibold text-black hover:text-blue-800 hover:bg-white"
                        >
                          {sub.name}
                        </div>
                      );
                    })}
                  </div>

                  {/* Second column */}
                  <div className="w-2/3 pl-4 pt-10">
                    {openSubDropdown !== null &&
                      (() => {
                        const parentArray = navLinks[openDropdown].subMenu;
                        let itemsToShow = [];

                        if (
                          parentArray.length === 1 &&
                          parentArray[0].Heading &&
                          parentArray[0].subMenu
                        ) {
                          const headingObj = parentArray[0];
                          const child = headingObj.subMenu[openSubDropdown];
                          if (!child?.subMenu) return null;
                          itemsToShow = child.subMenu;
                        } else {
                          const normalObj = parentArray[openSubDropdown];
                          if (!normalObj?.subMenu) return null;
                          itemsToShow = normalObj.subMenu;
                        }

                        if (itemsToShow.length > 10) {
                          const half = Math.ceil(itemsToShow.length / 2);
                          const leftCol = itemsToShow.slice(0, half);
                          const rightCol = itemsToShow.slice(half);

                          return (
                            <div className="grid grid-cols-2 gap-8">
                              <div className="flex flex-col">
                                {leftCol.map((item, i) => (
                                  <a
                                    key={i}
                                    href={item.path || "#"}
                                    className="block px-4 py-2 text-sm font-semibold text-black hover:text-blue-800 hover:bg-slate-200 whitespace-nowrap"
                                  >
                                    {item.name || item}
                                  </a>
                                ))}
                              </div>
                              <div className="flex flex-col">
                                {rightCol.map((item, i) => (
                                  <a
                                    key={i}
                                    href={item.path || "#"}
                                    className="block px-4 py-2 text-sm font-semibold text-black hover:text-blue-800 hover:bg-slate-200 whitespace-nowrap"
                                  >
                                    {item.name || item}
                                  </a>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return (
                          <div className="flex flex-col">
                            {itemsToShow.map((item, i) => (
                              <a
                                key={i}
                                href={item.path || "#"}
                                className="block px-4 py-2 text-sm font-semibold text-black hover:text-blue-800 hover:bg-slate-200 whitespace-nowrap"
                              >
                                {item.name || item}
                              </a>
                            ))}
                          </div>
                        );
                      })()}
                  </div>
                </div>
              </div>
            )}
        </div>

        {/* Mobile Menu Button */}
        <div className="m-2 lg:hidden">
          <button
            className={`inline-flex items-center text-lg font-extrabold px-3 py-2 rounded-md transition-all duration-300 ${
              isScrolled ? "text-blue-900" : "bg-transparent text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden z-10 fixed top-0 right-0 w-full md:w-1/2 h-full bg-slate-100 text-blue-800 hover:text-blue-950 flex flex-col p-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="w-full flex justify-center">
          <button
            className="px-5 py-2 rounded-md text-xl font-extrabold"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        <div className="w-full flex flex-col items-start mt-4">
          {navLinks.map((link, index) => (
            <div key={index} className="w-full">
              <a
                href={link.path}
                className="w-full text-left px-2 py-2 text-lg text-blue-800 hover:text-blue-950 font-semibold flex justify-between items-center"
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
              </a>

              <div
                className={`pl-4 overflow-hidden transition-all duration-300 ${
                  openMobileDropdown === index ? "max-h-96" : "max-h-0"
                }`}
              >
                {link.subMenu?.map((sub, subIndex) => {
                  if (sub.Heading) {
                    return (
                      <div key={subIndex}>
                        <div className="text-base font-bold px-4 py-2">
                          {sub.Heading}
                        </div>
                        {sub.subMenu?.map((child, childIndex) => (
                          <div key={childIndex}>
                            <a
                              href={child.path}
                              className="w-full text-left px-2 py-1 text-lg text-blue-800 hover:text-blue-950 font-semibold flex justify-between items-center"
                              onClick={() => {
                                setOpenMobileSubDropdown(
                                  openMobileSubDropdown === childIndex
                                    ? null
                                    : childIndex
                                );
                              }}
                            >
                              {child.name}
                              {child.subMenu?.length > 0 && (
                                <span className="ml-2">
                                  {openMobileSubDropdown === childIndex
                                    ? "−"
                                    : "+"}
                                </span>
                              )}
                            </a>
                            <div
                              className={`pl-4 overflow-hidden transition-all duration-300 ${
                                openMobileSubDropdown === childIndex
                                  ? "max-h-96"
                                  : "max-h-0"
                              }`}
                            >
                              {child.subMenu?.map((item, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href={item.path}
                                  className="block px-2 py-1 text-lg font-semibold text-blue-800 hover:text-blue-950"
                                >
                                  {item.name || item}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <div key={subIndex}>
                      <a
                        href={sub.path}
                        className="w-full text-left px-2 py-1 text-lg text-blue-800 hover:text-blue-950 font-semibold flex justify-between items-center"
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
                      </a>
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
                            className="block px-2 py-1 text-lg font-semibold text-blue-800 hover:text-blue-950"
                          >
                            {item.name || item}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
