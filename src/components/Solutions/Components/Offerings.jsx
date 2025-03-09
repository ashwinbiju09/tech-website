import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const Offerings = ({ offerings }) => {
  return (
    <section className="w-full pt-10 pb-16 bg-gradient-to-b from-blue-950 to-blue-900">
      <div className="container mx-auto px-6 lg:px-16 ">
        <h2 className="text-4xl font-bold text-gray-100 text-center mb-8">
          Our Offerings
        </h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {offerings.departments.map((department, index) => (
            <SwiperSlide key={index} className="relative flex justify-center">
              {/* Content Box */}
              <div className="relative w-full bg-gradient-to-br from-slate-100 to-slate-300 pt-12 pb-16 px-8 rounded-sm shadow-lg">
                <h3 className="text-3xl font-extrabold text-gray-900 text-center">
                  {department.title}
                </h3>
                <p className="mt-2 text-lg text-gray-700 text-center">
                  {department.content}
                </p>

                {/* Features List - 2x2 Grid and Centered */}
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-12 justify-center">
                  {department.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      {/* Feature Icon */}
                      <span className="hidden lg:flex w-10 h-10 items-center justify-center bg-blue-600 rounded-full p-2">
                        {feature.icon}
                      </span>
                      {/* Feature Text */}
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Offerings;
