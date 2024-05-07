import React from "react";
import landing from "../assets/landing.png";
import { PiRocketLaunchFill } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa";

function LandingPic() {
  return (
    <div className="relative m-24 w-fit font-custom2">
      <div className="relative flex -gap-2">
        {/* Image */}
        <img
          src={landing}
          className="h-68 w-72 rounded-[36px] shadow -z-10 relative"
        />
        {/* Absolute Positioned Divs */}
        <div className="absolute -left-24 bottom-32 w-40 rounded-2xl p-3 shadow-md bg-white">
          <div className="flex flex-col gap-6">
            <div className="-ml-8 -mb-4 origin-top-left rotate-[-21.27deg]">
              <svg
                width="70"
                height="40"
                viewBox="0 0 103 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Paths */}
              </svg>
            </div>
            <div className="text-zinc-900 text-2xl ml-3 -mt-8  font-bold">
              40%
            </div>
          </div>
          <div className=" text-zinc-500 text-[10px] font-medium p-1.5">
            Achieved reduction in project execution time by optimising team
            availability
          </div>
        </div>
        <div className="absolute -left-12 bottom-12 bg-white rounded-[30px] px-6 py-2.5 shadow-lg backdrop-blur-[50.70px] flex flex-row justify-start items-center gap-2.5">
          <div className="rounded-full bg-gray-100 p-2 flex items-center">
            <PiRocketLaunchFill className="text-xl text-green-600" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-md ">10 Days</h1>
            <h1 className="font-semibold text-gray-500 text-[10px]">
              Staff Deployment
            </h1>
          </div>
        </div>
        <div className="absolute -bottom-10 left-[240px] bg-green-950 p-4 flex flex-col gap-2 items-start justify-start w-fit rounded-[20px] shadow-md">
          <div className="font-bold text-3xl text-white flex flex-row gap-1.5 items-center">
            <FaDollarSign className="-mr-2.5" />0.5
            <div className="font-semibold text-gray-400 self-end text-sm">
              MILLION
            </div>
          </div>
          <div className="text-[#CCCCCC] text-xs w-36">
            Reduced client expenses by saving on hiring and employee costs.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPic;
