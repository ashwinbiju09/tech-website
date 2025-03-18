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
  return (
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

            {/* Submenu for mobile */}
            <div
              className={`pl-4 overflow-hidden transition-all duration-300 ${
                openMobileDropdown === index ? "max-h-96" : "max-h-0"
              }`}
            >
              {link.subMenu?.map((sub, subIndex) => {
                // If there's a heading in sub
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

                          {/* Deeper nested submenu */}
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

                // If it's just a normal sub-item
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
  );
};

export default MobileNav;
