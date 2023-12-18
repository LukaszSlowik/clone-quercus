import SectionWrapper from "@/app/components/section-wrapper";
import { deliveryArray } from "@/data/delivery";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {};

const ValuesExamples = (props: Props) => {
  return (
    <div>
      <SectionWrapper>
        <div>
          <div className="grid grid-cols-1  gap-4 py-12 md:grid-cols-2 lg:gap-12">
            {deliveryArray.map((item, index) => (
              <div key={index} className="flex gap-4 text-left">
                <div className={cn(`min-w-[70px]`)}>
                  <Image
                    width={300}
                    height={300}
                    src={item.imageSrc}
                    alt={item.imageSrc}
                    className="mx-auto  object-contain object-center"
                  />
                </div>
                <div>
                  <h2 className=" text-xl text-[#3a6888]">{item.title}</h2>

                  <p className="py-4  text-base text-[#46484b] opacity-70 ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ValuesExamples;
