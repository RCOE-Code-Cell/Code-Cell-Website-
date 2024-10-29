"use client";
import React from "react";
import Link from "next/link";
import { useSession ,signOut} from 'next-auth/react';
import { AnimatedTooltip } from "./ui/animated-tooltip";



 function UserIcon() {
  const { data: session } = useSession()
  const people = [
    {
    id: 1,
    name: session?.user.name,
    designation: session?.user.email,
    image:session?.user.image,
  }
  ]
  
  return (
    (<div className=" sticky top-28 sm:top-14 h-8 w-10 right-20 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
><Link href="/UserInfo">
<AnimatedTooltip items={people} />
</Link>
      
    </div>)
  );
}
export default UserIcon;