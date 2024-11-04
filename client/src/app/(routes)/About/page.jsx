import React from 'react'

import { Spotlight } from "@/components/ui/Spotlight";
function page() {
  return (
    <div>
      <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Spotlight
        className="-top-45 left-5 sm:left-60 sm:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 mt-10">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          ABOUT US 
        </h1>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-xl text-justify mx-auto">
        CodeCell at Rizvi College of Engineering was founded to ignite a thriving tech culture on campus, where passionate students come together to learn, collaborate, and innovate. Our mission is to create a supportive environment where members grow by organizing and managing various technical events—from workshops and hackathons to competitions and speaker sessions.

We believe in learning and growing as a community, and every member brings unique strengths that contribute to our shared goals. Together, we’re building a space where everyone can experiment, connect, and excel. Join us at CodeCell as we shape a culture of growth, curiosity, and achievement at Rizvi College.
        </p>
      </div>
    </div>
    </div>
  )
}

export default page
