"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";
import { trainerData } from "@/constants";
import { CustomButton } from "@/components/custom-button";

export const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our trainers
        </motion.h2>
        <motion.ul
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerData.map(
            ({ image, name, role, description, socials }, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-[320px] h-[360px] mx-auto mb-4 ">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="h4 mb-2">{name}</h4>
                  <p className="uppercase text-xs tracking-[3px] mb-2">
                    {role}
                  </p>
                  <p className="mb-6 max-w-[320px] mx-auto">{description}</p>
                  <ul className="flex justify-center items-center gap-12">
                    {socials.map(({ icon, link }, index) => {
                      const Icon = icon;
                      return (
                        <li key={index}>
                          <Link
                            href={link}
                            target="_blank"
                            className="hover:text-accent transition-all"
                          >
                            <Icon size={24} />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
          )}
        </motion.ul>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="w-[196px] h-[62px]"
            text="See all trainers"
          />
        </motion.div>
      </div>
    </section>
  );
};
