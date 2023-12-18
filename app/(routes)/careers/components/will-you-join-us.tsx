import FirstElementWrapper from "@/app/components/first-element-wrapper";
import LinkButton from "@/app/components/ui/link-button";
import React from "react";

type Props = {};

const WillYouJoinUs = (props: Props) => {
  return (
    <FirstElementWrapper
      imageSrc="/images/others/careers.png"
      imageAlt="careers"
      xDirection={100}
      yDirection={0}
    >
      <div className=" py-12">
        <div className="flex flex-col items-center justify-center gap-8  text-center">
          <FirstElementWrapper.Title>
            Will you join us?
          </FirstElementWrapper.Title>

          <FirstElementWrapper.Subtitle>
            We welcome every talent who wants to join our expert platform
          </FirstElementWrapper.Subtitle>
          <LinkButton href="/careers#form" className="uppercase">
            Proceed to form
          </LinkButton>
        </div>
      </div>
    </FirstElementWrapper>
  );
};

export default WillYouJoinUs;
