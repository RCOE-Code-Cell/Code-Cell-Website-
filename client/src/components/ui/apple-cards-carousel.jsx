"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  const reversedItems = [...items].reverse();

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}>
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto"
            )}>
            {reversedItems.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}>
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}>
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };




  const Content = () => {
    return (
      <>
      <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                <span className="font-bold text-neutral-700 dark:text-neutral-200 ">
                  Join us for an exciting event hosted by Code Cell!
                </span>
                <div>
                  {card.description}
                </div>
                
              </div>
        {card.length!=0 && card.images.map((image, index) => {
        
          return (
            <div
              key={"content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${image.drive_file_url}`}
                alt="Event example image"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg" />
            </div>
          );
        
        })}
      
      </>
    );
  };




  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.name}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative">
              <button
                className="sticky top-28 sm:top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}>
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.name}` : undefined}
                className="text-base font-medium text-black dark:text-white">
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.name}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white">
                {card.title}
              </motion.p>
              <div className="py-10">{<Content/>}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
  layoutId={layout ? `card-${card.name}` : undefined}
  onClick={handleOpen}
  className="relative rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden">
  <div className="absolute inset-0 h-full w-full">
    <BlurImage
      profile_image={`${process.env.NEXT_PUBLIC_API_URL}${card.drive_file_id}`}
      alt={card.name}
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
  </div>
  <div className="absolute top-0 left-0 right-0 z-40 p-4 text-center"> {/* Adjusted position to top */}
    <motion.p
      layoutId={layout ? `category-${card.date}` : undefined}
      className="text-black text-sm md:text-base font-medium font-sans">
      {card.date}
    </motion.p>
    <motion.p
      layoutId={layout ? `title-${card.name}` : undefined}
      className="text-black text-xl md:text-3xl  max-w-xs text-center [text-wrap:balance] mt-2 font-bold">
      {card.name}
    </motion.p>
  </div>
</motion.button>

    </>
  );
};

export const BlurImage = ({
  profile_image,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      src={profile_image}
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      loading="lazy"
      decoding="async"
      alt={alt || "Background of a beautiful view"}
      {...rest}
    />
  );
};