"use client";

import Link from "next/link";
import Image from "next/image";

import {
  RiFacebookLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { motion } from "framer-motion";
import { LiaPhoneSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { RxEnvelopeClosed } from "react-icons/rx";

import { Logo } from "@/components/logo";
import { CustomButton } from "@/components/custom-button";

const footerContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const footerItemVariant = {
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

export const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12 text-white"
        >
          <motion.div
            variants={footerItemVariant}
            className="flex flex-col gap-4"
          >
            <Logo />
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <TfiLocationPin size={20} className="text-accent" />
                <span>Lincoln Park Chicago, Illinois</span>
              </li>
              <li className="flex items-center gap-4">
                <LiaPhoneSolid size={20} className="text-accent" />
                <span>
                  <Link
                    href="tel:+15105201889"
                    className="hover:underline hover:text-accent transition-all duration-300"
                  >
                    (510) 520-1889
                  </Link>
                  ,{" "}
                  <Link
                    href="tel:+15103456793"
                    className="hover:underline hover:text-accent transition-all duration-300"
                  >
                    (510) 345-6793
                  </Link>
                </span>
              </li>
              <li>
                <Link
                  href="mailto:info@fit.com"
                  className="flex items-center gap-4 group"
                >
                  <RxEnvelopeClosed size={20} className="text-accent" />
                  <span className="group-hover:underline group-hover:text-accent transition-all duration-300">
                    info@fit.com
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={footerItemVariant}>
            <h4 className="h4 text-accent mb-4">Recent blog posts</h4>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link
                href="#"
                className="hover:text-accent transition-all duration-300"
              >
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-xs tracking-[3px] uppercase">
                  September 6, 2024
                </p>
              </Link>
            </div>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link
                href="#"
                className="hover:text-accent transition-all duration-300"
              >
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-xs tracking-[3px] uppercase">
                  September 6, 2024
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link
                href="#"
                className="hover:text-accent transition-all duration-300"
              >
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-xs tracking-[3px] uppercase">
                  September 6, 2024
                </p>
              </Link>
            </div>
          </motion.div>
          <motion.div variants={footerItemVariant}>
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/david.jpg"}
                    alt="Photo trainer"
                    width={100}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/matt.jpg"}
                    alt="Photo trainer"
                    width={100}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/rosy.jpg"}
                    alt="Photo trainer"
                    width={100}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/sofia.jpg"}
                    alt="Photo trainer"
                    width={100}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/david.jpg"}
                    alt="Photo trainer"
                    width={100}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/matt.jpg"}
                    alt="Photo trainer"
                    width={100}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/rosy.jpg"}
                    alt="Photo trainer"
                    width={100}
                    height={100}
                  />
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={footerItemVariant}>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>Subscribe to our newsletter to receive the latest news.</p>
              <form className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[50px] outline-none px-4 text-primary-300"
                />
                <CustomButton containerStyles="h-[50px] px-8" text="Send" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <span className="text-xs">&copy; Copyright 2024 Fit.</span>
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="text-white hover:text-accent transition-all duration-300"
                >
                  <RiFacebookLine size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com"
                  target="_blank"
                  className="text-white hover:text-accent transition-all duration-300"
                >
                  <RiTwitterXLine size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="text-white hover:text-accent transition-all duration-300"
                >
                  <RiInstagramLine size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="text-white hover:text-accent transition-all duration-300"
                >
                  <RiYoutubeLine size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
