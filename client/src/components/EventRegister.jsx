"use client";
import React, { useState, useEffect } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
function EventReg() {
  const [id, setId] = useState(null);
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('');
  const pathname = usePathname();
  const { toast } = useToast();

  useEffect(() => {
    const segments = pathname.split("/");
    const nameSegment = segments[segments.length - 1];
    const x = nameSegment - 1; // Adjust this logic as needed
    setId(x);
  }, [pathname]);

  useEffect(() => {
    if (id !== null) {
      const GetEvents = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/event`, {
            method: 'GET',
            headers: {
              'Content-Type': "application/json",
            },
          });
          if (!response.ok) {
            toast({
              title: "There was an error",
            });
            throw new Error('Failed to fetch user info');
          }
          if (response.ok) {
            const result = await response.json();
            setImg(result[id]?.profile_image || '');
            setTitle(result[id]?.name || '');
            setDesc(result[id]?.description || '');
            setStatus(result[id]?.status || '');
          }
        } catch (error) {
          toast({
            title: "There was an error",
          });
        }
      };
      GetEvents();
    }
  }, [id, toast]);

  const test = () => {
    toast({
      title: "Registered",
      description: "You have successfully registered for the event",
    });
  };

  return (
    <div className="flex sm:flex-col">
      {img && (
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-[#04080D] sm:flex">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${img}`}
            alt="Event"
            height="400"
            width="400"
            className="object-contain sm:w-[30%] rounded-lg sm:h-[60vh]"
          />
          <div className="sm:m-5">
            <p className="text-base sm:text-3xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
              {title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:my-[1%] sm:text-lg">
              {desc}
            </p>
            {
              status?(<button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6 text-white inline-block" onClick={test}>
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span>{`Register`}</span>
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
            </button>):(
              <Link href='/Gallery'>

              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6 text-white inline-block" >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span>{`View Gallery`}</span>
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
            )
            }

          </div>
        </BackgroundGradient>
      )}
    </div>
  );
}

export default EventReg;
