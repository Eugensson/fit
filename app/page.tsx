import { Team } from "@/components/team";
import { Hero } from "@/components/hero";
import { Blog } from "@/components/blog";
import { About } from "@/components/about";
import { Brands } from "@/components/brands";
import { Classes } from "@/components/classes";
import { Membership } from "@/components/membership";
import { Testimonial } from "@/components/testimonial";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonial />
      <Blog />
      <Brands />
    </main>
  );
};

export default Home;
