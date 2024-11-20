import React from 'react';
import Map from '../components/Map';
import Image from 'next/image';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { LinkPreview } from "@/components/ui/link-preview";

function Footer() {
  const people = [
    {
      id: 1,
      name: "Fareed Sayyed",
      designation: "Backend Developer",
      image:
        "https://avatars.githubusercontent.com/u/143815597?v=4",
    },
    {
      id: 2,
      name: "Rehbar Khan",
      designation: "Fronted Developer",
      image:
        "https://avatars.githubusercontent.com/u/136853370?v=4",
    }
  ];
  return (
    <div className='flex flex-col'>
      <div className='flex sm:h-[25rem] h-[20vh] '>
    <div className="relative w-[60vw]  overflow-auto">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/9/94/RCoE_-_RCoA_common_entrance.jpg"
        layout="fill"
        objectFit="cover"
        alt="College Entrance"
        className='overflow-hidden'
      />

    </div>
     <div className="flex justify-center items-center overflow-auto w-[40vw] ">
     <Map />
   </div>
   </div>
   <div>



   <footer className={cn(" text-neutral-500 py-6")}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Us</h4>
            <p>
            CodeCell at Rizvi College of Engineering fosters a vibrant tech culture, uniting passionate students to learn, collaborate, and innovate. Our mission is to create a supportive community through workshops, hackathons, and competitions, enabling members to experiment, connect, and excel while contributing to shared growth and achievement. Join us!            </p>
          </div>



          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contributers of this website</h4>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
            <p>
              <strong>Email:</strong> codecell@eng.rizvi.edu.in
            </p>
            <p>
              <strong>Address:</strong> Rizvi Educational Complex Off Carter Road, Sherly Rajan Rd, Bandra West, Mumbai, Maharashtra 400050
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-600 pt-4 text-center">
          <p>&copy; 2024 Code Cell RCOE. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <LinkPreview url="https://www.instagram.com/cc_rcoe/profilecard/?igsh=MW54bHhrdDJjcXFuaw==" className="hover:text-white">Twitter</LinkPreview>
            <LinkPreview url="https://www.linkedin.com/company/code-cell-rcoe/" className="hover:text-white">LinkedIn</LinkPreview>
          </div>
        </div>
      </div>




    </footer>



   </div>
   </div>
  );
}

export default Footer;
