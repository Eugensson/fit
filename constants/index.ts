import {
  RiFacebookLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";

export const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "class", offset: -80 },
  { name: "team", target: "team", offset: 0 },
  { name: "prices", target: "prices", offset: -40 },
  { name: "testimonial", target: "testimonial", offset: 0 },
  { name: "blog", target: "blog", offset: 0 },
  { name: "contact", target: "contact", offset: 0 },
];

export const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    title: "training courses",
  },
  {
    number: 879,
    icon: FaClock,
    title: "working hours",
  },
  {
    number: 150,
    icon: ImUsers,
    title: "happy customers",
  },
  {
    number: 9,
    icon: FaTrophy,
    title: "international awards",
  },
];

export const classes = [
  {
    name: "body building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error exercitationem.",
  },
  {
    name: "cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error exercitationem.",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error exercitationem.",
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error exercitationem.",
  },
];

export const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Williams",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    socials: [
      { icon: RiFacebookLine, link: "https://facebook.com" },
      { icon: RiTwitterXLine, link: "https://x.com" },
      { icon: RiInstagramLine, link: "https://instagram.com" },
      { icon: RiYoutubeLine, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Rivera",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    socials: [
      { icon: RiFacebookLine, link: "https://facebook.com" },
      { icon: RiTwitterXLine, link: "https://x.com" },
      { icon: RiInstagramLine, link: "https://instagram.com" },
      { icon: RiYoutubeLine, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    socials: [
      { icon: RiFacebookLine, link: "https://facebook.com" },
      { icon: RiTwitterXLine, link: "https://x.com" },
      { icon: RiInstagramLine, link: "https://instagram.com" },
      { icon: RiYoutubeLine, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Lauren",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    socials: [
      { icon: RiFacebookLine, link: "https://facebook.com" },
      { icon: RiTwitterXLine, link: "https://x.com" },
      { icon: RiInstagramLine, link: "https://instagram.com" },
      { icon: RiYoutubeLine, link: "https://youtube.com" },
    ],
  },
];

export const membershipData = [
  {
    title: "Standart",
    price: "30",
    benefits: [
      { icon: FaCheck, text: "Includes membership" },
      { icon: FaCheck, text: "Access to all gym facilities" },
      { icon: MdClose, text: "Diet plan included" },
      { icon: FaCheck, text: "Health and fitness tips" },
      { icon: MdClose, text: "Monday-Friday gym access" },
      { icon: FaCheck, text: "Full access to everything" },
      { icon: MdClose, text: "No additional amenities" },
    ],
  },
  {
    title: "Ultimate",
    price: "45",
    benefits: [
      { icon: FaCheck, text: "Includes membership" },
      { icon: FaCheck, text: "Access to all gym facilities" },
      { icon: FaCheck, text: "Diet plan included" },
      { icon: FaCheck, text: "Health and fitness tips" },
      { icon: FaCheck, text: "Monday-Friday gym access" },
      { icon: FaCheck, text: "Full access to everything" },
      { icon: MdClose, text: "No additional amenities" },
    ],
  },
  {
    title: "Professional",
    price: "60",
    benefits: [
      { icon: FaCheck, text: "Includes membership" },
      { icon: FaCheck, text: "Access to all gym facilities" },
      { icon: FaCheck, text: "Diet plan included" },
      { icon: FaCheck, text: "Health and fitness tips" },
      { icon: FaCheck, text: "Monday-Friday gym access" },
      { icon: FaCheck, text: "Full access to everything" },
      { icon: FaCheck, text: "No additional amenities" },
    ],
  },
];

export const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Maria Garcia",
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Maria Garcia",
  },
];

export const blogData = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "September 08, 2024",
    title: "Maintain a perfect structure after workout",
    href: "#",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "September 08, 2024",
    title: "Maintain a perfect structure after workout",
    href: "#",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "September 08, 2024",
    title: "Maintain a perfect structure after workout",
    href: "#",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "September 08, 2024",
    title: "Maintain a perfect structure after workout",
    href: "#",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "September 08, 2024",
    title: "Maintain a perfect structure after workout",
    href: "#",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "September 08, 2024",
    title: "Maintain a perfect structure after workout",
    href: "#",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "September 08, 2024",
    title: "Maintain a perfect structure after workout",
    href: "#",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "September 08, 2024",
    title: "Maintain a perfect structure after workout",
    href: "#",
  },
];

export const brandsData = [
  {
    src: "/assets/img/brands/brand-1.png",
    href: "#",
    alt: "Fitness center",
  },
  {
    src: "/assets/img/brands/brand-2.png",
    href: "#",
    alt: "Lifter",
  },
  {
    src: "/assets/img/brands/brand-3.png",
    href: "#",
    alt: "Helth Center Best Local Gym",
  },
  {
    src: "/assets/img/brands/brand-4.png",
    href: "#",
    alt: "Fitness Club Gym",
  },
  {
    src: "/assets/img/brands/brand-5.png",
    href: "#",
    alt: "Bodybuilding Sports Gym",
  },
];
