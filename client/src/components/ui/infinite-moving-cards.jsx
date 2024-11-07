"use client";

import React, { useEffect, useState } from "react";

// Simple utility function to replace cn
const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    
    const handleResize = () => {
      setStart(false);
      setTimeout(() => {
        addAnimation();
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [items, direction, speed]); // Added direction and speed dependencies

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // Create enough duplicates to fill the scroll space
      const itemsNeeded = Math.ceil(window.innerWidth / 300) + 1; // 300px is card width
      const duplicatesNeeded = Math.max(2, itemsNeeded);
      
      // Create an array with multiple copies of items
      const duplicatedItems = Array(duplicatesNeeded).fill(items).flat();
      
      // Reset content
      scrollerRef.current.innerHTML = '';
      
      // Add all duplicated items to the scroller
      duplicatedItems.forEach((item, idx) => {
        const li = document.createElement('li');
        li.className = "relative flex-shrink-0 px-2";
        li.innerHTML = `
          <div class="group relative sm:w-[300px] w-[150px] h-[150px] sm:h-[250px] overflow-hidden rounded-lg">
            <div
              class="h-[200px] w-full bg-cover bg-center transition-all duration-500 group-hover:scale-105"
              style="background-image: url('${process.env.NEXT_PUBLIC_API_URL}${item.profile_image}')"
            >
              <div class="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div class="flex h-full flex-col justify-end sm:p-4 p-8">
                  <h3 class="text-lg font-bold text-white">
                    ${item.name || "Event Title"}
                  </h3>
                  <p class="mt-2 text-sm text-white/90">
                    ${item.about || "Event Date"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        `;
        scrollerRef.current.appendChild(li);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "normal");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      if (speed === "fast") {
        duration = "15s";
      } else if (speed === "normal") {
        duration = "40s";
      } else {
        duration = "80s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div className="overflow-clip">
        <div className="m-5">
            Team Members
        </div>
        
        <div className="relative sm:max-w-4xl max-w-[75.5vw] bg-black">
            <div
                ref={containerRef}
                className={classNames(
                    "scroller relative z-20 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                    className
                )}
                style={{
                    "--animation-duration": "40s",
                    "--animation-direction": "forwards"
                }}
            >
                <ul
                    ref={scrollerRef}
                    className={classNames(
                        "flex min-w-full gap-4 py-4",
                        start && "animate-scroll",
                        pauseOnHover && "hover:[animation-play-state:paused]"
                    )}
                />
            </div>
        </div>
    </div>
  );
};

export default InfiniteMovingCards;