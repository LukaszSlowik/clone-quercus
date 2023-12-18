"use client";

import React from "react";
import SectionWrapper from "./section-wrapper";
import SoftwareOnDemand from "./software-on-demand";
import MyPresentationPopup from "./my-popup/my-presentation-popup";
import { ModelArray } from "@/data/model";

type Props = {};

const Software = (props: Props) => {
  const [openPopup, setOpenPopup] = React.useState(false);
  return (
    <>
      <MyPresentationPopup open={openPopup} setOpen={setOpenPopup} />
      <div className="bg-white py-8 text-center text-black">
        <SectionWrapper>
          <h4 className=" text-q-blue py-4 text-base lg:text-xl">
            SOFTWARE ON DEMAND, ON TIME
          </h4>
          <h2 className="p-4 text-base font-extralight lg:text-2xl">
            The new model of a software vendor is based on four pillars:
          </h2>

          <div className="grid grid-cols-1 gap-12 pb-0 pt-12 sm:grid-cols-4 sm:gap-2  lg:gap-4">
            {ModelArray.map((item, index) => (
              <SoftwareOnDemand
                index={index}
                key={item.src}
                src={item.src}
                alt={item.alt}
                title={item.title}
                subtitle={item.subtitle}
                tags={item.tags}
              />
            ))}
          </div>
          <div className="mx-auto grid w-full grid-cols-1 py-8  max-sm:gap-8 sm:grid-cols-2 ">
            <div className="flex items-center justify-center ">
              <button
                onClick={() => setOpenPopup(true)}
                className="bg-q-orange w-fit rounded-2xl px-6 py-4  uppercase text-white hover:shadow-2xl hover:brightness-75"
              >
                READY TO CONTACT US?
              </button>
            </div>
            <div className="flex items-center justify-center ">
              <button
                onClick={() => setOpenPopup(true)}
                className="bg-q-blue w-fit rounded-2xl px-6 py-4 uppercase  text-white hover:bg-[#0e7dc7] hover:shadow-2xl "
              >
                READY TO JOIN US?
              </button>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Software;
