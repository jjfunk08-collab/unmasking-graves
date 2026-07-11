import { Reveal } from "./Reveal";

export function Impact() {
  return (
    <section id="impact" aria-labelledby="impact-heading" className="scroll-mt-20 bg-white">
      <div className="container-wide py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Graves&rsquo; disease impact</p>
          <h2 id="impact-heading" className="mt-3 max-w-3xl text-3xl font-medium text-navy md:text-4xl">
            The weight reaches beyond the thyroid
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal as="div" className="rounded-3xl bg-paper p-8">
            <p className="font-display text-5xl font-medium text-navy">7&ndash;8&times;</p>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              The majority of those affected are women, who are seven to eight
              times more likely than men to live with Graves&rsquo; disease.
            </p>
          </Reveal>

          <Reveal as="div" delay={100} className="rounded-3xl bg-paper p-8">
            <p className="font-display text-2xl font-medium leading-snug text-navy">
              A family connection
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              People with a family history of a thyroid or autoimmune disease
              have a higher likelihood of developing Graves&rsquo; disease.
              <a href="#references" className="align-super text-xs text-green-700 hover:underline">
                [4]
              </a>
            </p>
          </Reveal>

          <Reveal as="div" delay={200} className="rounded-3xl bg-navy p-8 text-white">
            <p className="font-display text-2xl font-medium leading-snug">
              A mental-health burden
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Graves&rsquo; disease is linked to a higher risk of depression,
              bipolar disorder, anxiety disorder, and sleep disorder.
              <a href="#references" className="align-super text-xs text-green hover:underline">
                [5]
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal>
          <blockquote className="mt-14 max-w-3xl border-l-2 border-green pl-6">
            <p className="font-display text-2xl italic leading-snug text-navy md:text-3xl">
              &ldquo;Behind the mask, many people feel alone &mdash; burdened by a
              chronic illness that drains them physically and emotionally.&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
