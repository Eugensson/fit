"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { membershipData } from "@/constants";
import { CustomButton } from "@/components/custom-button";

import "swiper/css";
import "swiper/css/pagination";

export const MembershipSlider = () => {
  return (
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
      className="min-h-[600px]"
    >
      {membershipData.map(({ title, price, benefits }, index) => (
        <SwiperSlide key={index}>
          <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
            <div className="py-5 px-[60px] border-b border-accent">
              <h4 className="h4">{title}</h4>
            </div>
            <div className="p-7">
              <ul className="flex flex-col gap-5 mb-7">
                {benefits.map(({ text, icon }, index) => {
                  const Icon = icon;
                  return (
                    <li className="flex items-center gap-2" key={index}>
                      <Icon className="text-accent text-lg" />
                      {text}
                    </li>
                  );
                })}
              </ul>
              <p className="text-accent mb-8 flex items-center gap-1">
                <sup className="text-4xl">$</sup>
                <strong className="text-6xl">{price}</strong>
                <em className="self-end text-2xl">/month</em>
              </p>
              <CustomButton
                containerStyles="w-[196px] h-[62px]"
                text="Buy now"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
