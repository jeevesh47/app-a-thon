import { useMemo } from "react";

const GLYPHS = ["{ }", "</>", "[]", "()", "=>", "!=", "null", "try", "catch", "0x1F", "&&", "??"];

export function CodeParticles() {
  const items = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        glyph: GLYPHS[i % GLYPHS.length],
        left: (i * 137) % 100,
        top: (i * 61) % 100,
        delay: (i % 7) * 0.9,
        duration: 6 + (i % 5) * 1.7,
        size: 11 + (i % 4) * 4,
        opacity: 0.12 + (i % 4) * 0.06,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.id}
          className="floaty absolute font-mono text-primary"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  );
}
