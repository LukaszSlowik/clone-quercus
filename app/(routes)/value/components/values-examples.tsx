import SectionWrapper from "@/app/components/section-wrapper";
import { valuesArray } from "@/data/values";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {};

const ValuesExamples = (props: Props) => {
  return (
    <div>
      <SectionWrapper>
        <div>
          {valuesArray.map((item, index) => (
            <div
              key={item.title}
              className="grid grid-cols-1  py-12 md:grid-cols-2"
            >
              <div
                className={cn(
                  `text-left`,
                  index % 2 === 0 ? `order-1` : `order-2`,
                )}
              >
                <h2 className=" text-sm text-[#3a6888] md:text-2xl">
                  {item.title}
                </h2>
                <div>
                  {item.descriptionParts.map((part) => (
                    <p className="py-4  text-base text-[#46484b] opacity-70 lg:text-xl">
                      {part}
                    </p>
                  ))}
                </div>
              </div>
              <div className={cn(``, index % 2 === 0 ? `order-2` : `order-1`)}>
                <Image
                  width={300}
                  height={300}
                  src={item.imageSrc}
                  alt={item.imageSrc}
                  className="mx-auto  object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ValuesExamples;
