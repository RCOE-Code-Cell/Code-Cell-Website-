"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move

  // Rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  // Translate the tooltip horizontally
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, x: -20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute left-16 top-1/2 -translate-y-1/2 flex text-xs flex-col items-center justify-center rounded-md  z-50 shadow-xl px-4 py-2"
              >
                {/* <div
                  className="absolute inset-y-10 z-30 h-[20%] -left-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent w-px"
                />
                <div
                  className="absolute top-10 h-[40%] z-30 -left-px bg-gradient-to-b from-transparent via-sky-500 to-transparent w-px"
                /> */}
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt="img"
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
