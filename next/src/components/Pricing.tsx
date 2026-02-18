const features = [
  "Visitor identification",
  "Marketplace search signals",
  "Verified decision-maker contacts",
  "Real-time dashboard",
  "CRM & Overloop campaign push",
  "Setup in 2 minutes",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-secondary-100 pt-32 pb-16 max-md:pt-16 max-md:pb-10">
      <div className="mx-auto max-w-[1152px] px-6">
        <div className="mx-auto max-w-[600px] rounded-2xl border border-secondary-300 bg-white p-14 px-12 text-center shadow-sm max-md:p-8 max-md:px-6" style={{ borderTop: "3px solid var(--color-primary-500)" }}>
          <h2 className="font-serif text-[32px] font-bold text-secondary-950 max-md:text-2xl">
            Get started with Radar
          </h2>
          <p className="mt-3 text-secondary-500">
            Try it free or book a personalized demo. Flexible plans tailored to your agency&nbsp;&mdash; no hidden fees.
          </p>

          <ul className="mx-auto mt-8 grid max-w-[440px] grid-cols-2 gap-x-6 gap-y-3 text-left text-[15px] text-secondary-700 max-sm:grid-cols-1">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/10">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.5L5 9l4.5-6" stroke="var(--color-primary-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-center gap-3 max-sm:flex-col">
            <a
              href="#"
              className="inline-flex min-h-[52px] items-center justify-center rounded-[10px] bg-primary-500 px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-500/90"
            >
              Start free trial &rarr;
            </a>
            <a
              href="#"
              className="inline-flex min-h-[52px] items-center justify-center rounded-[10px] border border-secondary-300 bg-white px-5 py-3.5 text-[15px] font-semibold text-secondary-700 transition-colors hover:bg-secondary-100"
            >
              Request a demo
            </a>
          </div>

          <p className="mt-5 text-sm text-secondary-500">
            No credit card required &bull; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
