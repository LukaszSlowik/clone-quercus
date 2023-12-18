import FirstElementWrapper from "@/app/components/first-element-wrapper";
import React from "react";

type Props = {};

const ValueDelivered = (props: Props) => {
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
              Value delivered
            </FirstElementWrapper.Title>

            <FirstElementWrapper.Subtitle className="">
              We are committed to creating the ultimate value for our customers
              and delivering it on time, in line with the highest quality and
              security standards.
            </FirstElementWrapper.Subtitle>
          </div>
        </div>
      </FirstElementWrapper>
    </>
  );
};

export default ValueDelivered;
