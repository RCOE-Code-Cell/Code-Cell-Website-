"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

function GalleryPics() {
  const [events, setEvents] = useState([]); // Initialize as an empty array

  useEffect(() => {
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
      } catch (error) {
        console.error("There was an error:", error);
      }
    };

    GetEvents();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-16">
      {events.length > 0 ? (
        events.map((event) => (
          event.images.length > 0 ? (
            event.images.map((image) => (
              <div className="max-w-xs w-full group/card" key={image.id}>
                <div
                  className={cn(
                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto bg-cover transition-all duration-300 m-5"
                  )}
                  style={{ backgroundImage: `url('${image.drive_file_url}')` }}
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <h1 className="font-bold text-xl md:text-2xl">
                      {event.name || "Event Title"}
                    </h1>
                    <p className="font-normal text-sm md:text-base">
                      {event.date || "Event Date"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            ''
          )
        ))
      ) : (
        <p className="text-gray-500">No events available.</p>
      )}
    </div>
  );
}

export default GalleryPics;
