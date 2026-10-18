import React, { useState } from "react";

export default function ElasticStack({
  items = [],
  itemSize = 76,
  overlap = 28,
  pushForce = 15,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="flex items-center justify-center overflow-visible py-12"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {items.map((item, i) => {
        const active = hoveredIndex === i;
        const Icon = item.Icon;

        let translateX = 0;

        if (hoveredIndex !== null && i !== hoveredIndex) {
          const distance = Math.abs(i - hoveredIndex);
          const movement = Math.min(pushForce * distance, overlap);

          translateX = i < hoveredIndex ? -movement : movement;
        }

        return (
          <div
            key={item.name}
            className="relative shrink-0"
            style={{
              width: itemSize,
              height: itemSize,
              marginLeft: i === 0 ? 0 : -overlap,
              transform: `translateX(${translateX}px) scale(${
                active ? 1.22 : 1
              })`,
              zIndex: active ? 100 : i,
              transition: "transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
            onMouseEnter={() => setHoveredIndex(i)}
          >
            <div
              title={item.name}
              className="flex h-full w-full items-center justify-center rounded-full border-2 border-[#09090B] bg-[#151519] shadow-lg transition-colors duration-300 hover:bg-[#202027]"
              style={{
                boxShadow: active ? `0 0 28px ${item.color}50` : undefined,
              }}
            >
              {Icon && (
                <Icon
                  size={34}
                  style={{ color: item.color }}
                  aria-hidden="true"
                />
              )}
            </div>

            <span
              className={`absolute left-1/2 top-full mt-4 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#151519] px-3 py-1.5 text-xs text-white transition-all duration-300 ${
                active
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
