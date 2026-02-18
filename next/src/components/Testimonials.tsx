export default function Testimonials() {
  return (
    <section className="pt-32 pb-16 bg-primary-900 text-white max-md:pt-16 max-md:pb-10">
      <div className="max-w-[1152px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-[13px] font-medium font-sans not-italic px-3.5 py-1.5 rounded-full mb-4 bg-success-200 text-success-500">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
            Results
          </div>
          <h2 className="font-serif text-[40px] font-bold not-italic leading-[1.15] text-white -tracking-wide max-md:text-[28px]">
            Agencies already seeing results<span className="text-primary-500 font-serif">.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[960px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 bg-[rgba(92,149,80,0.2)] text-success-500 px-3 py-1.5 rounded-full text-[13px] font-medium self-start">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
              12 new qualified leads in 14 days
            </div>
            <p className="font-serif text-2xl max-md:text-xl font-normal not-italic leading-normal text-white/85">
              &ldquo;We installed Radar on a Friday. By Monday, we already knew which companies had visited our portfolio page over the weekend. We closed a deal with one of them within 3 weeks.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[rgba(32,13,242,0.2)] flex items-center justify-center font-bold text-base text-white shrink-0">SB</div>
              <div>
                <div className="font-medium text-[15px] text-white">Sarah B.</div>
                <div className="text-[13px] text-white/45">Growth Lead, Digital Agency &mdash; Brussels</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { number: "3x", label: "More pipeline from existing traffic" },
              { number: "<5 min", label: "Setup time — just one script tag" },
              { number: "60%", label: "Of ghost visitors now identified" },
            ].map((stat) => (
              <div key={stat.number} className="bg-white/6 border border-white/8 rounded-xl p-6">
                <div className="text-[40px] max-md:text-[32px] font-bold text-white -tracking-wider leading-none mb-1">{stat.number}</div>
                <div className="text-sm text-white/45">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
