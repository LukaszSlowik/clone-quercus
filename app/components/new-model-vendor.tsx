import React from "react";
import SectionWrapper from "./section-wrapper";
import Image from "next/image";
import LinkButton from "./ui/link-button";

type Props = {};

const NewModelVendor = (props: Props) => {
  return (
    <div>
      <SectionWrapper>
        <div className="grid grid-cols-1  py-12 md:grid-cols-2">
          <div className="my-auto  hidden sm:block">
            <Image
              src="/images/others/New-Model-Vendor-1.png"
              alt="New-Model-Vendor-1"
              width={500}
              height={500}
            />
          </div>
          <div className=" py-12">
            <div className="flex flex-col items-center justify-center gap-8  text-center">
              <h4 className="text-q-blue text-base lg:text-xl">
                SOFTWARE ON DEMAND, ON TIME
              </h4>
              <h1 className="text-4xl font-bold text-[#46484b] lg:text-6xl">
                New Model Vendor
              </h1>
              <h3 className="font-roboto text-base font-light lg:text-3xl lg:font-thin">
                We deliver technology for businesses by overcoming Silicon
                Valley’s standards with European talents
              </h3>
              <LinkButton href="/new-model-vendor">See more...</LinkButton>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default NewModelVendor;
