import SectionWrapper from "@/app/components/section-wrapper";
import React from "react";

type Props = {};

const OurVision = (props: Props) => {
  return (
    <div className="bg-q-orange">
      <SectionWrapper>
        <div className="space-y-8 pb-12 text-white">
          <h1 className="text-2xl tracking-widest">OUR VISION</h1>
          <h2 className="text-xl">
            To extract the best value from the European culture of development,
            and deliver it to customers in need.
          </h2>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default OurVision;
