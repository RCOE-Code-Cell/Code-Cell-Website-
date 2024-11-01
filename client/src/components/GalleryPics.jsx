"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import img1 from '@/app/IMAGES/Codeathon_1.jpg'
 function GalleryPics() {
  return (
    <div className="mt-16">
        <div className="h-screen flex items-center justify-center w-full flex-wrap ">
      <CardStack items={CARDS_SET_1} />
      <CardStack items={CARDS_SET_2} />
      <CardStack items={CARDS_SET_3} />
      <CardStack items={CARDS_SET_1} />
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

const CARDS_SET_1 = [
  { 
    id: 0, 
    name: "Alice Johnson", 
    event: "Hackathon 2023", 
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    id: 1, 
    name: "Bob Smith", 
    event: "Hackathon 2023", 
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    id: 2, 
    name: "Catherine Lee", 
    event: "Hackathon 2023", 
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  }
];
const CARDS_SET_2 = [
  { 
    id: 0, 
    name: "David Martinez", 
    event: "AI Workshop", 
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    id: 1, 
    name: "Eva Green", 
    event: "AI Workshop", 
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    id: 2, 
    name: "Frank Turner", 
    event: "AI Workshop", 
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  }
];
const CARDS_SET_3 = [
  { 
    id: 0, 
    name: "Grace Hopper", 
    event: "Web Development Bootcamp", 
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    id: 1, 
    name: "Henry Ford", 
    event: "Web Development Bootcamp", 
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    id: 2, 
    name: "Ivy Taylor", 
    event: "Web Development Bootcamp", 
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  }
];

export default GalleryPics;