import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Info = () => {
  const keywords = ["Automate.", "Optimize.", "Grow."];

  const testimonials = [
    {
      quote:
        "Arka brought AI automation to our ERP system that now handles routine tasks like creating reports. This has cut down errors and saved us time. Their solution also gives us easy-to- understand dashboards that help us make better financial decisions with our data.",
      role: "Financial Consultant, Dream Bricks",
      industry: "Finance",
    },
    {
      quote:
        "Arka added smart AI tools to our SAP system that track inventory automatically. Their solution made our work faster and gave us clear, up-to-date information about our stock. We now make fewer mistakes and can see exactly what we have on hand at any time.",
      role: "CTO, SOK UK LTD",
      industry: "Retail",
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center bg-midnight overflow-hidden px-6 py-12 lg:py-24">
      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center gap-12 text-white">
        <div className="w-full lg:w-1/2 flex flex-col space-y-8">
          <div className="flex flex-col items-center lg:items-start space-y-4 text-4xl md:text-5xl lg:text-6xl font-light">
            {keywords.map((word, index) => (
              <span
                key={index}
                className="font-bold inline-block relative after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-yellow-400 after:to-transparent"
              >
                {word}
              </span>
            ))}
          </div>

          <div className="text-center lg:text-justify text-lg text-white/80 leading-relaxed">
            Standard ERP holds you back. At Arka Global, we help businesses work
            smarter using AI-powered automation. With over a decade of
            industry-leading expertise, we overcome the limitations of
            traditional ERP systems with tailored solutions that integrate
            smoothly with platforms like SAP, Epicor, and more. Our refined
            approach streamlines intricate workflows, enabling organizations to
            achieve unparalleled efficiency and secure a competitive edge in
            today’s dynamic market.
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full max-w-[500px]"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[400px] flex flex-col justify-center items-center pb-2">
                  <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-10 pt-12 border border-white border-opacity-10 shadow-2xl relative w-full">
                    <div className="absolute top-5 left-8 text-6xl text-[#e9c46a] opacity-40 font-serif leading-none">
                      &quot;
                    </div>
                    <div className="absolute top-5 right-8">
                      <span className="bg-yellow-400 text-midnight text-xs font-semibold px-3 py-1 rounded-sm shadow-md">
                        {item.industry}
                      </span>
                    </div>
                    <p className="text-white text-justify text-md leading-relaxed my-8 relative z-10">
                      {item.quote}
                    </p>
                    <div className="flex items-center border-t border-white border-opacity-10 pt-5">
                      <div className="flex-1">
                        <div className="text-white text-opacity-60 text-sm">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="pt-16 z-10">
        <a
          href="#services"
          className="inline-block px-10 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-sm relative overflow-hidden hover:text-[#0a1f36] transition-all duration-300 z-10 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-yellow-400 hover:before:w-full before:transition-all before:duration-300 before:z-[-1]"
        >
          Discover Our Solutions
        </a>
      </div>
    </section>
  );
};

export default Info;
