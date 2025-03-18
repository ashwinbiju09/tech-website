import React, { useState, useEffect } from "react";
import navLinks from "./navData"; // your nav data
import Logo from "../../../assets/logo.png"; // your logo
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  // Shared states
  const [isScrolled, setIsScrolled] = useState(false);

  // Desktop states
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  // Mobile states
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop handlers
  const handleMouseEnter = (topIndex) => {
    setOpenDropdown(topIndex);
    const firstLevel = navLinks[topIndex];
    if (firstLevel?.subMenu?.length) {
      if (firstLevel.subMenu[0].Heading) {
        setOpenSubDropdown({ parent: 0, child: 0 });
      } else {
        setOpenSubDropdown(0);
      }
    } else {
      setOpenSubDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const handleSubMouseEnter = (val) => {
    setOpenSubDropdown(val);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${
        isScrolled ? "bg-white text-black shadow" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-24 py-2 md:py-1">
        {/* Logo */}
        <a href="/" className="m-2">
          <img className="h-8" src={Logo} alt="Logo" />
        </a>

        {/* Desktop Nav */}
        <DesktopNav
          navLinks={navLinks}
          isScrolled={isScrolled}
          openDropdown={openDropdown}
          openSubDropdown={openSubDropdown}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleSubMouseEnter={handleSubMouseEnter}
        />

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
      <MobileNav
        navLinks={navLinks}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openMobileDropdown={openMobileDropdown}
        setOpenMobileDropdown={setOpenMobileDropdown}
        openMobileSubDropdown={openMobileSubDropdown}
        setOpenMobileSubDropdown={setOpenMobileSubDropdown}
      />
    </div>
  );
};

export default NavBar;
