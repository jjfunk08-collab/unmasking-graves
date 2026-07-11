export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-wide py-14 md:py-16">
          <h1 className="text-3xl font-medium md:text-4xl">{title}</h1>
          {updated && (
            <p className="mt-3 text-sm text-white/70">Last updated: {updated}</p>
          )}
        </div>
      </section>
      <section className="bg-white">
        <div className="container-wide max-w-3xl py-12 md:py-16">
          <div className="prose-legal space-y-6 text-base leading-relaxed text-ink/85 [&_a]:text-green-700 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-navy [&_li]:ml-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
