import React from "react";
import monitorCardImg from "../assets/monitor-card.webp";
import { IoArrowForwardSharp } from "react-icons/io5";

const MonitorSection = () => {
  return (
    <section className="max-7xl mx-auto px-4 py-16 md:py-24 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-24">
        {/*Left*/}

        <div className="md:w-1/2 w-full">
          <p className="text-green-500 font-semibold">MONITOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 mt-4 md:w-3/5">
            Introducing best <br /> mobile Carousels
          </h2>

          <p className="text-gray-600 mb-8">
            Take control of your time and boost productivity with our
            intelligent scheduling system, Automate appointments, manage team
            availability, and deliver exceptional customer experiences throush
            seamless calendar management
          </p>

          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Learn more about monitoring
            <IoArrowForwardSharp className="size-5" />
          </a>
        </div>

        {/*Right*/}
        <div className="md:w-1/2 w-full">
          <img
            src={monitorCardImg}
            alt="schedule image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
