"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import  InfiniteMovingCards  from "@/components/ui/infinite-moving-cards";

const convertDriveUrlToDirectLink = (url) => {
  // If it's already a direct URL, return it as is
  if (url && url.startsWith("https://drive.google.com/uc?id=")) {
    return url;
  }

  // If it's a Google Drive shareable link
  const match = url.match(/\/file\/d\/([^/]+)\//);
  return match ? `https://drive.google.com/uc?id=${match[1]}` : "/images/default.png";
};

function Page() {
  const [prof, setProf] = useState([]);
  const [head, setHead] = useState([]);
  const [tech, setTech] = useState([]);
  const [management, setManagement] = useState([]);
  const [marketing, setMakreting] = useState([]);
  const [tech1, setTech1] = useState([]);
  const [management1, setManagement1] = useState([]);
  const [marketing1, setMakreting1] = useState([]);
  useEffect(() => {
    if (prof!== null) {
      const GetProf = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/professors`, {
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
           setProf(result)
          }
        } catch (error) {
          toast({
            title: "There was an error",
          });
        }
      };
      GetProf();
    }
  }, []);

   useEffect(() => {
    if (head!== null) {
      const GetHead = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/head`, {
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
           setHead(result)
          }
        } catch (error) {
          toast({
            title: "There was an error",
          });
        }
      };
      GetHead();
    }
  }, []);

