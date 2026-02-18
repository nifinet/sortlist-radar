export default function FinalCTA() {
  return (
    <section className="bg-primary-900 pt-32 pb-16 text-center max-md:pt-16 max-md:pb-10">
      <div className="mx-auto max-w-[1152px] px-6">
        <h2 className="font-serif text-[40px] font-bold leading-tight text-white max-md:text-[28px]">
          Stop losing clients you never knew you had
          <span className="text-primary-500">.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-lg text-white/70 max-md:text-base">
          Your next client is on your website right now. Start identifying them today.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-[10px] bg-white px-6 py-3.5 text-[15px] font-semibold text-secondary-950 transition-colors hover:bg-white/90"
        >
          Start your free trial &rarr;
        </a>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-white/50">
          <span>No credit card required</span>
          <span>&bull;</span>
          <span>14-day free trial</span>
          <span>&bull;</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
