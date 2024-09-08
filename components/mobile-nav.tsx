"use client";

import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";

import { links } from "@/constants";

interface NavProps {
  containerStyles: string;
}

export const MobileNav: React.FC<NavProps> = ({ containerStyles }) => {
  const isMobile = useMediaQuery({
    query: "(max-w-[640px])",
  });

  return (
    <nav className={`${containerStyles}`}>
      {links.map(({ name, target, offset }, index) => (
        <ScrollLink
          key={index}
          to={target}
          spy
          smooth
          offset={offset}
          activeClass={`${!isMobile && "active"}`}
          className="cursor-pointer hover:text-accent transition-all"
        >
          {name}
        </ScrollLink>
      ))}
    </nav>
  );
};
