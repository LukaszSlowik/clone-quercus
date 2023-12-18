"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { LuMenu, LuX } from "react-icons/lu";
import MyPresentationPopup from "./my-popup/my-presentation-popup";
type Props = {};

const NavigationMobile = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);
  const [showSolution, setShowSolution] = React.useState(false);
  const [showSeeMore, setShowSeeMore] = React.useState(false);
  return (
    <>
      <MyPresentationPopup open={showPopup} setOpen={setShowPopup} />
      <div className="cursor-pointer overflow-hidden hover:opacity-70">
        {!isOpen ? (
          <LuMenu
            onClick={() => setIsOpen(true)}
            className="ml-auto mr-8 h-8 w-8 transition-all"
          />
        ) : (
          <LuX
            onClick={() => setIsOpen(false)}
            className="ml-auto mr-8 h-8 w-8 transition-all"
          />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            key="mobileMenu"
            className="absolute left-0 top-[80px] z-[20] flex h-screen w-full  flex-col items-center justify-center overflow-hidden bg-[#f1f1f1] text-2xl  shadow-xl"
          >
            <div className="    text-q-purple flex-1">
              <ul
                onClick={() => setIsOpen(false)}
                className=" my-12 flex  flex-col items-center justify-evenly gap-4  "
              >
                <li className="hover:text-q-orange flex h-full cursor-pointer items-center   justify-center uppercase">
                  <Link onClick={() => setIsOpen(false)} href="/">
                    {" "}
                    Home
                  </Link>
                </li>
                <li
                  onMouseEnter={() => setShowSeeMore(true)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSeeMore(!showSeeMore);
                  }}
                  className=" hover:text-q-orange flex h-full cursor-pointer flex-col items-center justify-center uppercase"
                >
                  See more
                </li>

                {showSeeMore ? (
                  <div className="w-screen border bg-white">
                    <ul
                      onClick={() => setIsOpen(false)}
                      className="space-y-4 py-4 text-base uppercase text-black"
                    >
                      <li className="hover:text-q-orange">
                        <Link href="/new-model-vendor">New model vendor</Link>
                      </li>
                      <li className="hover:text-q-orange">
                        <Link href="/value">Value delivered</Link>
                      </li>
                      <li className="hover:text-q-orange">
                        <Link href="/delivery-methods">Delivery methods</Link>
                      </li>
                    </ul>
                  </div>
                ) : null}
                {/* </li> */}
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSolution(!showSolution);
                  }}
                  onMouseEnter={() => setShowSolution(true)}
                  onMouseLeave={() => setShowSolution(false)}
                  onFocus={() => setShowSolution(!showSolution)}
                  className=" hover:text-q-orange flex h-full cursor-pointer flex-col items-center justify-center uppercase"
                >
                  <div>Solution</div>
                  {showSolution ? (
                    <div className="w-screen border bg-white">
                      <ul className="space-y-4 py-4 text-base text-black">
                        <li className="hover:text-q-orange">innovation</li>
                        <li className="hover:text-q-orange">
                          artifical inteligence
                        </li>
                        <li className="hover:text-q-orange">prototyping</li>
                        <li className="hover:text-q-orange">maintenance</li>
                        <li className="hover:text-q-orange">technology</li>
                        <li className="hover:text-q-orange">talent sourcing</li>
                      </ul>
                    </div>
                  ) : null}
                </li>
                <li className=" hover:text-q-orange flex h-full cursor-pointer items-center justify-center uppercase">
                  <Link href="/clients">Our Clients</Link>
                </li>
                <li className=" hover:text-q-orange flex h-full cursor-pointer items-center justify-center uppercase">
                  <Link href="/careers">Careers</Link>
                </li>
                <li className=" hover:text-q-orange flex h-full cursor-pointer items-center justify-center uppercase">
                  <button onClick={() => setShowPopup(true)}>Contact Us</button>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationMobile;
