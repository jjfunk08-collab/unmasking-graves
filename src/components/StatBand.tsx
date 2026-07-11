import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

type Stat = {
  lead: React.ReactNode;
  label: string;
  ref?: number;
};

const STATS: Stat[] = [
  {
    lead: (
      <>
        1<span className="text-3xl font-normal text-muted md:text-4xl"> in </span>
        <CountUp value={100} suffix="" />
      </>
    ),
    label: "Americans live with Graves' disease — nearly 1 in 100",
    ref: 2,
  },
  {
    lead: (
      <>
        <CountUp value={7} />
        <span className="text-3xl font-normal text-muted md:text-4xl">–8&times;</span>
      </>
    ),
    label: "more likely to affect women than men",
  },
  {
    lead: (
      <>
        1<span className="text-3xl font-normal text-muted md:text-4xl"> in </span>
        <CountUp value={200} />
      </>
    ),
    label: "people worldwide are affected",
    ref: 3,
  },
  {
    lead: (
      <>
        <CountUp value={75} />
      </>
    ),
    label: "years with no new class of medicine for the disease",
  },
];

export function StatBand() {
  return (
    <section aria-labelledby="stats-heading" className="bg-paper">
      <div className="container-wide py-16 md:py-20">
        <Reveal>
          <p className="eyebrow">By the numbers</p>
          <h2 id="stats-heading" className="mt-3 max-w-3xl text-2xl font-medium text-navy md:text-3xl">
            A disease that is far more common &mdash; and far more overlooked &mdash;
            than most people realize.
          </h2>
        </Reveal>

        <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 90} as="div">
              <dt className="font-display text-6xl font-medium leading-none text-navy md:text-7xl">
                {s.lead}
              </dt>
              <dd className="mt-4 text-base leading-relaxed text-ink/80">
                {s.label}
                {s.ref ? (
                  <a
                    href="#references"
                    className="ml-0.5 align-super text-xs text-green-700 hover:underline"
                    aria-label={`See reference ${s.ref}`}
                  >
                    [{s.ref}]
                  </a>
                ) : null}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
