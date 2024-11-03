"use client"
import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useState } from 'react';
import { useEffect } from 'react';
function page() {
  const [events,setEvents]=useState([])


  const GetEvents = async () => {
    

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/event`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

       
      });

      if (response.ok) {
        const result = await response.json()
        setEvents(result)
       
        return;
      }
      

   
      
  
    } catch (error) {
      toast({
        title: "An error occurred",
      });
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => { 
    GetEvents()
    
  }, [])

  console.log(events)

  return (
    <div>
      <div className="max-w-6xl mx-auto px-10 sm:mt-[5%] mt-[10%]">
      <HoverEffect items={events} />
    </div>
    </div>
  )
}

export default page
