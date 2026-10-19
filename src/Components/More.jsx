import { Link } from "react-router-dom";
import images from "../Data/image";
import Contact from "./Contact";
export default function More() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#09090B] px-6 py-20 text-white sm:px-10 md:px-16">
        {/* Blue background glow */}
        <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl">
          {/* Heading */}
          <div className="mb-10">
            <p className="mb-3 text-sm tracking-[0.35em] text-blue-400">
              GET TO KNOW ME
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              MORE ABOUT <span className="text-blue-400">ME</span>
            </h1>

            <div className="mt-4 h-1 w-20 rounded-full bg-blue-400" />
          </div>

          {/* Glass card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-500/5 backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/20 sm:p-8 md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              My journey
            </p>

            <p className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              I'm Narges Karimyar, a frontend developer based in Kabul,
              specializing in building responsive, high-performance web
              interfaces with React and Tailwind CSS. I focus on clean
              structure, thoughtful interaction design, and motion that improves
              usability rather than distracting from it. I built my foundation
              in programming through online learning and at three academies:{" "}
              <a
                href="https://upskillacademy.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline"
              >
                UPskill
              </a>
              {", "}
              <a
                href="https://topintowntechnology.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline"
              >
                Top in Town
              </a>
              {", and "}
              <a
                href="https://hbcxconsulting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline"
              >
                HBC
              </a>
              . I am pursuing a Bachelor's degree in Computer Science at the
              University of the People, with an expected graduation year of
              2030.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              I am expanding my skills into backend development and relational
              databases such as MySQL, Node js, mongodb helping me understand
              how the interfaces I build connect to the systems behind them. I
              enjoy learning new technologies and creating polished,
              maintainable work. I'm open to new opportunities and
              collaborations.
            </p>

            {/* Back link */}
            <Link
              to="/#about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Back to About
            </Link>
          </div>
        </div>
      </section>
      <section className="relative min-h-screen overflow-hidden bg-[#09090B] px-6 py-20 text-white sm:px-10 md:px-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            CERTIFICATES
          </h1>
          <div className="mt-4 h-1 w-20 rounded-full bg-blue-400" />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1. HTML & CSS */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50">
            <a href={images[5].Image} target="_blank" rel="noopener noreferrer">
              <img
                src={images[5].Image}
                alt="HTML and CSS certificate"
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <div className="p-3">
              <p className="text-xs tracking-widest text-blue-400">
                CERTIFICATE
              </p>
              <h2 className="mt-2 text-lg font-medium text-white">
                HTML & CSS
              </h2>
            </div>
          </div>

          {/* 2. JavaScript */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50">
            <a href={images[6].Image} target="_blank" rel="noopener noreferrer">
              <img
                src={images[6].Image}
                alt="JavaScript certificate"
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <div className="p-3">
              <p className="text-xs tracking-widest text-blue-400">
                CERTIFICATE
              </p>
              <h2 className="mt-2 text-lg font-medium text-white">
                JavaScript
              </h2>
            </div>
          </div>

          {/* 3. Python */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50">
            <a href={images[7].Image} target="_blank" rel="noopener noreferrer">
              <img
                src={images[7].Image}
                alt="Python certificate"
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <div className="p-3">
              <p className="text-xs tracking-widest text-blue-400">
                CERTIFICATE
              </p>
              <h2 className="mt-2 text-lg font-medium text-white">Python</h2>
            </div>
          </div>

          {/* 4. Front-End */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50">
            <a href={images[9].Image} target="_blank" rel="noopener noreferrer">
              <img
                src={images[9].Image}
                alt="Front-end development certificate"
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <div className="p-3">
              <p className="text-xs tracking-widest text-blue-400">
                CERTIFICATE
              </p>
              <h2 className="mt-2 text-lg font-medium text-white">
                Front-End Development
              </h2>
            </div>
          </div>

          {/* 5. Additional Front-End */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50">
            <a
              href={images[10].Image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={images[10].Image}
                alt="Front-end development certificate"
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <div className="p-3">
              <p className="text-xs tracking-widest text-blue-400">
                CERTIFICATE
              </p>
              <h2 className="mt-2 text-lg font-medium text-white">
                Front-End Development
              </h2>
            </div>
          </div>

          {/* 6. English */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50">
            <a href={images[8].Image} target="_blank" rel="noopener noreferrer">
              <img
                src={images[8].Image}
                alt="English language certificate"
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <div className="p-3">
              <p className="text-xs tracking-widest text-blue-400">
                CERTIFICATE
              </p>
              <h2 className="mt-2 text-lg font-medium text-white">
                English Language
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
