import React from "react";
import SectionWrapper from "./section-wrapper";
import DividerWave from "./divider-wave";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="  text-white">
      <div className="bg-q-blue  ">
        <SectionWrapper>
          <p className=" pb-4 pt-16 text-xl max-sm:pb-16">
            We are committed to delivering fairly priced solutions in the best
            interest of clients, and we deliver on time. We guarantee access to
            a large talent pool in a way our customers need and finally, we are
            here to solve problems of a legacy left by the software delivered by
            old-school vendors.
          </p>
        </SectionWrapper>
        <DividerWave className="fill-q-purple hidden w-full scale-x-[1] scale-y-[-1] border-none sm:block " />
      </div>
      <div className="bg-q-purple border-none ">
        <SectionWrapper>
          <div className="mt-[-1px]  py-14">
            <div className="grid grid-cols-1 items-baseline justify-between  gap-8 text-sm md:grid-cols-3">
              <div className="text-left opacity-70">
                ©2023 Quercus Sp. z o.o.. All Rights Reserved.
              </div>
              <div className="mx-auto">
                <Image
                  src="/images/others/quercus_logo_4-copy.png"
                  alt="quercus-logo"
                  width={200}
                  height={80}
                  className="object-contain object-center"
                />
              </div>
              <div className="text-right opacity-70">
                Privacy Policy | Cookie Policy
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Footer;
