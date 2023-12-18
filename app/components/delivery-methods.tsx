import React from "react";
import SectionWrapper from "./section-wrapper";
import Image from "next/image";
import LinkButton from "./ui/link-button";
import { DeliveryMethodsArray } from "@/data/delivery-metods";

type Props = {};

const DeliveryMethods = (props: Props) => {
  return (
    <div className=" bg-[#f8f9fa]">
      <SectionWrapper>
        <div>
          <div className="py-12">
            <h4 className="text-q-blue py-4 text-base lg:text-xl">
              BUILT-IN AGILITY IN CO-OPERATION
            </h4>
            <h1 className="text-4xl font-bold text-[#46484b] lg:text-5xl">
              Delivery methods
            </h1>
          </div>
          <div className="my-12 grid grid-cols-1  gap-8 text-center sm:gap-4 md:grid-cols-5">
            {DeliveryMethodsArray.map((item, index) => (
              <div
                key={item.src}
                className="flex flex-col items-center gap-4 md:gap-8"
              >
                <Image src={item.src} alt={item.alt} width={100} height={100} />

                <div>
                  <p className="text-q-blue">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto   py-8">
          <LinkButton href="/delivery-methods" className="mx-auto">
            <span className="uppercase">Learn more...</span>
          </LinkButton>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default DeliveryMethods;
