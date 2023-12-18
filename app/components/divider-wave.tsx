import React from "react";
import { cn } from "../../lib/utils";

type Props = {
  className?: string;
};

const DividerWave = ({ className }: Props) => {
  return (
    <svg
      style={{
        height: "70px",
      }}
      className={cn(`w-full scale-x-[-1] transform fill-current`, className)}
      preserveAspectRatio="none"
      viewBox="0 0 1442 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M1442,33.8142136 C1280.56278,15.0410066 1162.74657,5.65440317 1088.55136,5.65440317 C935.145886,5.65440317 572.295431,37.1029354 3.86535248e-12,100 L0,0 L1442,0 L1442,33.8142136 Z"></path>
    </svg>
  );
};

export default DividerWave;
