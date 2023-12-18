"use client";

import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import SubmenuPopover from "./submenu-popover";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MyPresentationPopup from "./my-popup/my-presentation-popup";
import { subMenuSeeMoreArray } from "@/data/sub-menu-see-more";
import { subMenuSolutionArray } from "@/data/sub-menu-solution";
type Props = {};

const NavigationNormal = (props: Props) => {
  const [showSubMenu, setShowSubMenu] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [showSubMenuSolution, setShowSubMenuSolution] = React.useState(false);
  const pathname = usePathname();
  return (
    <>
      <nav className="text-q-purple hidden h-full  flex-1 lg:block">
        <MyPresentationPopup open={open} setOpen={setOpen} />
        <ul className=" flex h-full items-center justify-evenly  ">
          <li
            className={cn(
              `hover:text-q-orange flex h-full cursor-pointer items-center   justify-center uppercase`,
              pathname === "/" && "text-q-orange",
            )}
          >
            <Link href="/">Home </Link>
          </li>
          <li className="h-full">
            <button
              onClick={() => {
                setShowSubMenu(true);
              }}
              className={cn(
                `hover:text-q-orange flex h-full cursor-pointer items-center justify-center    uppercase `,
                showSubMenu && "text-q-orange pointer-events-none",
                (pathname === "/value" ||
                  pathname === "/new-model-vendor" ||
                  pathname === "/delivery-methods") &&
                  "text-q-orange",
              )}
            >
              See more
            </button>
            <SubmenuPopover
              showSubMenu={showSubMenu}
              setShowSubMenu={setShowSubMenu}
              linksArray={subMenuSeeMoreArray}
            />
          </li>
          <li className="h-full">
            <button
              onClick={() => {
                setShowSubMenuSolution(true);
              }}
              className={cn(
                `hover:text-q-orange flex h-full cursor-pointer items-center   justify-center uppercase`,
                showSubMenuSolution && "text-q-orange pointer-events-none",
              )}
            >
              Solutions
            </button>
            <SubmenuPopover
              showSubMenu={showSubMenuSolution}
              setShowSubMenu={setShowSubMenuSolution}
              linksArray={subMenuSolutionArray}
            />
          </li>
          <li
            className={cn(
              `hover:text-q-orange flex h-full cursor-pointer items-center   justify-center uppercase`,
              pathname === "/clients" && "text-q-orange",
            )}
          >
            <Link href="/clients">Our Clients </Link>
          </li>
          <li
            className={cn(
              `hover:text-q-orange flex h-full cursor-pointer items-center   justify-center uppercase`,
              pathname === "/careers" && "text-q-orange",
            )}
          >
            <Link href="/careers">Careers </Link>
          </li>
          <li
            onClick={() => setOpen(true)}
            className={cn(
              `hover:text-q-orange flex h-full cursor-pointer items-center   justify-center uppercase`,
              pathname === "/contact" && "text-q-orange",
            )}
          >
            <button className="uppercase">Contact Us </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationNormal;
