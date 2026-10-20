import images from "../Data/image";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiMysql, SiBootstrap, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import ElasticStack from "./ElasticStack";

export default function About() {
  const skills = [
    { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
    { name: "React", Icon: FaReact, color: "#61DAFB" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "Git", Icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", Icon: FaGithub, color: "#FFFFFF" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#09090B] px-6 py-20 text-white sm:px-10 md:px-14 lg:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* About Heading */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="mb-3 text-sm tracking-[0.35em] text-blue-400">
              GET TO KNOW ME
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              ABOUT <span className="text-blue-400">ME</span>
            </h1>

            <div className="mt-4 h-1 w-20 rounded-full bg-blue-400" />
          </motion.div>
        </div>

        {/* About Glass Box */}
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-500/5 backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/20 sm:p-8 md:grid-cols-2 md:gap-12 lg:p-12">
          {/* About Text */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Who I am
              </p>

              <h3 className="mb-6 text-2xl font-bold leading-snug sm:text-3xl">
                Building thoughtful digital experiences with{" "}
                <span className="text-blue-400">code and creativity.</span>
              </h3>

              <p className="text-base leading-8 text-gray-300 sm:text-lg">
                I'm Narges Karimyar, a frontend developer based in Kabul,
                specializing in building responsive, high-performance web
                interfaces with React and Tailwind CSS. I focus on clean code,
                thoughtful interaction design, and smooth animations that
                enhance user experience.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
                I developed my programming foundation through online learning
                and programming academies. I'm currently pursuing my knowledge
                in Computer Science while expanding my skills in backend
                development and databases such as MySQL.
              </p>
              <Link to="/More">
                <button className="text-balance text-5xl font-bold tracking-[-0.025em] text-white sm:text-xl lg:text-xl">
                  {" "}
                  see more
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="order-1 flex justify-center md:order-2">
            <motion.div
              className="relative mt-16 text-center sm:mt-20"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="group relative w-full max-w-sm">
                <div className="absolute -inset-2 rounded-3xl bg-blue-500/20 opacity-60 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-2 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src={images[0].Image}
                    alt="Narges Karimyar"
                    className="h-72 w-full rounded-2xl object-cover sm:h-96"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mx-auto mt-8 max-w-3xl scale-[0.65] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 relative mt-16 text-center sm:mt-20"
          initial={{ opacity: 0, y: 45, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          <motion.p
            className="mb-3 text-sm tracking-[0.35em] text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WHAT I WORK WITH
          </motion.p>

          <motion.h2
            className="text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            MY <span className="text-blue-400">SKILLS</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Technologies I use to bring ideas to life.
          </motion.p>

          <ElasticStack
            itemSize={76}
            overlap={24}
            pushForce={15}
            items={skills}
          />
        </motion.div>
      </div>
    </section>
  );
}
