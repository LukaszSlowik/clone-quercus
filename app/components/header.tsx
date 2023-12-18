import React from "react";
import SectionWrapper from "./section-wrapper";
import Image from "next/image";
import NavigationNormal from "./navigation";
import Link from "next/link";
import NavigationMobile from "./navigation-mobile";
import SignIn from "./sign-in";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className=" shadow-header text-q-purple fixed left-0 right-0 top-0 z-[999] h-[80px] bg-white">
      <SectionWrapper className="h-full">
        <div className="flex h-full items-center justify-between ">
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <Link href="/">
              <Image
                src="/images/quercus_logo_3.png"
                alt="quercus-logo"
                width={200}
                height={80}
                className=" object-contain object-center"
              />
            </Link>
            <span>{`(clone)`}</span>
          </div>

          <div className="flex-grow lg:hidden">
            <NavigationMobile />{" "}
          </div>

          <NavigationNormal />

          <SignIn />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Header;
