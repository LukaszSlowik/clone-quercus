import FirstElementWrapper from "@/app/components/first-element-wrapper";
import React from "react";

type Props = {};

const NewModelVendor = (props: Props) => {
  return (
    <>
      <FirstElementWrapper
        imageSrc="/images/others/New-Model-Vendor-v2-1.png"
        imageAlt="New-Model-Vendor-v2-1"
        xDirection={0}
        yDirection={100}
        className="bg-q-blue text-white"
      >
        <div className=" py-12">
          <div className="flex flex-col items-center justify-center gap-8  text-center">
            <FirstElementWrapper.Title className="text-white">
              New Model Vendor
            </FirstElementWrapper.Title>

            <FirstElementWrapper.Subtitle>
              Breaking Silicon Valley’s limitations with the European talent
              pool, Quercus delivers full stack tech services for businesses
              like yours.
            </FirstElementWrapper.Subtitle>
          </div>
        </div>
      </FirstElementWrapper>
    </>
  );
};

export default NewModelVendor;
