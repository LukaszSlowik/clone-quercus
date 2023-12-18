import React from "react";
import SectionWrapper from "./section-wrapper";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { HeroNumbersArray } from "@/data/hero-numbers";

type Props = {};

const HeroNumbers = (props: Props) => {
  return (
    <div>
      <SectionWrapper>
        <div className="my-12 grid grid-cols-1  gap-4 text-center md:grid-cols-5">
          {HeroNumbersArray.map((item, index) => (
            <div
              key={item.src}
              className="flex flex-col items-center gap-4 md:gap-8"
            >
              <Image src={item.src} alt={item.alt} width={100} height={100} />
              <div>
                <h4
                  className={cn(
                    `text-3xl `,
                    item.color === "#4068fced" && "text-[#4068fced]",
                    item.color === "#dc2c3bf0" && "text-[#dc2c3bf0]",
                    item.color === "#b32cdcde" && "text-[#b32cdcde]",
                    item.color === "#d4a91b" && "text-[#d4a91b]",
                    item.color === "#4068fced" && "text-[#4068fced]",
                    item.color === "#33a3f4" && "text-[#33a3f4]",
                  )}
                >
                  {item.number}
                </h4>
              </div>
              <div>
                <p className="opacity-50">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HeroNumbers;
