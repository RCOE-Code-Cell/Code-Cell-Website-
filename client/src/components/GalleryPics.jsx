"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import img1 from '@/app/IMAGES/Codeathon_1.jpg'
 function GalleryPics() {
  return (
    <div className="mt-16">
        <div className="h-screen flex items-center justify-center w-full flex-wrap ">
      <CardStack items={CARDS} />
      <CardStack items={CARDS} />
      <CardStack items={CARDS} />
      <CardStack items={CARDS} />
    </div>
    </div>
    
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className
}) => {
  return (
    (<span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>)
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    img:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    img:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    img:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
];
export default GalleryPics;