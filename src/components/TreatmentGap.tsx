import { Reveal } from "./Reveal";

const CURRENT_OPTIONS = [
  {
    name: "Beta-blockers",
    note: "Ease symptoms such as a racing heartbeat, but do not treat the disease itself.",
  },
  {
    name: "Anti-thyroid medications",
    note: "Reduce hormone production; often needed long term and not a cure.",
  },
  {
    name: "Radioactive iodine",
    note: "Damages thyroid tissue to lower hormone output, frequently leading to lifelong hypothyroidism.",
  },
  {
    name: "Thyroid surgery",
    note: "Complete removal of the gland, requiring lifelong hormone replacement.",
  },
];

export function TreatmentGap() {
  return (
    <section id="treatment" aria-labelledby="treatment-heading" className="scroll-mt-20 bg-navy-900 text-white">
      <div className="container-wide py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal>
            <p className="eyebrow text-green">Filling the treatment gap</p>
            <h2 id="treatment-heading" className="mt-3 text-3xl font-medium md:text-4xl">
              An urgent need for better medicines
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              At the core of the Graves&rsquo; disease crisis is a treatment
              landscape that has seen no new class of medicine in roughly
            </p>
            <p className="mt-4 font-display text-7xl font-medium leading-none text-green md:text-8xl">
              75 years.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              There is no cure. Today&rsquo;s therapies focus on inhibiting
              thyroid hormone production or removing the gland &mdash; and often
              carry undesirable, lifelong side effects.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60">
              Currently available approaches
            </h3>
            <ul className="mt-5 divide-y divide-white/10">
              {CURRENT_OPTIONS.map((o) => (
                <li key={o.name} className="py-4">
                  <p className="text-lg font-semibold text-white">{o.name}</p>
                  <p className="mt-1 text-base leading-relaxed text-white/70">{o.note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-base leading-relaxed text-white/85">
                Researchers are exploring new approaches that target the
                underlying autoimmune biology of Graves&rsquo; disease &mdash;
                aiming to address the autoantibodies that drive it, rather than
                only managing symptoms. These are areas of ongoing scientific
                investigation.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
