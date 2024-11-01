"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

function GalleryPics() {
  const [events, setEvents] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const GetEvents = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/event', {
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
      } catch (error) {
        console.error("There was an error:", error);
      }
    };

    GetEvents();
  }, []);

  events.forEach(event => {
    event.images.forEach(image => {
      console.log(image.image)
    })
  });

  return (
    <div className="flex flex-wrap justify-center mt-16">
      {events.length > 0 ? (
        events.map((event) => (
          event.images.length > 0 ? (
            event.images.map((image) => (
              <div className="max-w-xs w-full group/card" key={image.id}>
                <div
                  className={cn(
                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover"
                     
                  )}
                >
                  <img src={`http://127.0.0.1:8000${image.image}` }>
                  
                  </img>
                  <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                  <div className="flex flex-row items-center space-x-4 z-10">
                    {/* You can place event-related content here if needed */}
                  </div>
                  <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {event.name || "Event Title"}
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                      {event.description || "Event Description"}
                    </p>
                  </div>

                  
                </div>
              </div>
            ))
          ) : (
            <div className="max-w-xs w-full group/card" key={event.id}>
              <div className="cursor-pointer h-96 flex items-center justify-center border border-gray-300 rounded-md">
                <p className="text-gray-500">No images available for this event.</p>
              </div>
            </div>
          )
        ))
      ) : (
        <p className="text-gray-500">No events available.</p>
      )}
    </div>
  );
}

export default GalleryPics;
