export default function Hero() {
  return (
    <>
      <section className="pt-40 pb-24 md:pb-16 text-center bg-secondary-950 text-white relative overflow-hidden">
        <div className="max-w-[1152px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/8 text-white/60 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/10">
            <span className="w-2 h-2 bg-success-500 rounded-full inline-block animate-[pulse_2s_infinite]" />
            Built for agencies. Powered by Sortlist.
          </div>
          <h1 className="font-serif text-[clamp(38px,5.5vw,64px)] font-bold not-italic leading-none text-white max-w-[800px] mx-auto mb-6 tracking-tight max-md:text-[clamp(30px,8vw,38px)]">
            Turn ghost visitors into your{" "}
            <em className="italic text-white">next discovery call</em>
            <span className="text-primary-500 font-serif">.</span>
          </h1>
          <p className="text-[17px] text-secondary-500 max-w-[620px] mx-auto mb-10 leading-relaxed max-md:text-[15px]">
            Identify high-intent companies on your website and across the
            Sortlist marketplace, find the right decision-makers, and start the
            conversation&mdash;all in one place.
          </p>
          <div className="flex items-center justify-center gap-4 mb-0 flex-wrap">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-primary-500 text-white font-sans text-[15px] font-medium px-5 py-3.5 min-h-[52px] rounded-[10px] border-none cursor-pointer no-underline transition-all duration-200 shadow-[0_1px_2px_0_rgba(32,13,242,.18),0_0_8px_0_rgba(32,13,242,.12)] hover:bg-primary-600 hover:-translate-y-px"
            >
              Stop losing leads &rarr;
            </a>
          </div>
          <p className="text-sm text-white/40 mt-5">
            Start revealing your ghost traffic today. No credit card required.
          </p>
          <a
            href="#problem"
            className="inline-block mt-6 text-[13px] text-white/35 no-underline transition-colors duration-200 hover:text-primary-500"
          >
            See it in action &darr;
          </a>
        </div>
      </section>

      {/* Wave divider */}
      <div className="bg-secondary-900 h-20 relative overflow-hidden max-md:h-12">
        <div className="absolute bottom-0 left-0 right-0 h-20 max-md:h-12 bg-white rounded-t-[50%_100%]" />
      </div>
    </>
  );
}
