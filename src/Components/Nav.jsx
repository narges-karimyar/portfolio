import { useState } from "react";
import { Menu, X } from "lucide-react";
import InteractiveStarfieldHero from "./InteractiveStarfieldHero";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section id="home" className="relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 z-50 w-full px-8 py-6 text-white md:px-14">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold">
            N.KARIMYAR
          </a>

          {/* Desktop navigation */}
          <div className="hidden gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans transition-colors hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger button: mobile and tablet */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-2 transition-colors hover:text-blue-400 md:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile and tablet dropdown */}
        {menuOpen && (
          <div className="absolute left-0 top-full w-full border-t border-white/10 bg-black/90 px-8 py-5 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans transition-colors hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero background and content */}
      <InteractiveStarfieldHero
        title={"Hello, I'm Narges.\nI build for the web."}
        subtitle="Creative frontend developer building beautiful digital experiences."
        particleColor="#60a5fa"
        activeColor="#ffffff"
        particleCount={1000}
        interactionRadius={280}
        speed={1.8}
        primaryCTA={{
          label: "Download My CV",
          href: "/Narges-Karimyar-CV.pdf",
        }}
        secondaryCTA={{
          label: "View Projects",
          href: "#projects",
        }}
      />
    </section>
  );
}
