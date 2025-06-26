"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LightGlow() {
  return (
    <div>
      {/* Expanding Beam Glow Below */}
      <motion.div
        className="spotlight-glow"
        initial={{ scaleX: 0.5, scaleY: 0.8, opacity: 0.4 }}
        animate={{ scaleX: 1.5, scaleY: 1.2, opacity: 0.5 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
