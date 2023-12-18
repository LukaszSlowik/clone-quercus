"use client";
import React, { useEffect, useState } from "react";
import { motion, useTime, useTransform } from "framer-motion";
import Image from "next/image";
import { companiesLogos } from "@/data/companies-logos";
import { cn } from "@/lib/utils";

type Props = {
  withDots?: boolean;
  className?: string;
};

console.log(companiesLogos.length);
const CarouselCompanies = ({ withDots = false, className }: Props) => {
  const [x, setX] = useState(0);
  const [widthOfOneDiv, setWidthOfOneDiv] = useState(0);
  const [scrolledElements, setScrolledElements] = useState(3);
  const lengthOfArray = companiesLogos.length;
  const maxScrollDistance = -widthOfOneDiv * lengthOfArray;
  const currentPage = Math.abs(x / (widthOfOneDiv * scrolledElements));
  //console.log("currentPage", currentPage);
  useEffect(() => {
    // Function to update width
    const updateWidth = () => {
      if (window.innerWidth < 768) {
        setWidthOfOneDiv(Math.min(window.innerWidth / 2, 1500));
        setScrolledElements(2);
      } else if (window.innerWidth < 1024) {
        setWidthOfOneDiv(Math.min(window.innerWidth / 4, 200));
        setScrolledElements(4);
      } else {
        setWidthOfOneDiv(Math.min(window.innerWidth / 6, 180));
        setScrolledElements(6);
      }
    };

    // Update width initially
    updateWidth();

    // Add event listener
    window.addEventListener("resize", updateWidth);

    // Clean up function
    return () => {
      // Remove event listener
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setX((prevX) => {
        const nextX = prevX - widthOfOneDiv * scrolledElements;
        if (nextX <= maxScrollDistance) {
          return 0; // adjust to max scroll distance if it exceeds
        } else {
          return nextX;
        }
      });
    }, 4000);

    return () => {
      clearInterval(interval); // This will clear Interval while unmounting the component
    };
  }, [maxScrollDistance, widthOfOneDiv, scrolledElements]);

  return (
    <div className={cn(``, className)}>
      <div
        style={{ width: widthOfOneDiv * scrolledElements }}
        className="  mx-auto  overflow-hidden  pb-8  "
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x, transition: { duration: 1 } }}
          className="flex  "
        >
          {companiesLogos.map((company, index) => (
            <div
              key={index}
              style={{ width: widthOfOneDiv }}
              className="  flex-shrink-0 px-8 "
            >
              <Image
                key={index}
                src={company.src}
                alt={company.alt}
                width={200}
                height={200}
                className="object-cover object-center"
              />
            </div>
          ))}
        </motion.div>
      </div>
      {withDots && (
        <div className="mx-auto  pb-8">
          <div className="mx-auto w-fit ">
            {Array.from({
              length: companiesLogos.length / scrolledElements,
            }).map((element, index) => (
              <div
                key={index}
                className={cn(
                  `bg-q-blue mx-1 inline-block h-[9px] w-[9px] cursor-pointer rounded-full md:mx-2`,
                  index === currentPage && "bg-blue-400",
                )}
                onClick={() => setX(-index * widthOfOneDiv * scrolledElements)}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselCompanies;
