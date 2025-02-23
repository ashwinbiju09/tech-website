import React from "react";

const Mission = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 py-10">
      <div className="text-center text-2xl lg:text-3xl font-bold text-white">
        Our Mission
      </div>

      <div className="mx-auto my-4 h-[2px] w-60 bg-gradient-to-r from-white/20 via-white to-white/20"></div>

      <div className="container mx-auto flex flex-row items-center justify-center px-6 lg:px-36 pb-6">
        <div className="w-full md:w-2/3 text-white font-semibold lg:pl-8 text-justify">
          Ladera Technology emerges as a leader in the realm of IT excellence,
          towering above the competition. We proudly present an extensive array
          of meticulously tailored services designed to serve as the catalyst
          for businesses to reimagine their boundless potential. Our overarching
          mission remains steadfast and clear to assist our clients in the
          precision optimization of their operations, the ignition of
          productivity, and the fortification of sustainable growth. Our
          foundation is firmly grounded in an unwavering dedication to ensuring
          our customers triumph in their endeavors. As committed partners in
          your expedition towards accelerated innovation and enduring
          achievements, we pledge our expertise, resources, and unwavering
          support to help you reach the pinnacle of success.
        </div>

        <div className="w-0 lg:w-1/3 flex justify-end">
          <img
            className="w-72 h-72 rounded-2xl hidden lg:block"
            src="/assets/mission.jpg"
            alt="mission"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
