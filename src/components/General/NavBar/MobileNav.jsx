import React from "react";

const MobileNav = ({
  navLinks,
  isOpen,
  setIsOpen,
  openMobileDropdown,
  setOpenMobileDropdown,
  openMobileSubDropdown,
  setOpenMobileSubDropdown,
}) => {
  const handleNavigation = (path, hasSubmenu) => {
    if (!hasSubmenu) {
      window.location.href = path;
    }
  };

  return (
    <div
      className={`lg:hidden z-50 fixed top-0 right-0 w-full md:w-1/2 h-full bg-slate-100 flex flex-col transition-transform duration-300 ease-in-out ${
        isOpen ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      {/* Header with centered close button */}
      <div className="sticky top-0 w-full flex justify-center items-center p-4 bg-slate-100 border-b border-slate-200 z-10">
        <button
          className="px-5 py-2 rounded-md text-xl font-extrabold text-blue-800 hover:text-blue-950"
          onClick={() => {
            setIsOpen(false);
            setOpenMobileDropdown(null);
            setOpenMobileSubDropdown(null);
          }}
        >
          ✖
        </button>
      </div>

      {/* Main scrollable container */}
      <div className="flex-1 overflow-y-auto px-6 pb-20 hide-scrollbar">
        <div className="w-full flex flex-col items-start mt-4">
          {navLinks.map((link, index) => (
            <div key={index} className="w-full">
              <a
                href={link.path}
                className="w-full text-left px-2 py-2 text-lg text-blue-800 hover:text-blue-950 font-semibold flex justify-between items-center"
                onClick={(e) => {
                  e.preventDefault();
                  if (link.subMenu?.length > 0) {
                    if (openMobileDropdown === index) {
                      setOpenMobileDropdown(null);
                      setOpenMobileSubDropdown(null);
                    } else {
                      setOpenMobileDropdown(index);
                      setOpenMobileSubDropdown(null);
                    }
                  } else {
                    handleNavigation(link.path, false);
                  }
                }}
              >
                {link.name}
                {link.subMenu?.length > 0 && (
                  <span className="ml-2">
                    {openMobileDropdown === index ? "−" : "+"}
                  </span>
                )}
              </a>

              {/* First level submenu */}
              <div
                className={`pl-4 overflow-y-auto hide-scrollbar transition-all duration-300 ${
                  openMobileDropdown === index ? "max-h-[60vh]" : "max-h-0"
                }`}
              >
                {link.subMenu?.map((sub, subIndex) => {
                  if (sub.Heading) {
                    return (
                      <div key={subIndex} className="mb-2">
                        <div className="text-base font-bold px-4 py-2 text-blue-900">
                          {sub.Heading}
                        </div>
                        {sub.subMenu?.map((child, childIndex) => (
                          <div key={childIndex}>
                            <a
                              href={child.path}
                              className="w-full text-left px-2 py-1 text-lg text-blue-800 hover:text-blue-950 font-semibold flex justify-between items-center"
                              onClick={(e) => {
                                e.preventDefault();
                                if (child.subMenu?.length > 0) {
                                  const globalIndex = `${index}-${subIndex}-${childIndex}`;
                                  setOpenMobileSubDropdown(
                                    openMobileSubDropdown === globalIndex
                                      ? null
                                      : globalIndex
                                  );
                                } else {
                                  handleNavigation(child.path, false);
                                }
                              }}
                            >
                              {child.name}
                              {child.subMenu?.length > 0 && (
                                <span className="ml-2">
                                  {openMobileSubDropdown ===
                                  `${index}-${subIndex}-${childIndex}`
                                    ? "−"
                                    : "+"}
                                </span>
                              )}
                            </a>

                            {/* Third level submenu */}
                            <div
                              className={`pl-4 overflow-y-auto hide-scrollbar transition-all duration-300 ${
                                openMobileSubDropdown ===
                                `${index}-${subIndex}-${childIndex}`
                                  ? "max-h-[40vh]"
                                  : "max-h-0"
                              }`}
                            >
                              {child.subMenu?.map((item, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href={item.path}
                                  className="block px-2 py-1 text-lg font-semibold text-blue-800 hover:text-blue-950"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(item.path, false);
                                  }}
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
                        onClick={(e) => {
                          e.preventDefault();
                          if (sub.subMenu?.length > 0) {
                            const globalIndex = `${index}-${subIndex}`;
                            setOpenMobileSubDropdown(
                              openMobileSubDropdown === globalIndex
                                ? null
                                : globalIndex
                            );
                          } else {
                            handleNavigation(sub.path, false);
                          }
                        }}
                      >
                        {sub.name}
                        {sub.subMenu?.length > 0 && (
                          <span className="ml-2">
                            {openMobileSubDropdown === `${index}-${subIndex}`
                              ? "−"
                              : "+"}
                          </span>
                        )}
                      </a>

                      {/* Second level regular submenu */}
                      <div
                        className={`pl-4 overflow-y-auto hide-scrollbar transition-all duration-300 ${
                          openMobileSubDropdown === `${index}-${subIndex}`
                            ? "max-h-[40vh]"
                            : "max-h-0"
                        }`}
                      >
                        {sub.subMenu?.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={item.path}
                            className="block px-2 py-1 text-lg font-semibold text-blue-800 hover:text-blue-950"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(item.path, false);
                            }}
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

export default MobileNav;
