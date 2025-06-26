"use client";
import React from "react";
import { motion } from "framer-motion";
import LightGlow from "./LightGlow";

export default function TubeLight() {
  return (
    <div className="bg-transparent ">
      {/* Tube Light */}
      <motion.div
        className="beam-light"
        initial={{ opacity: 0.3, scaleX: 0.8 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
}

// {/* Money Bag Icon */}
// <div className="absolute top-25 z-10">
//  <Image src="/mon.png" alt="Money Bag" width={24} height={24} />
// </div>
