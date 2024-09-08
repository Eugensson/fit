"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { brandsData } from "@/constants";

const brandContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const brandItemVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

export const Brands = () => {
  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto">
        <motion.ul
          variants={brandContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-3 lg:grid-cols-5 py-8"
        >
          {brandsData.map(({ src, href, alt }, index) => (
            <motion.li variants={brandItemVariant} key={index}>
              <Link href={href} className="group">
                <Image
                  src={src}
                  alt={`Logo ${alt}`}
                  width={284}
                  height={106}
                  className="opacity-50 group-hover:opacity-100 transition-all mx-auto"
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
