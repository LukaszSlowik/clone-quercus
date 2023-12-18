"use client";

import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type linkstype = {
  title: string;
  href?: string;
  subtitle: string;
};

type SubmenuPopoverType = {
  showSubMenu: boolean;
  setShowSubMenu: (show: boolean) => void;
  linksArray: linkstype[];
};

const SubmenuPopover = ({
  showSubMenu,
  setShowSubMenu,
  linksArray,
}: SubmenuPopoverType) => {
  const [clientSide, setClientSide] = React.useState(false);
  React.useEffect(() => {
    setClientSide(true);
  }, []);
  if (!clientSide) return null;

  const variants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, y: 50 },
    onexit: { opacity: 0, y: -50 },
  };
  const variantsh2 = {
    open: { opacity: 0.5, y: 0, transition: { duration: 0.5, delay: 0.5 } },
    closed: { opacity: 0, y: 50 },
    onexit: { opacity: 0, y: -50 },
  };
  const variant3 = {
    open: { opacity: 0.5, y: 0, transition: { duration: 0.8, delay: 0.8 } },
    closed: { opacity: 0, y: 50 },
    onexit: { opacity: 0, y: -50 },
  };

  return (
    <>
      <Popover.Root open={showSubMenu} onOpenChange={setShowSubMenu}>
        <Popover.Trigger />
        <Popover.Anchor />
        <AnimatePresence>
          {showSubMenu && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Popover.Portal forceMount key="dialog">
                <Popover.Content
                  sideOffset={-35}
                  className="shadow-middle   z-[999]  flex overflow-hidden  rounded-md bg-white px-4 py-8"
                >
                  <motion.ul
                    variants={variants}
                    initial={"closed"}
                    animate={showSubMenu ? "open" : "closed"}
                    //exit={"onexit"}
                    className=" h-full columns-3   space-y-6 "
                  >
                    {linksArray.map((link) => (
                      <li key={link.title} className="mx-4 ">
                        <h1 className="hover:text-q-orange text-q-purple cursor-pointer uppercase">
                          <Link
                            onClick={() => setShowSubMenu(false)}
                            href={link.href || ""}
                          >
                            {link.title}
                          </Link>
                        </h1>
                        <motion.div
                          variants={variantsh2}
                          className=" text-black "
                        >
                          {link.subtitle}
                        </motion.div>
                      </li>
                    ))}
                  </motion.ul>
                  <div>
                    <h1 className="uppercase ">Why bring on us?</h1>
                    <motion.div
                      variants={variant3}
                      initial={"closed"}
                      animate={showSubMenu ? "open" : "closed"}
                      //exit={"onexit"}

                      className="  mt-2  text-black"
                    >
                      <ul className="list-disc space-y-3  px-2 text-xs">
                        <li>skill on demand</li>
                        <li>built-in quality</li>
                        <li>on time, guaranteed</li>
                        <li>highest security</li>
                        <li>standards</li>
                      </ul>
                    </motion.div>
                  </div>
                  <Popover.Close />
                </Popover.Content>
              </Popover.Portal>
            </motion.div>
          )}
        </AnimatePresence>
      </Popover.Root>
    </>
  );
};

export default SubmenuPopover;
