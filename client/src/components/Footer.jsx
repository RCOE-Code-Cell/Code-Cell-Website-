import React from 'react';
import Map from '../components/Map';
import Image from 'next/image';

function Footer() {
  return (
    <div className='flex'>
    <div className="relative w-[60vw] h-[35rem] overflow-auto">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/9/94/RCoE_-_RCoA_common_entrance.jpg"
        layout="fill"
        objectFit="cover"
        alt="College Entrance"
        className='overflow-hidden'
      />
     
    </div>
     <div className="flex justify-center items-center overflow-auto">
     {/* <Map /> */}
   </div>
   </div>
  );
}

export default Footer;
