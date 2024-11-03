"use client";
import React from "react";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { useUserContext } from '@/app/context/Userinfo';



 function UserIcon() {
  const { data: session } = useSession()
  const {contextname,contextemail,contextimg} = useUserContext();

  const people = [
    {
    id: 1,
    name: session?.user.name||contextname,
    designation: session?.user.email||contextemail,
    image:session?.user.image||contextimg,
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