"use client";;
import React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { useUserContext } from '@/app/context/Userinfo';
import Link from "next/link";
import { useSession ,signOut} from 'next-auth/react';
import {QRCodeSVG} from 'qrcode.react';
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
 function QRComp() {
  const { data: session } = useSession()
  const {contextemail} = useUserContext();
const [member,setMember] = useState(false)

  const GetUserInfo = async () => {
    const token = localStorage.getItem('authToken');

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`,
        {
            method: 'GET',
            headers: {
              "Authorization":token,
              'Content-Type': "application/json",
            },
          }

          );

      if (response.ok){
        const result = await response.json();


        setMember(result.is_staff)
      }

    } catch (error) {


    }


  };

  GetUserInfo()

    return (
        <div>


        <div className="max-w-xs w-full group/card bg-[#050A10] p-2 rounded-lg">
          <div
            className={cn(
              " cursor-pointer overflow-hidden  relative card h-96 rounded-lg shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-white",
              // "bg-[url(https://chart.googleapis.com/chart?cht=qr&chs=180x180&chl=https://youtube.com)] bg-cover"
            )}
            >
            <div  >
            {session?.user?.email||contextemail ? (

  <QRCodeSVG className="w-full h-full " value={session?.user?.email||contextemail} />
) : (
  <div className="text-center text-gray-500">No email available</div>
)}
            </div>
            {/* <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div> */}
            <div className="flex flex-row items-center space-x-4 z-10">


            </div>

          </div>
          <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
               QR Code
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                Get this QR Code scanned by any Code Cell Member to get access to the event.
              </p>
            </div>
            {/* <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6 text-white inline-block" >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>{`EDIT YOUR PROFILE `}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button> */}
        <div className="mt-5">
          {
            !member?(
<Link href='/Scanner'>

          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6 text-white inline-block" >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <span>{`Scan QR Code`}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
          </Link>

            ):('')
          }

        </div>

        </div>
        <div className="m-40 flex justify-center text-center">

    </div>

        </div>
      );
}
export default QRComp;