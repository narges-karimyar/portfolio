import React from "react";
import TeamRevealGrid from "./TeamRevealGrid";
import images from "../Data/image";
import { motion } from "framer-motion";
const members = [
  {
    id: "Consulting",
    name: "Consulting",
    role: "Web Development",
    expertise:
      "A modern consulting website designed to showcase professional services, build client trust, and help businesses grow.",
    link: "https://consulting-ruby.vercel.app/",
    image: images[1].Image,
    accent: "#60a5fa",
  },
  {
    id: "Findit",
    name: "Findit",
    role: "Search Platform",
    expertise:
      "A modern search platform designed to help users find relevant information through a clean, user-friendly interface.",
    link: "https://findit-3zfu.vercel.app/",
    image: images[2].Image,
    accent: "#60a5fa",
  },
  {
    id: "hub",
    name: "MyPiHUB",
    role: "Healthcare Platform",
    expertise:
      "A healthcare platform that helps users find doctors and clinics, manage family health profiles, and access essential medical services.",
    link: "https://hub-hazel-iota.vercel.app/",
    image: images[4].Image,
    accent: "#60a5fa",
  },
  {
    id: "Brikly",
    name: "Brikly",
    role: "Real Estate Platform",
    expertise:
      "A modern real estate platform designed to showcase properties and help users explore housing options through a clean interface.",
    link: "https://briklyhb.vercel.app/",
    image: images[3].Image,
    accent: "#60a5fa",
  },
];

export default function TeamSection() {
  return (
    <section
      id="projects"
      className="bg-[#09090B] px-6 py-20 text-white sm:px-10 md:px-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <TeamRevealGrid
          members={members}
          title="My Projects"
          eyebrow="Selected work"
          description="A collection of digital experiences built with creativity and code."
          defaultActiveMemberId="Consulting"
          autoPlay={true}
          rotationInterval={2800}
          onActiveMemberChange={(id) => console.log(id)}
        />
      </motion.div>
    </section>
  );
}
