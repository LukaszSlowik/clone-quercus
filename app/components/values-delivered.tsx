"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  text: string;
  href: string;
  index: number;
};

const ValuesDelivered = ({ src, alt, text, href, index }: Props) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { delay: index * 0.1, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="hover:shadow-dark-lg text-q-orange h-full  cursor-pointer rounded-3xl border bg-white md:p-8"
    >
      <motion.div className="">
        <Link href={href}>
          <div className="hidden md:block">
            <Image src={src} alt={alt} width={500} height={500} />
          </div>
          <div className="py-6 text-xl uppercase">{text}</div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ValuesDelivered;
