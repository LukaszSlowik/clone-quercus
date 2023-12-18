import React from "react";
import DeliveryMethods from "./components/delivery-methods";
import DividerWave from "@/app/components/divider-wave";
import DeliveryExamples from "./components/delivery-examples";
import OurClientVendor from "../new-model-vendor/components/our-clients-vendor";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <DeliveryMethods />
      <DividerWave className="fill-q-blue  scale-x-[1]" />
      <DeliveryExamples />
      <DividerWave className="scale-x-[-1] bg-[#dce8ef] fill-white" />
      <OurClientVendor />
    </div>
  );
};

export default Page;
