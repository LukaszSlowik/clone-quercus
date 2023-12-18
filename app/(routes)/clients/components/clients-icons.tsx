import SectionWrapper from "@/app/components/section-wrapper";
import { companiesLogos } from "@/data/companies-logos";
import Image from "next/image";
import React from "react";

type Props = {};

const ClientsIcons = (props: Props) => {
  return (
    <div>
      <SectionWrapper>
        <div className="columns-6">
          {companiesLogos.map((company, index) => (
            <div className="" key={`ClientsIcons-${company.src}-${index}`}>
              <Image
                //key={index}
                src={company.src}
                alt={company.alt}
                width={300}
                height={300}
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ClientsIcons;
