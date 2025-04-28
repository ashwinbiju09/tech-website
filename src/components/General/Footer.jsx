import React from "react";
import navLinks from "../General/NavBar/navData";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const footerLinkPaths = {
  "Why Us": "/about",
  "Privacy Policy": "/privacy-policy",
  Disclaimer: "/disclaimer",
};

const transformNavLinksToFooterMenu = (navLinks) => {
  const footerMenuItems = [];

  navLinks.forEach((link) => {
    if (link.name === "Why Us") return;

    const links = [];

    const collectLinks = (items) => {
      items.forEach((item) => {
        if (item.subMenu) {
          collectLinks(item.subMenu);
        } else if (item.name && item.path) {
          links.push({ name: item.name, path: item.path });
        }
      });
    };

    if (link.subMenu) {
      collectLinks(link.subMenu);
    } else if (link.name && link.path) {
      links.push({ name: link.name, path: link.path });
    }

    footerMenuItems.push({
      title: link.name,
      links: links,
    });
  });

  footerMenuItems.push({
    title: "Quick Links",
    links: [
      { name: "Why Us", path: "/about" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Disclaimer", path: "/disclaimer" },
    ],
  });

  return footerMenuItems;
};

const Footer = () => {
  const menuItems = transformNavLinksToFooterMenu(navLinks);

  return (
    <div className="relative z-20">
      <footer className="px-4 pt-8 pb-8 bg-ice text-gray-800">
        <div className="container mx-auto grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2 pl-4">
            <a href="/" className="inline-flex items-center space-x-2">
              <div className="relative flex items-center justify-center h-12 w-12 pr-2">
                <div className="absolute right-0 h-8 border-r border-midnight" />

                <img
                  src="/footer-favicon.png"
                  alt="Icon"
                  className="h-8 w-10"
                />
              </div>

              <img src="/footer-logo.png" alt="Logo" className="h-10" />
            </a>

            {/* Enhanced Contact Block */}
            <div className="pt-4 space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <IoLocation className="h-5 w-5" />{" "}
                <p>32 Eyre Street, Sheffield, S1 4QZ</p>
              </div>

              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="h-4 w-4" /> <p>0333 772 3807</p>
              </div>

              <p className="pt-2 text-gray-500">
                © 2025 Arka Global. All rights reserved.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              {/* X (formerly Twitter) */}
              <a
                href="https://x.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors duration-300 hover:text-gray-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M22.162 0H1.838C.822 0 0 .822 0 1.838v20.324C0 23.178.822 24 1.838 24h20.324C23.178 24 24 23.178 24 22.162V1.838C24 .822 23.178 0 22.162 0zM17.126 6.489l-4.726 5.965 5.557 7.023h-2.668l-4.354-5.527-4.982 5.527H5.254l5.146-5.737-5.432-6.74h2.668l4.154 5.202 4.599-5.202h2.637z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors duration-300 hover:text-blue-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.447 20.452H17.2V14.84c0-1.337-.027-3.065-1.868-3.065-1.868 0-2.154 1.46-2.154 2.968v5.709H9.934V9h3.123v1.561h.043c.435-.823 1.498-1.69 3.087-1.69 3.3 0 3.909 2.172 3.909 5v6.581zM5.337 7.433a1.81 1.81 0 1 1 0-3.619 1.81 1.81 0 0 1 0 3.619zm1.617 13.019H3.721V9h3.233v11.452zM22.225 0H1.771C.791 0 0 .771 0 1.729v20.542C0 23.229.791 24 1.771 24h20.451C23.21 24 24 23.229 24 22.271V1.729C24 .771 23.209 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Menus */}
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            {menuItems.map(({ title, links }) => {
              const visibleLinks = links.slice(0, 6);

              return (
                <div key={title}>
                  <h3 className="font-bold tracking-wide text-gray-800">
                    {title}
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {visibleLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.path}
                          className="text-gray-600 transition-colors duration-300 hover:text-blue-900"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
