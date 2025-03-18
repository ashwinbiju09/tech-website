import React, { useState } from "react";
import navLinks from "../General/NavBar/navData";
// Function to transform navLinks into footer menu items
const transformNavLinksToFooterMenu = (navLinks) => {
  const footerMenuItems = [];

  navLinks.forEach((link) => {
    if (link.subMenu) {
      const links = [];
      link.subMenu.forEach((subLink) => {
        if (subLink.subMenu) {
          subLink.subMenu.forEach((nestedSubLink) => {
            if (nestedSubLink.subMenu) {
              nestedSubLink.subMenu.forEach((deepNestedSubLink) => {
                links.push(deepNestedSubLink.name);
              });
            } else {
              links.push(nestedSubLink.name);
            }
          });
        } else {
          links.push(subLink.name);
        }
      });
      footerMenuItems.push({
        title: link.name,
        links: links,
      });
    } else {
      footerMenuItems.push({
        title: link.name,
        links: [link.name],
      });
    }
  });

  return footerMenuItems;
};

const Footer = () => {
  const [expandedMenus, setExpandedMenus] = useState({});

  const menuItems = transformNavLinksToFooterMenu(navLinks);

  // Function to toggle "Show More" for a specific menu
  const toggleShowMore = (title) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <footer className="px-4 pt-8 pb-8 bg-gradient-to-br from-slate-100 to-slate-300 text-gray-800">
      <div className="container mx-auto grid gap-10 lg:grid-cols-6">
        <div className="lg:col-span-2 pl-4">
          <a href="/" className="inline-flex items-center">
            <img className="h-8" src="/assets/logo.png" alt="Company Logo" />
          </a>
          <p className="text-sm pt-4 text-gray-600">
            © 2025 Company Co. All rights reserved.
          </p>
          <div className="flex space-x-4 pt-4">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-900"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-900"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
          {menuItems.map(({ title, links }) => {
            const isExpanded = expandedMenus[title];
            const visibleLinks = isExpanded ? links : links.slice(0, 5); // Show only 5 links initially
            const hasMoreLinks = links.length > 5;

            return (
              <div key={title}>
                <h3 className="font-bold tracking-wide text-gray-800">
                  {title}
                </h3>
                <ul className="mt-2 space-y-2">
                  {visibleLinks.map((link) => (
                    <li key={link}>
                      <a
                        href={link}
                        className="text-gray-600 transition-colors duration-300 hover:text-blue-900"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                  {hasMoreLinks && (
                    <li>
                      <button
                        onClick={() => toggleShowMore(title)}
                        className="text-blue-600 hover:text-blue-900 focus:outline-none"
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
