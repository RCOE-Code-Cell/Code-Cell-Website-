"use client"
import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { title } from 'process';
function page() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-10 sm:mt-[5%] mt-[10%]">
      <HoverEffect items={projects} />
    </div>
    </div>
  )
}
export const projects = [
    {
      title: "Workshop on Web Development",
      description:
        "A workshop conducted by Code Cell RCOE in Engineering College to teach web development skills.",
     
    },
    {
      title: "Hackathon: CodeFest",
      description:
        "A hackathon organized by Code Cell RCOE in Engineering College to promote coding skills and innovation.",
    },
    {
      title: "Tech Talk: Artificial Intelligence",
      description:
        "A tech talk organized by Code Cell RCOE in Engineering College to explore the applications of artificial intelligence.",
    },
    {
      title: "Workshop on Mobile App Development",
      description:
        "A workshop conducted by Code Cell RCOE in Engineering College to teach mobile app development using React Native.",
    },
    {
      title: "Panel Discussion: Future of Technology",
      description:
        "A panel discussion organized by Code Cell RCOE in Engineering College to discuss the future trends in technology.",
    },
    {
      title: "Tech Talk: Cybersecurity",
      description:
        "A tech talk organized by Code Cell RCOE in Engineering College to raise awareness about cybersecurity threats and best practices.",
    },
  ];
export default page
