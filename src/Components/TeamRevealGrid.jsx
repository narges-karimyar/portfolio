import React, { useCallback, useEffect, useState } from "react";
import images from "../Data/image";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const initials = (name) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();

function Portrait({ member, active }) {
  const accent = member.accent || "#60a5fa";

  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-2xl bg-neutral-100 transition-colors duration-500 dark:bg-neutral-900",
      )}
      style={{
        background: `radial-gradient(circle at 68% 20%, ${accent}55, transparent 40%), #171717`,
      }}
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.imageAlt || member.name}
          loading="lazy"
          draggable={false}
          onError={() => {
            console.error("Image failed to load:", member.image);
          }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-all duration-500",
            active ? "scale-[1.02] grayscale-0" : "scale-100 grayscale",
          )}
          style={{
            objectPosition: member.imagePosition || "center top",
          }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-end overflow-hidden">
          <div
            className="absolute top-[13%] aspect-square h-[36%] rounded-full transition-all duration-500"
            style={{ backgroundColor: accent }}
          />
          <div
            className="absolute -bottom-[12%] h-[80%] w-[82%] rounded-t-[48%]"
            style={{ backgroundColor: accent }}
          />
          <span className="relative z-10 mb-[18%] text-3xl font-bold text-white">
            {initials(member.name)}
          </span>
        </div>
      )}

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500",
          active ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

export function TeamRevealGrid({
  eyebrow = "",
  title = "Meet the projects",
  description = "A collection of digital experiences built with creativity and code.",
  members = [],
  activeMemberId,
  defaultActiveMemberId,
  onActiveMemberChange,
  autoPlay = true,
  rotationInterval = 2800,
  className = "",
  ...props
}) {
  const firstId = members[0]?.id ?? null;

  const [internalActiveId, setInternalActiveId] = useState(
    defaultActiveMemberId === undefined ? firstId : defaultActiveMemberId,
  );

  const [interacting, setInteracting] = useState(false);

  const controlled = activeMemberId !== undefined;
  const requestedId = controlled ? activeMemberId : internalActiveId;

  const activeId = members.some((member) => member.id === requestedId)
    ? requestedId
    : firstId;

  const selectMember = useCallback(
    (id) => {
      if (!controlled) {
        setInternalActiveId(id);
      }

      onActiveMemberChange?.(id);
    },
    [controlled, onActiveMemberChange],
  );

  useEffect(() => {
    if (!autoPlay || interacting || members.length < 2) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(
      () => {
        const index = members.findIndex((member) => member.id === activeId);
        const next = (index + 1) % members.length;

        selectMember(members[next].id);
      },
      Math.max(rotationInterval, 1200),
    );

    return () => window.clearInterval(timer);
  }, [
    autoPlay,
    interacting,
    members,
    activeId,
    rotationInterval,
    selectMember,
  ]);

  return (
    <section
      className={`relative min-h-[620px] w-full overflow-hidden bg-white px-4 py-12 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-7 ${className}`}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 0.7px, transparent 0.8px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="relative inline-block">
              {title}

              <svg
                aria-hidden="true"
                className="absolute -bottom-3 left-0 h-3 w-full text-[#60a5fa]"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 12 Q35 2 95 10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M5 15 Q40 18 98 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-x-5 gap-y-6 lg:grid-cols-2">
          {members.map((member) => {
            const active = member.id === activeId;
            const detailsId = `project-${member.id}-details`;

            return (
              <li key={member.id} className="min-w-0">
                <button
                  type="button"
                  aria-expanded={active}
                  aria-controls={detailsId}
                  onClick={() => selectMember(member.id)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") {
                      setInteracting(true);
                      selectMember(member.id);
                    }
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType === "mouse") {
                      setInteracting(false);
                    }
                  }}
                  onFocus={() => {
                    setInteracting(true);
                    selectMember(member.id);
                  }}
                  onBlur={() => setInteracting(false)}
                  className="group block w-full rounded-[1.35rem] text-left outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-neutral-950"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-[1.35rem] border bg-white p-1.5 shadow-lg transition-all duration-500 dark:bg-neutral-900",
                      active
                        ? "-translate-y-1 shadow-2xl"
                        : "border-black/10 dark:border-white/10",
                    )}
                    style={{
                      borderColor: active
                        ? `${member.accent || "#60a5fa"}99`
                        : undefined,
                      boxShadow: active
                        ? `0 22px 48px -28px ${member.accent || "#60a5fa"}99`
                        : undefined,
                    }}
                  >
                    {/* Increased card image height */}
                    <div
                      className={cn(
                        "h-64 transition-all duration-500 min-[560px]:h-72",
                        active && "h-80 min-[560px]:h-96",
                      )}
                    >
                      <Portrait member={member} active={active} />
                    </div>

                    <div
                      id={detailsId}
                      className={cn(
                        "absolute inset-x-5 bottom-4 z-10 transition-all duration-500",
                        active
                          ? "translate-y-0 opacity-100"
                          : "translate-y-3 opacity-0",
                      )}
                    >
                      <p className="line-clamp-3 text-[11px] leading-relaxed text-white/80 min-[560px]:text-xs">
                        {member.expertise}
                      </p>
                    </div>
                  </div>

                  <div className="px-1.5 pt-3 text-center">
                    <h3 className="truncate text-sm font-semibold min-[560px]:text-base">
                      {member.name}
                    </h3>

                    <p
                      className="mt-1 truncate text-xs text-neutral-500 dark:text-neutral-400"
                      style={{
                        color: active ? member.accent || "#60a5fa" : undefined,
                      }}
                    >
                      {member.role}
                    </p>

                    {member.link && (
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-2 inline-block text-xs text-blue-500 opacity-0 transition-opacity group-hover:opacity-100 hover:text-blue-400"
                      >
                        View repository ↗
                      </a>
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default TeamRevealGrid;
