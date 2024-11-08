"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useState, useEffect } from "react";
function HomeEventCard() {
  const [events, setEvents] = useState([]); // Initialize as an empty array
  const GetEvents = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/event`, {
        method: 'GET',
        headers: {
          'Content-Type': "application/json",
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const result = await response.json();
      setEvents(result);
      console.log(result);
    } catch (error) {
      console.error("There was an error:", error);
    }
  };
  useEffect(() => {
  GetEvents();
  }, []);



  const cards = events.map((event, index) => (
    <Card key={event.id} card={event} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Events by Code Cell RCOE
      </h2>
      <Carousel items={cards} />
    </div>
  );
}





export default HomeEventCard;
