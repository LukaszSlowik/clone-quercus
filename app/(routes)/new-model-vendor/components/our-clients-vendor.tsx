import CarouselCompanies from "@/app/components/carousel-companies";
import React from "react";

type Props = {};

const OurClientVendor = (props: Props) => {
  return (
    <div className="bg-[#dce8ef]">
      <div>
        <h1 className="text-q-blue pb-8 text-center text-2xl uppercase">
          Our Clients
        </h1>
        <CarouselCompanies withDots={true} />
      </div>
    </div>
  );
};

export default OurClientVendor;
