import React from "react";
import ValueDelivered from "./components/value-delivered";
import DividerWave from "@/app/components/divider-wave";
import ValuesExamples from "./components/values-examples";
import OurClientVendor from "../new-model-vendor/components/our-clients-vendor";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <ValueDelivered />
      <DividerWave className="fill-q-blue  scale-x-[1]" />
      <ValuesExamples />
      <DividerWave className="scale-x-[-1] bg-[#dce8ef] fill-white" />
      <OurClientVendor />
    </div>
  );
};

export default Page;
