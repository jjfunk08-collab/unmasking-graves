"use client";

import { useState } from "react";
import { SYMPTOM_GROUPS } from "@/lib/symptoms";
import { Reveal } from "./Reveal";

export function Symptoms() {
  const [active, setActive] = useState(SYMPTOM_GROUPS[0].id);
  const current = SYMPTOM_GROUPS.find((g) => g.id === active) ?? SYMPTOM_GROUPS[0];

  return (
    <section id="symptoms" aria-labelledby="symptoms-heading" className="scroll-mt-20 bg-navy text-white">
      <div className="container-wide py-16 md:py-24">
        <Reveal>
          <p className="eyebrow text-green">Graves&rsquo; disease symptoms</p>
          <h2 id="symptoms-heading" className="mt-3 max-w-3xl text-3xl font-medium md:text-4xl">
            When the thyroid speeds everything up
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            An excess of thyroid hormone accelerates the body&rsquo;s functions,
            producing symptoms that can reach nearly every system. Select an
            area to see what people may experience.
            <a href="#references" className="align-super text-xs text-green hover:underline">
              [2]
            </a>
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Symptom areas"
            aria-orientation="vertical"
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {SYMPTOM_GROUPS.map((g) => {
              const selected = g.id === active;
              return (
                <button
                  key={g.id}
                  role="tab"
                  id={`tab-${g.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${g.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(g.id)}
                  className={`shrink-0 rounded-xl px-5 py-4 text-left text-base font-semibold transition-colors lg:shrink ${
                    selected
                      ? "bg-green text-navy-900"
                      : "bg-white/5 text-white/85 hover:bg-white/10"
                  }`}
                >
                  {g.label}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="rounded-2xl bg-white/5 p-7 md:p-10"
          >
            <p className="text-lg leading-relaxed text-white/85">{current.blurb}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {current.symptoms.map((s) => (
                <li key={s} className="flex items-start gap-3 text-white">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                  />
                  <span className="text-base leading-snug">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-sm text-white/55">
          This list is educational and not a diagnostic tool. If these symptoms
          feel familiar, talk with a healthcare provider.
        </p>
      </div>
    </section>
  );
}
