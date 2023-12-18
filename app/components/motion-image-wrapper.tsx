"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
  xDirection?: number;
  yDirection?: number;
};

const MotionImageWrapper = ({ children, xDirection, yDirection }: Props) => {
  return (
    <motion.div
      className="my-auto  hidden overflow-hidden sm:block"
      initial={{ x: xDirection, y: yDirection, opacity: 0 }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: { delay: 0, duration: 0.3 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionImageWrapper;
