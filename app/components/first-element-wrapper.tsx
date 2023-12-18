import React from "react";
import SectionWrapper from "./section-wrapper";
import Image from "next/image";

import MotionImageWrapper from "./motion-image-wrapper";
import { cn } from "../../lib/utils";

type Props = {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  xDirection?: number;
  yDirection?: number;
  className?: string;
};

const FirstElementWrapper = (props: Props) => {
  return (
    <div className={cn(``, props.className)}>
      <SectionWrapper>
        <div className="grid grid-cols-1  md:grid-cols-2">
          <MotionImageWrapper
            xDirection={props.xDirection}
            yDirection={props.yDirection}
          >
            <Image
              src={props.imageSrc}
              alt={props.imageAlt}
              width={500}
              height={500}
            />
          </MotionImageWrapper>
          {props.children}
        </div>
      </SectionWrapper>
    </div>
  );
};
const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(`text-4xl font-bold text-[#46484b] lg:text-6xl`, className)}
    >
      {children}
    </h1>
  );
};
const Subtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        `pb-8 font-roboto text-base font-light lg:text-3xl lg:font-thin`,
        className,
      )}
    >
      {children}
    </h3>
  );
};
FirstElementWrapper.Subtitle = Subtitle;

FirstElementWrapper.Title = Title;
export default FirstElementWrapper;
