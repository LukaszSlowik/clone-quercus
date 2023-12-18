"use client";

import React from "react";
import SectionWrapper from "./section-wrapper";
import ValuesDelivered from "./values-delivered";
import LinkButton from "./ui/link-button";
import DividerWave from "./divider-wave";
import { ValuesDeliveredArray } from "@/data/why-quercus";

type Props = {};

const WhyQuercus = (props: Props) => {
  return (
    <div className="bg-q-blue text-center text-white">
      <SectionWrapper>
        <h1 className="py-8 text-base uppercase lg:text-2xl">Why Quercus?</h1>
        <h2 className="p-4 text-3xl font-bold lg:text-5xl">Value delivered</h2>

        <div className="grid grid-cols-1 gap-6  py-12 md:grid-cols-4">
          {ValuesDeliveredArray.map((item, index) => (
            <ValuesDelivered
              index={index}
              key={item.src}
              src={item.src}
              alt={item.alt}
              text={item.text}
              href={item.href}
            />
          ))}
        </div>
        <div className="py-8">
          <LinkButton href="/value">
            <span className="uppercase">Learn more...</span>
          </LinkButton>
        </div>
      </SectionWrapper>
      <DividerWave className="fill-q-blue  hidden scale-x-[1] scale-y-[1] bg-white sm:block " />
    </div>
  );
};

export default WhyQuercus;
