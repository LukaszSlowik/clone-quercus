"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  tags: string[];

  index: number;
};

const SoftwareOnDemand = ({
  src,
  alt,
  title,
  subtitle,
  tags,
  index,
}: Props) => {
  return (
    <motion.div className=" h-full cursor-pointer   bg-white text-black md:p-8">
      <motion.div className="flex flex-col items-start justify-center ">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.3 },
          }}
          viewport={{ once: true }}
          className="hidden max-h-[210px] overflow-hidden md:block"
        >
          <Image src={src} alt={alt} width={500} height={500} className="" />
        </motion.div>
        <div className="text-q-blue  mx-auto w-[10ch]  text-center text-xl uppercase leading-tight">
          {title}
        </div>
        <div className="w-full py-2 text-center text-xl ">{subtitle}</div>
        <div className="flex w-full flex-col items-center space-y-2 py-2 text-base opacity-50 ">
          {tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SoftwareOnDemand;
