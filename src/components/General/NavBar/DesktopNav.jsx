import React from "react";

const DesktopNav = ({
  navLinks,
  isScrolled,
  openDropdown,
  openSubDropdown,
  handleMouseEnter,
  handleMouseLeave,
  handleSubMouseEnter,
}) => {
  return (
    <div
      className="hidden lg:flex items-center justify-between w-full relative"
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center mx-auto">
        {/* Top-level desktop links */}
        <div className="flex space-x-6">
          {navLinks.map((link, topIndex) => (
            <div
              key={topIndex}
              onMouseEnter={() => handleMouseEnter(topIndex)}
              className={`cursor-pointer px-4 text-md font-semibold tracking-wide transition-all ${
                isScrolled ? "hover:text-gray-700" : "hover:text-gray-200"
              }`}
            >
              <a href={link.path || "#"}>{link.name}</a>
            </div>
          ))}
        </div>

        {/* Dropdown container */}
        {openDropdown !== null &&
          navLinks[openDropdown]?.subMenu?.length > 0 && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-midnight shadow-lg pointer-events-auto min-w-[60rem] max-h-[600px] overflow-auto p-4">
              <div className="flex">
                {/* Left column (headings & sub items) */}
                <div className="border-r w-60">
                  {navLinks[openDropdown].subMenu.map((sub, subIndex) => {
                    if (sub.Heading) {
                      return (
                        <div key={subIndex} className="px-2">
                          <div className="py-2 text-sm font-medium text-white border-slate-300">
                            {sub.Heading}
                          </div>
                          {sub.subMenu?.map((child, childIndex) => (
                            <div
                              key={childIndex}
                              onMouseEnter={() =>
                                handleSubMouseEnter({
                                  parent: subIndex,
                                  child: childIndex,
                                })
                              }
                              className="group relative cursor-pointer px-4 py-2 ml-2 text-sm font-medium text-white transition-colors"
                            >
                              {/* Hover effect background */}
                              <div
                                className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                                style={{
                                  background:
                                    "linear-gradient(to right, #FACC1566, transparent)",
                                  borderLeft: "4px solid #FACC15",
                                  borderRadius: "2px",
                                }}
                              ></div>

                              <div className="relative z-10 flex items-center justify-between">
                                <span>{child.name}</span>
                                <img
                                  src="https://img.icons8.com/ios-filled/50/facc15/circled-chevron-right.png"
                                  alt="chevron-right"
                                  className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }

                    return (
                      <div
                        key={subIndex}
                        onMouseEnter={() => handleSubMouseEnter(subIndex)}
                        className="group relative cursor-pointer px-2 py-2 text-sm font-medium text-white transition-colors"
                      >
                        {/* Hover effect background */}
                        <div
                          className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                          style={{
                            background:
                              "linear-gradient(to right, #FACC1566, transparent)",
                            borderLeft: "4px solid #FACC15",
                            borderRadius: "2px",
                          }}
                        ></div>

                        <div className="relative z-10 flex items-center justify-between">
                          <span>{sub.name}</span>
                          <img
                            src="https://img.icons8.com/ios-filled/50/facc15/circled-chevron-right.png"
                            alt="chevron-right"
                            className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right column (deeper nested items) */}
                <div className="w-2/3 pl-4">
                  {openSubDropdown !== null && (
                    <div
                      key={
                        typeof openSubDropdown === "object"
                          ? `${openSubDropdown.parent}-${openSubDropdown.child}`
                          : openSubDropdown
                      }
                      className="animate-slide-in transition-all duration-500 ease-out"
                    >
                      {(() => {
                        const parentArray = navLinks[openDropdown].subMenu;
                        let itemsToShow = [];

                        if (typeof openSubDropdown === "object") {
                          const headingObj =
                            parentArray[openSubDropdown.parent];
                          if (!headingObj?.subMenu) return null;
                          const childObj =
                            headingObj.subMenu[openSubDropdown.child];
                          if (!childObj?.subMenu) return null;
                          itemsToShow = childObj.subMenu;
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
                                    className="group relative block px-4 py-2 text-sm font-medium text-white transition-colors whitespace-nowrap"
                                  >
                                    <div
                                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                      style={{
                                        background:
                                          "linear-gradient(to right, #FACC1566, transparent)",
                                        borderLeft: "4px solid #FACC15",
                                        borderRadius: "2px",
                                      }}
                                    ></div>
                                    <span className="relative z-10">
                                      {item.name || item}
                                    </span>
                                  </a>
                                ))}
                              </div>
                              <div className="flex flex-col">
                                {rightCol.map((item, i) => (
                                  <a
                                    key={i}
                                    href={item.path || "#"}
                                    className="group relative block px-4 py-2 text-sm font-medium text-white transition-colors whitespace-nowrap"
                                  >
                                    <div
                                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                      style={{
                                        background:
                                          "linear-gradient(to right, #FACC1566, transparent)",
                                        borderLeft: "4px solid #FACC15",
                                        borderRadius: "2px",
                                      }}
                                    ></div>
                                    <span className="relative z-10">
                                      {item.name || item}
                                    </span>
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
                                className="group relative block px-4 py-2 text-sm font-medium text-white transition-colors whitespace-nowrap"
                              >
                                <div
                                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                  style={{
                                    background:
                                      "linear-gradient(to right, #FACC1566, transparent)",
                                    borderLeft: "4px solid #FACC15",
                                    borderRadius: "2px",
                                  }}
                                ></div>
                                <span className="relative z-10">
                                  {item.name || item}
                                </span>
                              </a>
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
      </div>

      <a
        href="/contact"
        className={`ml-4 px-4 py-2 font-semibold tracking-wide rounded-sm relative overflow-hidden transition-all duration-300 z-10
    ${
      isScrolled
        ? "text-yellow-400 border-2 border-yellow-400 hover:text-midnight"
        : "text-white hover:text-blue-800"
    }
    before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:transition-all before:duration-300 before:z-[-1]
    ${
      isScrolled
        ? "before:bg-yellow-400 hover:before:w-full"
        : "hover:before:bg-white hover:before:w-full"
    }
  `}
      >
        Contact Us
      </a>
    </div>
  );
};

export default DesktopNav;
