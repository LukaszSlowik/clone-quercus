import FirstElementWrapper from "@/app/components/first-element-wrapper";
import LinkButton from "@/app/components/ui/link-button";
import React from "react";
import OurClients from "./components/our-clients";
import DividerWave from "@/app/components/divider-wave";
import ClientsIcons from "./components/clients-icons";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <OurClients />
      <DividerWave className="fill-q-blue scale-x-[1] bg-white" />
      <ClientsIcons />
    </div>
  );
};

export default Page;
