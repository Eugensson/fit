"use client";

import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";

import { fadeIn } from "@/lib/variants";
import { Achievements } from "@/components/achievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati fugiat error tempore mollitia exercitationem.",
  },
  {
    icon: <IoIosPricetags />,
    title: "exelent prices",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati fugiat error tempore mollitia exercitationem.",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati fugiat error tempore mollitia exercitationem.",
  },
];

export const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            repudiandae provident impedit ipsum est mollitia!
          </motion.p>
        </div>
        <motion.ul
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map(({ icon, title, subtitle }, index) => (
            <li key={index} className="flex flex-col items-center gap-2 mb-4">
              <div className="flex flex-col justify-center items-center gap-4 border p-10">
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent text-center">{title}</h4>
                  <p className="text-center">{subtitle}</p>
                </div>
              </div>
            </li>
          ))}
        </motion.ul>
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};
