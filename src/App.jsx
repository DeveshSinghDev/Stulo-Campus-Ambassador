import { useState } from 'react'
import './App.css'
import Say from "./Components/Say";

function Ambassador() {
  return (
    <div className="bg-blue-500 py-8 md:py-16">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">

            <h1 className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              text-gray-800
              leading-tight
            ">
              Stulo Campus
              <br />
              Ambassador Program
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700">
              Dream. Network. Collaborate. Achieve.
            </p>

            <button className="
              mt-6
              bg-white
              px-6
              py-3
              rounded-full
              text-gray-600
              font-medium
              hover:text-blue-600
              transition-all
              duration-300
            ">
              Apply Now
            </button>

          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000"
              alt="Campus Ambassador"
              className="
                w-full
                max-w-[320px]
                sm:max-w-[420px]
                lg:max-w-[500px]
                h-[240px]
                sm:h-[320px]
                lg:h-[420px]
                object-cover
                rounded-3xl
                border-4
                border-black
                shadow-xl
              "
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Ambassador;