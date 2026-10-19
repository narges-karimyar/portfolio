import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090B]">
        {/* Blue blurred background */}
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-[100px]" />

        {/* Main footer */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-sm font-bold tracking-wider text-white"
            >
              N.KARIMYAR
            </a>

            <h3 className="mt-4 max-w-xs font-sans leading-7 text-gray-300">
              Building thoughtful digital experiences with{" "}
              <span className="text-blue-400">code and creativity.</span>
            </h3>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-sm font-bold text-white">LET'S CONNECT</p>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="https://github.com/narges-karimyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:karimyarnarges.com"
                  className="transition-colors hover:text-blue-400"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/narges-karimyar-996b1041b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/93799628129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-400"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Social icons */}
          <div>
            <p className="text-sm font-bold text-white">FOLLOW ME</p>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="mailto:karimyarnarges.com"
                aria-label="Email"
                className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
              >
                <FaEnvelope size={19} />
              </a>

              <a
                href="https://github.com/narges-karimyar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/narges-karimyar-996b1041b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
              >
                <FaLinkedin size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-6 lg:px-10">
          <hr className="border-white/10" />
          <p className="pt-5 text-center text-xs text-gray-500 sm:text-left">
            © 2026 Narges Karimyar. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
