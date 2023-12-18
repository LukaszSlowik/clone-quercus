import React from "react";
import NewModelVendor from "./components/new-model-vendor";
import DividerWave from "@/app/components/divider-wave";
import OurVision from "./components/our-vision";
import OurMission from "./components/our-mission";
import WhyMidEurope from "./components/why-mid-europe";
import OurClientVendor from "./components/our-clients-vendor";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <NewModelVendor />
      <DividerWave className="bg-q-orange fill-q-blue scale-x-[1]" />
      <OurVision />
      <OurMission />
      <DividerWave className="scale-x-[1] bg-[#f7f7f7] fill-white" />

      <WhyMidEurope />
      <DividerWave className="scale-x-[-1] bg-[#dce8ef] fill-[#f7f7f7]" />
      <OurClientVendor />
    </div>
  );
};

export default Page;
