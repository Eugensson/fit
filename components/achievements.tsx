"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

import { stats } from "@/constants";

const statsContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const statsItemVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section>
      <div className="comtainer mx-auto">
        <motion.ul
          variants={statsContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-16"
        >
          {stats.map(({ number, icon, title }, index) => {
            const Icon = icon;

            return (
              <motion.li
                variants={statsItemVariant}
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                  <div
                    ref={ref}
                    className="border border-accent/30 w-full h-full flex justify-center items-center text-5xl rounded-full"
                  >
                    {isInView && (
                      <CountUp start={0} end={number} duration={6} />
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <Icon className="text-3xl mb-2" />
                  <h4 className="h4">{title}</h4>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};
