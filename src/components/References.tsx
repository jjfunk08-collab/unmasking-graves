import { REFERENCES } from "@/lib/references";

export function References() {
  return (
    <section id="references" aria-labelledby="references-heading" className="scroll-mt-20 bg-white">
      <div className="container-wide py-14 md:py-16">
        <h2 id="references-heading" className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">
          References
        </h2>
        <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
          {REFERENCES.map((r) => (
            <li key={r.n} id={`ref-${r.n}`} className="flex gap-3">
              <span className="shrink-0 font-semibold text-navy">{r.n}.</span>
              <span>
                {r.citation}{" "}
                {r.url ? (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words text-sky-700 underline underline-offset-2 hover:text-sky-600"
                  >
                    {r.url}
                  </a>
                ) : null}
                {r.accessed ? <span> Accessed {r.accessed}.</span> : null}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-muted">
          To learn more, visit{" "}
          <a
            href="https://www.biohaven.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-navy"
          >
            biohaven.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
