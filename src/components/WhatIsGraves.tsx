import { Reveal } from "./Reveal";

/** Illustrative thyroid + antibody diagram (decorative/educational). */
function ThyroidDiagram() {
  // Y-shaped antibody marks around the gland.
  const antibodies = [
    { x: 40, y: 60, r: -25 },
    { x: 250, y: 52, r: 20 },
    { x: 28, y: 150, r: 15 },
    { x: 262, y: 158, r: -18 },
    { x: 150, y: 24, r: 0 },
  ];
  return (
    <svg
      viewBox="0 0 300 240"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of antibodies surrounding the thyroid gland"
    >
      {/* windpipe */}
      <rect x="138" y="70" width="24" height="120" rx="12" fill="#dbe3ef" />
      {/* thyroid lobes (butterfly) */}
      <path
        d="M150 96c-14-16-34-22-52-16-20 7-28 30-22 52 5 20 22 34 40 34 20 0 30-16 32-38 1-12 2-24 2-32z"
        fill="#002A61"
      />
      <path
        d="M150 96c14-16 34-22 52-16 20 7 28 30 22 52-5 20-22 34-40 34-20 0-30-16-32-38-1-12-2-24-2-32z"
        fill="#003273"
      />
      <path d="M150 92v52" stroke="#001B3D" strokeWidth="6" strokeLinecap="round" />
      {/* antibodies attacking */}
      {antibodies.map((a, i) => (
        <g key={i} transform={`translate(${a.x} ${a.y}) rotate(${a.r})`}>
          <path
            d="M0 18 L0 6 M0 6 L-7 -4 M0 6 L7 -4"
            stroke="#58BD2B"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}

export function WhatIsGraves() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 bg-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:items-center md:py-24">
        <Reveal>
          <p className="eyebrow">When the immune system attacks</p>
          <h2 id="about-heading" className="mt-3 text-3xl font-medium text-navy md:text-4xl">
            A closer look at an isolating disease
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/85">
            <p>
              Graves&rsquo; disease is an autoimmune disorder in which the immune
              system mistakenly attacks the thyroid, causing it to produce an
              excess of thyroid hormone. It is the most common cause of
              hyperthyroidism in the United States.
              <a href="#references" className="align-super text-xs text-green-700 hover:underline">
                [1]
              </a>
            </p>
            <p>
              Behind the mask of Graves&rsquo; disease, many people feel alone
              &mdash; carrying a chronic illness that drains them physically and
              emotionally, often while looking, to others, entirely well.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto max-w-xs rounded-3xl bg-paper p-8 md:p-10">
            <ThyroidDiagram />
            <p className="mt-6 text-center text-sm text-muted">
              In Graves&rsquo; disease, autoantibodies drive the thyroid to
              overproduce hormone, accelerating the body&rsquo;s functions.
              <a href="#references" className="align-super text-xs text-green-700 hover:underline">
                [2]
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
