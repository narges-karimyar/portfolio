"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function hexToRgb(hex) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return [96, 165, 250];

  ctx.fillStyle = hex;
  const value = ctx.fillStyle.replace("#", "");

  if (!/^[0-9a-fA-F]{6}$/.test(value)) {
    return [96, 165, 250];
  }

  return [
    parseInt(value.slice(0, 2), 16),
    parseInt(value.slice(2, 4), 16),
    parseInt(value.slice(4, 6), 16),
  ];
}

function lerpRgb(a, b, t) {
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)}, ${Math.round(
    a[1] + (b[1] - a[1]) * t,
  )}, ${Math.round(a[2] + (b[2] - a[2]) * t)})`;
}

function StarfieldCanvas({
  particleCount,
  interactionRadius,
  baseRgb,
  activeRgb,
  springK,
  damping,
  reduceMotion,
}) {
  const canvasRef = React.useRef(null);
  const mouseRef = React.useRef({
    x: -9999,
    y: -9999,
    active: false,
  });
  const starsRef = React.useRef([]);
  const rafRef = React.useRef(0);
  const influenceRef = React.useRef(0);

  function seedStars(W, H) {
    return Array.from({ length: particleCount }, () => {
      const ox = Math.random() * W;
      const oy = Math.random() * H;

      return {
        ox,
        oy,
        x: ox,
        y: oy,
        vx: 0,
        vy: 0,
        r: 0.8 + Math.random() * 1.4,
        alpha: 0.12 + Math.random() * 0.55,
        phase: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI * 2,
      };
    });
  }

  React.useEffect(() => {
    const update = (cx, cy) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();

      mouseRef.current = {
        x: cx - rect.left,
        y: cy - rect.top,
        active: true,
      };
    };

    const onMove = (event) => update(event.clientX, event.clientY);

    const onTouch = (event) => {
      if (event.touches[0]) {
        update(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    const onLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchend", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchend", onLeave);
    };
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let destroyed = false;
    let t0 = performance.now();

    const MAX_STRETCH = 18;
    const REPULSE_STR = 1.8;
    const visibility = { current: true };

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      W = canvas.offsetWidth;
      H = canvas.offsetHeight;

      canvas.width = W * dpr;
      canvas.height = H * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = seedStars(W, H);
    }

    function startAnimation() {
      if (
        destroyed ||
        document.hidden ||
        !visibility.current ||
        rafRef.current
      ) {
        return;
      }

      t0 = performance.now();
      rafRef.current = requestAnimationFrame(draw);
    }

    function draw(now) {
      rafRef.current = 0;

      if (destroyed || document.hidden || !visibility.current) return;

      const elapsed = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);

      const mouse = mouseRef.current;
      const active = mouse.active && !reduceMotion;

      influenceRef.current = active
        ? Math.min(1, influenceRef.current + 0.06)
        : Math.max(0, influenceRef.current - 0.03);

      const influence = influenceRef.current;
      const radiusSquared = interactionRadius ** 2;

      for (const star of starsRef.current) {
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const distanceSquared = dx * dx + dy * dy;
        const distance = Math.sqrt(distanceSquared);

        let activation = 0;

        if (influence > 0.01 && distanceSquared < radiusSquared) {
          activation = (1 - distance / interactionRadius) ** 2 * influence;
        }

        if (activation > 0.01 && distance > 0.1) {
          star.vx += (dx / distance) * REPULSE_STR * activation;
          star.vy += (dy / distance) * REPULSE_STR * activation;
        }

        star.vx += (star.ox - star.x) * springK;
        star.vy += (star.oy - star.y) * springK;

        star.vx *= damping;
        star.vy *= damping;

        star.x += star.vx;
        star.y += star.vy;

        const twinkle = reduceMotion
          ? 0
          : Math.sin(elapsed * 1.4 + star.phase) * 0.5 + 0.5;

        const baseAlpha = star.alpha * (0.55 + twinkle * 0.45);
        const alpha = Math.min(1, baseAlpha + activation * (1 - baseAlpha));

        const stretchH = star.r * 2 + activation * MAX_STRETCH;
        const stretchW = star.r * 2;

        const velocity = Math.sqrt(star.vx ** 2 + star.vy ** 2);

        const rotation =
          velocity > 0.3
            ? Math.atan2(star.vy, star.vx) + Math.PI / 2
            : star.rot;

        const color = lerpRgb(baseRgb, activeRgb, activation);

        ctx.save();
        ctx.translate(star.x, star.y);
        ctx.rotate(rotation);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;

        if (activation > 0.4) {
          ctx.shadowBlur = 6 + activation * 10;
          ctx.shadowColor = color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillRect(-stretchW / 2, -stretchH / 2, stretchW, stretchH);
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      rafRef.current = requestAnimationFrame(draw);
    }

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visibility.current = entry.isIntersecting;

        if (visibility.current) {
          startAnimation();
        } else {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = 0;
        }
      },
      { threshold: 0.01 },
    );

    function onVisibilityChange() {
      if (!document.hidden) {
        startAnimation();
      } else {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    }

    const resizeObserver = new ResizeObserver(resize);

    intersectionObserver.observe(canvas);
    resizeObserver.observe(canvas);
    document.addEventListener("visibilitychange", onVisibilityChange);

    resize();
    startAnimation();

    return () => {
      destroyed = true;
      cancelAnimationFrame(rafRef.current);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [
    particleCount,
    interactionRadius,
    baseRgb,
    activeRgb,
    springK,
    damping,
    reduceMotion,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

const UP = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const EASE = [0.22, 1, 0.36, 1];

export function InteractiveStarfieldHero({
  particleCount = 300,
  interactionRadius = 140,
  particleColor = "#60a5fa",
  activeColor = "#ffffff",
  speed = 0.5,
  className = "",
  children,
  title = "Ship faster.\nBuild better.",
  subtitle = "A motion-native component library for React — animated, accessible, and production-ready.",
  secondaryCTA = {
    label: "View Projects",
    href: "#projects",
  },
  primaryCTA = {
    label: "Download My CV",
    href: "/Narges-Karimyar-CV.pdf",
  },
}) {
  const reduceMotion = useReducedMotion() === true;

  const [baseRgb, setBaseRgb] = React.useState([96, 165, 250]);
  const [activeRgb, setActiveRgb] = React.useState([255, 255, 255]);

  React.useEffect(() => {
    setBaseRgb(hexToRgb(particleColor));
    setActiveRgb(hexToRgb(activeColor));
  }, [particleColor, activeColor]);

  const springK = 0.022 + speed * 0.068;
  const damping = 0.9 - speed * 0.13;
  const titleLines = (title ?? "").split("\n");

  return (
    <section
      className={cn(
        "relative isolate flex min-h-screen items-center overflow-hidden rounded-none bg-zinc-950",
        className,
      )}
    >
      <StarfieldCanvas
        particleCount={particleCount}
        interactionRadius={interactionRadius}
        baseRgb={baseRgb}
        activeRgb={activeRgb}
        springK={springK}
        damping={damping}
        reduceMotion={reduceMotion}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(9,9,11,0.92) 100%)",
        }}
      />

      <div className="relative z-10 w-full px-8 py-20 sm:px-14 lg:px-20">
        {children ? (
          children
        ) : (
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: { staggerChildren: 0.11 },
              },
            }}
          >
            <motion.div
              variants={UP}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2 rounded-none border border-white/10 bg-white/[0.06] px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="size-1.5 animate-pulse rounded-none bg-blue-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Creative Frontend Developer
              </span>
            </motion.div>

            <motion.h1
              variants={UP}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-balance text-5xl font-bold tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl"
            >
              {titleLines.map((line, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    line
                  ) : (
                    <span className="text-white/45">{line}</span>
                  )}
                  {index < titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.h1>

            {subtitle && (
              <motion.p
                variants={UP}
                transition={{ duration: 0.6, ease: EASE }}
                className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/40"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              variants={UP}
              transition={{ duration: 0.55, ease: EASE }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {primaryCTA && (
                <a
                  href={primaryCTA.href ?? "#"}
                  download={
                    primaryCTA.href?.endsWith(".pdf")
                      ? "Narges-Karimyar-CV.pdf"
                      : undefined
                  }
                  onClick={primaryCTA.onClick}
                  className="group inline-flex items-center gap-2 rounded-none bg-white px-6 py-2.5 text-sm font-semibold text-zinc-900 shadow-[0_0_20px_rgba(255,255,255,.12)] transition-all duration-200 hover:gap-3 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,.22)]"
                >
                  {primaryCTA.label}
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              )}

              {secondaryCTA && (
                <a
                  href={secondaryCTA.href ?? "#"}
                  onClick={secondaryCTA.onClick}
                  className="inline-flex items-center gap-2 rounded-none border border-white/10 bg-white/[0.05] px-6 py-2.5 text-sm font-medium text-white/65 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                >
                  {secondaryCTA.label}
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default InteractiveStarfieldHero;
