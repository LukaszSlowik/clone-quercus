import SectionWrapper from "@/app/components/section-wrapper";
import React from "react";
import { LuArrowUp, LuArrowDown } from "react-icons/lu";

type Props = {};

const WhyMidEurope = (props: Props) => {
  return (
    <div className="bg-[#f7f7f7]">
      <SectionWrapper>
        <div>
          <h1 className="text-xl font-semibold">
            Why Mid-Europe talents leads value for money competition?
          </h1>
          <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2">
            <div className="flex   ">
              <div className="w-fit  px-3">
                <LuArrowUp className="h-14 w-14 text-[#e6e8ec]" />
              </div>
              <div className="flex-1 space-y-12 text-left">
                <h1 className=" text-q-blue text-xl">More Value</h1>
                <p className="opacity-60">
                  Tech Universities in Middle Europe are free, which allows
                  every talent, regardless of possible limitations, to pursue a
                  desired career. Paid studies select people from wealthier
                  backgrounds and those who code solely for money and not for
                  the genuine vocation.
                </p>
                <p className="opacity-60">
                  Applied mathematics, cybernetics and coding were born and
                  developed right here. From playing chess to set theories, from
                  cryptology to functional analysis, it was the Polish,
                  Ukrainian and Russian talents to have taken the lead. Despite
                  what you might have been told, it was not Mr Touring to break
                  Nazi’s Enigma but Polish mathematicians.
                </p>
              </div>
            </div>
            <div className="flex   ">
              <div className="w-fit  px-3">
                <LuArrowDown className="h-14 w-14 text-[#e6e8ec]" />
              </div>
              <div className="flex-1 space-y-12 text-left">
                <h1 className=" text-q-blue text-xl">Fewer costs</h1>
                <p className="opacity-60">
                  State-funded, free academic education has another crucial
                  consequence – no student debt. An ordinary developer who
                  studies, lives, and works in Middle Europe doesn’t have to
                  worry about covering expensive schools for their children,
                  paying back student loans or struggling with rocketing house
                  prices of the Bay Area.
                </p>
                <p className="opacity-60">
                  Our managers don’t own their own yachts or winter houses on
                  Hawaii. The board members don’t use private jets.
                </p>
              </div>
            </div>
          </div>
          <h1 className="py-8 pb-12 text-xl">
            These are the reasons for our fairly prices and excellent quality,
            delivered on time.
          </h1>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default WhyMidEurope;
