import SectionWrapper from "@/app/components/section-wrapper";
import Image from "next/image";
import React from "react";

type Props = {};

const JoinOurTeam = (props: Props) => {
  return (
    <div>
      <SectionWrapper>
        <div className="my-16 space-y-8 text-center">
          <h1 className="text-q-blue text-2xl">JOIN OUR TEAM</h1>
          <h2 className="opacity-70">
            Once your account is set up, you will be asked to come back to us at
            the convenient time for you and fill the information concerning your
            skills and experience.
          </h2>
          <h2 className="opacity-70">For our professionals we offer:</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-q-orange flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/others/003-three-stars.png"
                alt="003-three-stars"
                width={100}
                height={100}
              />
              <p>PROJECTS TAILORED TO SKILLS </p>
            </div>
            <div className="text-q-orange flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/others/001-handshake.png"
                alt="001-handshake"
                width={100}
                height={100}
              />
              <p>FLEXIBLE WAYS OF WORK </p>
            </div>
            <div className="text-q-orange flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/others/002-bars.png"
                alt="002-bars"
                width={100}
                height={100}
              />
              <p>RESULT-DRIVEN REMUNERATION </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default JoinOurTeam;