useEffect(() => {
    if (tech !== null) {
      const GetTechTeam = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/tech/core`, {
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
           setTech(result)
          }
        } catch (error) {
          toast({
            title: "There was an error",
          });
        }
      };
      GetTechTeam();
    }
  }, []);

  useEffect(() => {
    if (tech !== null) {
      const GetTechTeam1 = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/tech/member`, {
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
            setTech1(result)
          }
        } catch (error) {
          toast({
            title: "There was an error",
          });
        }
      };
      GetTechTeam1();
    }
  }, []);

  useEffect(() => {
    if (management !== null) {
      const GetManagementTeam = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/management/core`, {
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
            setManagement(result)
          }
        } catch (error) {
          toast({
            title: "There was an error",
          });
        }
      };
      GetManagementTeam();
    }
  }, []);

  useEffect(() => {
    if (management !== null) {
      const GetManagementTeam1 = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/management/member`, {
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
            setManagement1(result)
          }
        } catch (error) {
          toast({
            title: "There was an error",
          });
        }
      };
      GetManagementTeam1();
    }
  }, []);

  useEffect(() => {
    if (marketing !== null) {
      const GetMarketingTeam = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/marketing/core`, {
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
            setMakreting(result)
          }
        } catch (error) {
          toast({
            title: "There was an error",
          });
        }
      };
      GetMarketingTeam();
    }
  }, []);



  useEffect(() => {
    if (marketing !== null) {
      const GetMarketingTeam1 = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/marketing/member`, {
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
            setMakreting1(result)
          }
        } catch (error) {
          toast({
            title: "There was an error",
          });
        }
      };
      GetMarketingTeam1();
    }
  }, []);



  const data = [
    {
      title: "Professors",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-10">
          The Professors mentor students, share their expertise, and contribute to academic growth by providing valuable insights and guidance in their respective fields.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {prof.map((item, index) => (
             <div className=" group/card" key={item.id}>
             <div
               className={cn(
"cursor-pointer overflow-hidden relative card rounded-lg shadow-xl",
  "h-[250px] w-[250px]", // Base square size
  "sm:h-[280px] sm:w-[280px]", // Small screens
  "md:h-[300px] md:w-[300px]", // Medium screens
  "mx-auto my-3", // Consistent spacing
  "bg-cover bg-center bg-no-repeat",
  "transition-all duration-300"               )}
  style={{
    backgroundImage: `url('${item.drive_file_id
      ? convertDriveUrlToDirectLink(item.drive_file_id)
      : "/images/default.png"}')`,
  }}
             >
               <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
               <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                 <h1 className="font-bold text-xl md:text-2xl">
                   {item.name || "Event Title"}
                 </h1>
                 <p className="font-normal text-sm md:text-base">
                   {item.about || "Event Date"}
                 </p>
               </div>
             </div>
           </div>

            ))}


            </div>


        </div>
      ),
    },
    {
      title: "Head",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          The Head of Committee leads the team, coordinates activities, and ensures smooth execution of initiatives while fostering collaboration and setting the strategic direction for the department.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {head.map((item, index) => (
             <div className=" group/card" key={item.id}>
             <div
               className={cn(
"cursor-pointer overflow-hidden relative card rounded-lg shadow-xl",
  "h-[250px] w-[250px]", // Base square size
  "sm:h-[280px] sm:w-[280px]", // Small screens
  "md:h-[300px] md:w-[300px]", // Medium screens
  "mx-auto my-3", // Consistent spacing
  "bg-cover bg-center bg-no-repeat",
  "transition-all duration-300"               )}
  style={{
    backgroundImage: `url('${item.drive_file_id
      ? convertDriveUrlToDirectLink(item.drive_file_id)
      : "/images/default.png"}')`,
  }}
             >
               <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
               <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                 <h1 className="font-bold text-xl md:text-2xl">
                   {item.name || "Event Title"}
                 </h1>
                 <p className="font-normal text-sm md:text-base">
                   {item.about || "Event Date"}
                 </p>
               </div>
             </div>
           </div>

            ))}


            </div>



        </div>
      ),
    },
    {
      title: "Technology Team",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The Tech team is responsible for developing innovative solutions and ensuring smooth technical operations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {tech.map((item, index) => (
             <div className=" group/card" key={item.id}>
             <div
               className={cn(
"cursor-pointer overflow-hidden relative card rounded-lg shadow-xl",
  "h-[250px] w-[250px]", // Base square size
  "sm:h-[280px] sm:w-[280px]", // Small screens
  "md:h-[300px] md:w-[300px]", // Medium screens
  "mx-auto my-3", // Consistent spacing
  "bg-cover bg-center bg-no-repeat",
  "transition-all duration-300"               )}
  style={{
    backgroundImage: `url('${item.drive_file_id
      ? convertDriveUrlToDirectLink(item.drive_file_id)
      : "/images/default.png"}')`,
  }}
             >
               <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
               <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                 <h1 className="font-bold text-xl md:text-2xl">
                   {item.name || "Event Title"}
                 </h1>
                 <p className="font-normal text-sm md:text-base">
                   {item.about || "Event Date"}
                 </p>
               </div>
             </div>
           </div>

            ))}


            </div>
            <div
      className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-auto">
      <InfiniteMovingCards items={tech1} direction="right"  />
    </div>


        </div>
      ),
    },
    {
      title: "Management Team",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The Management team oversees project execution, resource allocation, and team coordination.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {management.map((item, index) => (
             <div className=" group/card" key={item.id}>
             <div
               className={cn(
"cursor-pointer overflow-hidden relative card rounded-lg shadow-xl",
  "h-[250px] w-[250px]", // Base square size
  "sm:h-[280px] sm:w-[280px]", // Small screens
  "md:h-[300px] md:w-[300px]", // Medium screens
  "mx-auto my-3", // Consistent spacing
  "bg-cover bg-center bg-no-repeat",
  "transition-all duration-300"               )}
  style={{
    backgroundImage: `url('${item.drive_file_id
      ? convertDriveUrlToDirectLink(item.drive_file_id)
      : "/images/default.png"}')`,
  }}

             >
               <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
               <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                 <h1 className="font-bold text-xl md:text-2xl">
                   {item.name || "Event Title"}
                 </h1>
                 <p className="font-normal text-sm md:text-base">
                   {item.about || "Event Date"}
                 </p>
               </div>
             </div>
           </div>

            ))}
          </div>
          <div
      className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={management1} direction="right"  />
    </div>
        </div>
      ),
    },
    {
      title: "Marketing Team",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The Marketing team is focused on promoting our initiatives and engaging the community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {marketing.map((item, index) => (
             <div className=" group/card" key={item.id}>
             <div
               className={cn(
"cursor-pointer overflow-hidden relative card rounded-lg shadow-xl",
  "h-[250px] w-[250px]", // Base square size
  "sm:h-[280px] sm:w-[280px]", // Small screens
  "md:h-[300px] md:w-[300px]", // Medium screens
  "mx-auto my-3", // Consistent spacing
  "bg-cover bg-center bg-no-repeat",
  "transition-all duration-300"               )}
  style={{
    backgroundImage: `url('${item.drive_file_id
      ? convertDriveUrlToDirectLink(item.drive_file_id)
      : "/images/default.png"}')`,
  }}

             >
               <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
               <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                 <h1 className="font-bold text-xl md:text-2xl">
                   {item.name || "Event Title"}
                 </h1>
                 <p className="font-normal text-sm md:text-base">
                   {item.about || "Event Date"}
                 </p>
               </div>
             </div>
           </div>

            ))}
          </div>
          <div
      className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={marketing1} direction="right"  />
    </div>
        </div>
      ),
    },
  ];

  return (
    <div>
<div className="flex flex-col gap-4 mt-5">

      <Timeline data={data} />
    </div>
    <div className="h-[60vh]">
      </div>

    </div>

  );
}

export default Page;
