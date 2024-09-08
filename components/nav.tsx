"use client";

import { Link as ScrollLink } from "react-scroll";

import { links } from "@/constants";

interface NavProps {
  containerStyles: string;
}

export const Nav: React.FC<NavProps> = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map(({ name, target, offset }, index) => (
        <ScrollLink
          key={index}
          to={target}
          spy
          smooth
          offset={offset}
          activeClass="active"
          className="cursor-pointer hover:text-accent transition-all"
        >
          {name}
        </ScrollLink>
      ))}
    </nav>
  );
};
