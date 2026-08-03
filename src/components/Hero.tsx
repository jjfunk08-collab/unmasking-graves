"use client";

import Link from "next/link";
import { useMemo } from "react";

/**
 * DotBurst — an ambient, decorative nod to Biohaven's "dot-burst" brand motif.
 * Concentric rings of dots that fade outward. Purely decorative (aria-hidden).
 */
function DotBurst({ className = "" }: { className?: string }) {
  const dots = useMemo(() => {
    const rings = [
      { r: 60, count: 14 },
      { r: 108, count: 24 },
      { r: 158, count: 34 },
      { r: 210, count: 44 },
      { r: 264, count: 54 },
    ];
    const out: { x: number; y: number; s: number; o: number }[] = [];
    rings.forEach((ring, i) => {
      for (let k = 0; k < ring.count; k++) {
        const a = (k / ring.count) * Math.PI * 2 + i * 0.35;
        out.push({
          x: 300 + Math.cos(a) * ring.r,
          y: 300 + Math.sin(a) * ring.r,
          s: 2.6 - i * 0.25,
          o: 0.5 - i * 0.08,
        });
      }
    });
    return out;
  }, []);

  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={Math.max(0.8, d.s)}
          fill={i % 11 === 0 ? "#4AA3E0" : "#4a6ea0"}
          opacity={Math.max(0.05, d.o)}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Ambient dot-burst, anchored off the right edge */}
      <DotBurst className="pointer-events-none absolute -right-32 -top-24 h-[560px] w-[560px] opacity-70 md:-right-16" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-900/0 via-navy/0 to-navy-900/60" />

      <div className="container-wide relative py-20 md:py-28 lg:py-32">
        <p className="eyebrow animate-rise text-sky">A public health awareness campaign</p>

        <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="relative inline-block">
            <span className="animate-veil-lift italic text-sky">Unmasking</span>
          </span>{" "}
          <span className="animate-rise [animation-delay:180ms]">
            the public health crisis of Graves&rsquo; disease
          </span>
        </h1>

        <p className="mt-7 max-w-2xl animate-rise text-lg leading-relaxed text-white/85 [animation-delay:320ms] md:text-xl">
          Graves&rsquo; disease affects the way nearly 1 in 100 Americans &mdash;
          predominantly women &mdash; feel, function, and are seen by others. By
          shedding light on a misunderstood and underrepresented disease, this
          campaign aims to create awareness that drives meaningful change.
        </p>

        <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:440ms] sm:flex-row sm:items-center">
          <Link
            href="/share"
            className="inline-flex items-center justify-center rounded-full bg-sky px-7 py-3.5 text-base font-semibold text-navy-900 transition-transform hover:scale-[1.02] hover:bg-sky-600"
          >
            Share your story
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Learn about Graves&rsquo;
          </Link>
        </div>

        <p className="mt-14 max-w-xl animate-rise border-l-2 border-sky pl-5 text-lg font-medium leading-snug text-white [animation-delay:560ms]">
          No voice unheard. No person feeling alone.
        </p>
      </div>
    </section>
  );
}
