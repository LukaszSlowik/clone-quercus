import FirstElementWrapper from "@/app/components/first-element-wrapper";
import React from "react";

type Props = {};

const DeliveryMethods = (props: Props) => {
  return (
    <>
      <FirstElementWrapper
        imageSrc="/images/others/Value-Delivered-1.png"
        imageAlt="Value-Delivered-1"
        xDirection={0}
        yDirection={100}
        className="bg-q-blue text-white"
      >
        <div className=" py-12">
          <div className="flex flex-col items-center justify-center gap-8  text-center">
            <FirstElementWrapper.Title className="text-white">
              Delivery methods
            </FirstElementWrapper.Title>

            <FirstElementWrapper.Subtitle className="">
              We always select the most effective way to cater to our customers’
              needs and offer tailored models of co-operation.
            </FirstElementWrapper.Subtitle>
          </div>
        </div>
      </FirstElementWrapper>
    </>
  );
};

export default DeliveryMethods;
