import FirstElementWrapper from "@/app/components/first-element-wrapper";
import React from "react";

type Props = {};

const OurClients = (props: Props) => {
  return (
    <FirstElementWrapper
      imageSrc="/images/others/Clients.png"
      imageAlt="Clients"
      xDirection={-100}
      yDirection={0}
      className="bg-q-blue text-white"
    >
      <div className=" py-12">
        <div className="flex flex-col items-center justify-center gap-8  text-center">
          <FirstElementWrapper.Title className="text-white">
            Our Clients
          </FirstElementWrapper.Title>

          <FirstElementWrapper.Subtitle>
            We service a diverse global portfolio. Here is a small selection of
            the clients that we represent on a daily basis.
          </FirstElementWrapper.Subtitle>
        </div>
      </div>
    </FirstElementWrapper>
  );
};

export default OurClients;
