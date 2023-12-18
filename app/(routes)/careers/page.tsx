import React from "react";
import WillYouJoinUs from "./components/will-you-join-us";
import WhoWeAre from "./components/who-we-are";
import JoinOurTeam from "./components/join-our-team";
import CareersForm from "./components/careers-form";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <WillYouJoinUs />
      <WhoWeAre />
      <JoinOurTeam />
      <CareersForm />
    </div>
  );
};

export default Page;
