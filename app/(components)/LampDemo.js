"use client";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="
          mt-8 bg-gradient-to-br from-slate-300 to-slate-500
          bg-clip-text text-center text-4xl font-medium tracking-tight
          text-transparent md:text-7xl
        "
      >
        Build lamps the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-950",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate">
        {/* Left conic light */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="
            absolute right-12 h-56 w-[30rem]
            bg-conic from-cyan-500 via-transparent to-transparent
            [--tw-gradient-from-position:70deg] bg-conic-70
            overflow-visible
          "
        />

        {/* Right conic light */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="
            absolute left-12 h-56 w-[30rem]
            bg-conic from-transparent via-transparent to-cyan-500
            [--tw-gradient-from-position:290deg] bg-conic-290
          "
        />

        {/* Top & bottom light flares */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 h-48 w-full opacity-10 backdrop-blur-md" />
        <div className="absolute z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />

        {/* Center moving blur */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        />

        {/* Central lamp highlight */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        />

        {/* Foreground overlay */}
        <div className="absolute z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950" />
      </div>

      {/* Children (e.g., title) */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
