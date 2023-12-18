import SectionWrapper from "@/app/components/section-wrapper";
import React from "react";
import NewModelPuzzle from "./new-model-puzzle";
import { newModelArray } from "@/data/new-model";

type Props = {};
const OurMission = (props: Props) => {
  return (
    <div className="bg-white">
      <SectionWrapper>
        <div className="space-y-8 pb-12 pt-12">
          <h1 className="text-q-blue text-2xl tracking-widest">OUR MISSION</h1>
          <h2 className="text-left text-xl opacity-70">
            Technology development needs urgent transformation. Even the most
            recognized centres of software excellence, like American Silicon
            Valley, has its limitations. Scarcity of talents in relation to
            exponentially growing demand leads to overpricing and loss of
            attention to details.
          </h2>
          <h2 className="pb-8 text-left text-xl opacity-70">
            Quercus addresses the most negative trends in technology delivery by
            overcoming Silicon Valley’s standards with truly European talents.
            We are committed to deliver fairly priced solutions in the best
            customer interest, and we deliver on time. We guarantee access to
            the large talent pool in the way our customers need. Finally, we are
            here to solve problems of legacy left by software delivered by the
            old school vendors.
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <NewModelPuzzle newModelPuzzle={newModelArray[0]} />
            <NewModelPuzzle newModelPuzzle={newModelArray[1]} />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default OurMission;
