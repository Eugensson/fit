"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LiaQuoteLeftSolid } from "react-icons/lia";

import { fadeIn } from "@/lib/variants";
import { testimonialData } from "@/constants";

import "swiper/css";
import "swiper/css/pagination";

export const Testimonial = () => {
  return (
    <section className="py-12 xl:py-24" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Our testimonials
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
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[320px]"
          >
            {testimonialData.map(({ img, message, name }, index) => (
              <SwiperSlide className="h-full" key={index}>
                <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                  <Image
                    src={img}
                    alt={`Photo client ${{ name }}`}
                    width={90}
                    height={90}
                    className="rounded-full border-2 border-accent"
                  />
                  <div className="flex flex-col justify-center items-center">
                    <LiaQuoteLeftSolid size={30} className="text-gray-400" />
                    <p className="max-w-[380px] mb-4">{message}</p>
                    <span className="text-2xl text-accent">{name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
