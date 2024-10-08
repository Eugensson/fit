"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { classes } from "@/constants";
import { fadeIn } from "@/lib/variants";
import { CustomButton } from "@/components/custom-button";

export const Classes = () => {
  return (
    <section id="class">
      <motion.ul
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map(({ name, img, description }, index) => (
          <li
            key={index}
            className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
          >
            <div className="bg-black/50 absolute top-0 z-10 w-full h-full" />
            <Image src={img} alt={name} fill className="object-cover" />
            <div className="z-20 max-w-[380px] flex flex-col justify-center items-center gap-4 text-center">
              <motion.h3
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="h3 text-accent"
              >
                {name}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="text-white"
              >
                {description}
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <CustomButton
                  containerStyles="w-[164px] h-[46px]"
                  text="Read more"
                />
              </motion.div>
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  );
};
