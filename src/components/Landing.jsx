import React from "react";
import LandingPic from "../components/LandingPic";
import { IoIosArrowRoundForward } from "react-icons/io";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center -gap-10">
      <div className="flex flex-col gap-1 text-center">
        <h1 className="text-green-600 font-semibold text-2xl lg:text-3xl">
          success stories
        </h1>
        <p className="text-center text-zinc-900 text-xl md:text-[30px] lg:text-[48px] font-semibold leading-[56.20px]">
          Every success journey
        </p>
        <p className="text-center text-zinc-900 text-xl md:text-[30px] lg:text-[48px] font-semibold leading-[56.20px]">
          we've encountered
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-20 justify-center w-auto ml-auto">
        <LandingPic />
        <div className="flex flex-col items-start justify-between gap-10 w-[30%] ml-8 h-72 ">
          <div className="flex flex-col items-start justify-start gap-3">
            <p className="text-zinc-800  text-xl md:text-2xl lg:text-3xl font-semibold leading-8">
              Enhance fortune 50 company’s insights teams research capabilities
            </p>
            <div className="flex flex-row gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
          </div>
          <button className="p-4 w-40 text-center font-medium shadow text-white bg-zinc-900 rounded-[36px] text-3xl lg:text-xs hover:bg-neutral-600 flex flex-row items-center justify-center gap-2">
            Explore Now <IoIosArrowRoundForward className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
