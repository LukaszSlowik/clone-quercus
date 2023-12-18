import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

const LinkButton = ({ href, className, children }: Props) => {
  return (
    <Link className="" href={href}>
      <div
        className={cn(
          ` bg-q-orange w-fit rounded-2xl px-6  py-4 text-white hover:shadow-2xl hover:brightness-75`,
          className,
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export default LinkButton;
