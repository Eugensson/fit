"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { blogData } from "@/constants";
import { fadeIn } from "@/lib/variants";
import { CustomButton } from "@/components/custom-button";
import { SwiperNavButtons } from "@/components/swiper-nav-buttons";

import "swiper/css";
import "swiper/css/navigation";

export const Blog = () => {
  return (
    <section className="bg-primary-300 text-white py-24" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Blogs
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map(({ img, date, title, href }, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-start h-full max-w-[320px] mx-auto">
                  <Image
                    src={img}
                    alt="Fitness center clint doing sports during training"
                    width={320}
                    height={266}
                    className="mb-6"
                  />
                  <div className="flex flex-col items-start">
                    <p className="max-w-[300px] uppercase text-xs tracking-[3px] mb-1">
                      {date}
                    </p>
                    <Link
                      className="hover:text-accent transition-all duration-300"
                      href={href}
                    >
                      <h5 className="h5">{title}</h5>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons
              containerStyles="absolute z-40 left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="block w-[196px] h-[62px] mx-auto"
            text="View all"
          />
        </motion.div>
      </div>
    </section>
  );
};
