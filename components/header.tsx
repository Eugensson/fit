"use client";

import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed top-0 z-50 w-full max-w-[1920px] h-[100px] transition-all bg-primary-200`}
    >
      <div className="container mx-auto h-full flex justify-between items-center">
        <Logo />
        <MobileNav
          containerStyles={`${
            isOpenMenu
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 py-0 overflow-hidden border-white/0"
          } ${
            headerActive ? "top-[98px]" : "top-[124px]"
          } fixed w-full left-0 flex flex-col gap-8 text-white text-base uppercase font-medium text-center bg-primary-200 transition-all xl:hidden`}
        />
        <Nav containerStyles="hidden xl:flex items-center gap-4 text-white text-base uppercase font-medium transition-all" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-white">
            <button
              type="button"
              className="hover:text-accent transition-all text-base uppercase font-medium"
            >
              login
            </button>
            <button
              type="button"
              className="hover:text-accent transition-all text-base uppercase font-medium"
            >
              register
            </button>
          </div>
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="text-white xl:hidden"
          >
            {isOpenMenu ? (
              <MdClose className="text-4xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
