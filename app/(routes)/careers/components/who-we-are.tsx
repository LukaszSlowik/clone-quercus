"use client";
import DividerWave from "@/app/components/divider-wave";
import SectionWrapper from "@/app/components/section-wrapper";
import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { AnimatePresence, motion } from "framer-motion";
type Props = {};

const WhoWeAre = (props: Props) => {
  const [openwhoAreWe, setOpenWhoAreWe] = React.useState(true);
  const [openWhoAreYou, setOpenWhoAreYou] = React.useState(false);

  const hideShow = () => {
    setOpenWhoAreWe(!openwhoAreWe);
    setOpenWhoAreYou(!openWhoAreYou);
  };
  return (
    <div className="bg-[#dbe7ee]">
      <DividerWave className="hidden w-full  fill-white sm:block" />
      <SectionWrapper>
        <div className="mr-28 py-8">
          <Collapsible.Root open={openwhoAreWe} onOpenChange={setOpenWhoAreWe}>
            <Collapsible.Trigger asChild>
              <div className="flex w-full cursor-pointer justify-between  ">
                <div className="text-q-blue w-full  py-2 text-left text-xl uppercase">
                  Who are we?
                </div>
                <div className="text-q-orange text-2xl">
                  {openwhoAreWe ? <span>-</span> : <span>+</span>}
                </div>
              </div>
            </Collapsible.Trigger>
            <AnimatePresence>
              {openwhoAreWe && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                >
                  <Collapsible.Content forceMount>
                    <div className="my-4  text-left text-base opacity-70">
                      <p>
                        Quercus is a new model vendor who merges the best
                        strengths of various old models of technology
                        development.
                        <br /> <br />
                        To achieve this ambitious vision, we are focused on
                        attracting the most reliable talents who share our
                        values and work ethics. One of the best methods is to
                        look nearby to find people similar to us, yet different
                        enough to enrich us with their diversity. That is why we
                        proudly keep our European profile.
                        <br /> <br />
                        Our talent sourcing platform provides you with
                        opportunities. You can join projects or long-term
                        assignments which are tailored to your skills, learning
                        needs and developmental plans. We operate with many
                        forms of workforce engagement, such as short and
                        long-term contracts, regular employment, ad hoc gigs
                        etc. This gives you full flexibility and freedom to
                        choose the way in which you want to work.
                      </p>
                    </div>
                  </Collapsible.Content>
                </motion.div>
              )}
            </AnimatePresence>
          </Collapsible.Root>

          <Collapsible.Root
            open={openWhoAreYou}
            onOpenChange={setOpenWhoAreYou}
          >
            <Collapsible.Trigger asChild>
              <div className="flex w-full cursor-pointer justify-between  ">
                <div className="text-q-blue w-full py-4 text-left text-xl uppercase">
                  WHO ARE YOU?
                </div>
                <div className="text-q-orange text-2xl">
                  {openWhoAreYou ? <span>-</span> : <span>+</span>}
                </div>
              </div>
            </Collapsible.Trigger>
            <AnimatePresence>
              {openWhoAreYou && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                >
                  <Collapsible.Content forceMount>
                    <div className="my-4 space-y-6 text-left text-base opacity-70">
                      <p>
                        You want get things done, work with clear goals, for
                        decent money and in meaningful project for globally
                        recognized companies.
                        <br />
                        ...or...
                        <br />
                        You don’t want to miss exciting opportunities and try to
                        identify projects you will have satisfaction working
                        with the best teams and solving real problems.
                        <br />
                        ...or...
                        <br />
                        You wonder if there is new model of co-operation between
                        software vendor, developers and customers. The model,
                        which is more flexible and much better than the old
                        ones.
                        <br />
                        <br />
                        If you are tired of stowaways who takes credit for the
                        project while not contributing you should really
                        consider joining Quercus. With our monitoring,
                        management and alert solutions you can gain the most
                        value from your hard work and excellent professional
                        skills.
                      </p>
                    </div>
                  </Collapsible.Content>
                </motion.div>
              )}
            </AnimatePresence>
          </Collapsible.Root>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default WhoWeAre;
