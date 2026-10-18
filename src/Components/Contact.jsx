import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section className="bg-[#09090B] ">
        <hr className="my-0 h-px border-0 bg-white/10" />
        <div className="flex flex-col gap-3 p-10 justify-between lg:flex-row">
          {/* description */}
          <div>
            <a href="#home" className="text-xl font-bold text-white">
              N.KARIMYAR
            </a>
            <h3 className=" font-sans text-white leading-snug ">
              Building thoughtful digital experiences with{" "}
              <span className="text-blue-400">code and creativity.</span>
            </h3>
          </div>
          {/* services */}
          <div>
            <p className="text-sm font-bold text-white">Services</p>

            <span className="text-white">Front-end Development</span>
          </div>
          {/* icons */}
          <div>
            <p className="text-sm font-bold text-white">FOLLOW ME</p>
            <div className="flex items-center gap-4">
              {/* Email */}
              <a href="mailto:karimyarnarges.com" aria-label="Email">
                <FaEnvelope size={24} className="text-white" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/narges-karimyar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white"
              >
                <FaGithub size={24} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/narges-karimyar-996b1041b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
