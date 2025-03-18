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
      {/* Middle: Main nav links + dropdown */}
      <div className="relative flex items-center mx-auto">
        {/* Top-level desktop links */}
        <div className="flex space-x-6">
          {navLinks.map((link, topIndex) => (
            <div
              key={topIndex}
              onMouseEnter={() => handleMouseEnter(topIndex)}
              className={`cursor-pointer px-3 text-md font-semibold tracking-wide transition-all ${
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
            <div
              className="
                absolute top-full left-1/2
                -translate-x-1/2
                bg-gradient-to-br from-slate-100 to-slate-300
                shadow-lg pointer-events-auto
                min-w-[60rem]
                max-h-[600px]
                overflow-auto
                p-4
              "
            >
              <div className="flex">
                {/* Left column (headings & sub items) */}
                <div className="border-r w-60">
                  {navLinks[openDropdown].subMenu.map((sub, subIndex) => {
                    if (sub.Heading) {
                      return (
                        <div key={subIndex} className="px-2">
                          <div className="py-2 text-sm font-extrabold text-black border-slate-300">
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
                              className="cursor-pointer px-4 py-2 ml-2 text-sm font-semibold text-black hover:text-blue-800 hover:bg-white"
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
                        className="cursor-pointer px-2 py-2 text-sm font-semibold text-black hover:text-blue-800 hover:bg-white"
                      >
                        {sub.name}
                      </div>
                    );
                  })}
                </div>

                {/* Right column (deeper nested items) */}
                <div className="w-2/3 pl-4">
                  {openSubDropdown !== null &&
                    (() => {
                      const parentArray = navLinks[openDropdown].subMenu;
                      let itemsToShow = [];

                      if (typeof openSubDropdown === "object") {
                        // "Heading" case
                        const headingObj = parentArray[openSubDropdown.parent];
                        if (!headingObj?.subMenu) return null;
                        const childObj =
                          headingObj.subMenu[openSubDropdown.child];
                        if (!childObj?.subMenu) return null;
                        itemsToShow = childObj.subMenu;
                      } else {
                        // Normal sub-item case
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

      {/* Right: Contact button */}
      <a
        href="/contact"
        className={`ml-4 px-4 py-2 font-semibold tracking-wide rounded transition-all ${
          isScrolled
            ? "text-white bg-gradient-to-br from-yellow-400 to-yellow-600"
            : "text-white hover:bg-white hover:text-blue-800 hover:rounded-sm"
        }`}
      >
        Contact Us
      </a>
    </div>
  );
};

export default DesktopNav;
