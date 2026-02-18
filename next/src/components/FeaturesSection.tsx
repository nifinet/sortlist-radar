/* eslint-disable @next/next/no-img-element */
export default function FeaturesSection() {
  return (
    <section className="pt-32 pb-16 bg-secondary-100 text-secondary-950 max-md:pt-16 max-md:pb-10" id="how-it-works">
      <div className="max-w-[1152px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[40px] font-bold not-italic leading-[1.15] mb-4 -tracking-wide text-secondary-950 max-md:text-[28px]">
            Your agency&apos;s new command center<span className="text-primary-500 font-serif">.</span>
          </h2>
          <p className="text-[17px] text-secondary-500 max-w-[500px] mx-auto">Everything Radar gives you &mdash; from first visit to first call.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Live visitor feed */}
          <div className="bg-white border border-secondary-300 rounded-2xl p-9 max-xs:p-6 transition-all duration-300 flex flex-col hover:border-primary-500 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="bg-secondary-100 border border-secondary-300 rounded-[10px] p-3.5 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold text-secondary-500 uppercase tracking-wide">Visitors</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-danger-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-danger-500 animate-[pulse_2s_infinite]" />Live
                </span>
              </div>
              {/* Feed lines */}
              <div className="flex items-center gap-2 py-1.5 px-2 rounded-md text-[11px] mb-1 bg-white border border-secondary-300 text-secondary-800">
                <img className="w-[18px] h-[18px] rounded object-contain shrink-0 bg-white p-0.5 border border-secondary-300" src="https://cdn.simpleicons.org/spotify/1DB954" alt="Spotify" />
                <span className="font-semibold shrink-0 max-xs:shrink max-xs:min-w-0 max-xs:overflow-hidden max-xs:text-ellipsis max-xs:whitespace-nowrap">Spotify</span>
                <span className="text-secondary-400 flex-1 whitespace-nowrap overflow-hidden text-ellipsis">/services</span>
                <span className="text-secondary-400 text-[10px] shrink-0 max-xs:hidden">3 min</span>
                <span className="text-[9px] font-semibold py-0.5 px-1.5 rounded-sm shrink-0 bg-success-200 text-success-500 max-xs:hidden">Identified</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-2 rounded-md text-[11px] mb-1 bg-white border border-secondary-300 text-secondary-800">
                <img className="w-[18px] h-[18px] rounded object-contain shrink-0 bg-white p-0.5 border border-secondary-300" src="https://cdn.simpleicons.org/bmw/0066B1" alt="BMW" />
                <span className="font-semibold shrink-0 max-xs:shrink max-xs:min-w-0 max-xs:overflow-hidden max-xs:text-ellipsis max-xs:whitespace-nowrap">BMW Group</span>
                <span className="text-secondary-400 flex-1 whitespace-nowrap overflow-hidden text-ellipsis">/case-studies</span>
                <span className="text-secondary-400 text-[10px] shrink-0 max-xs:hidden">8 min</span>
                <span className="text-[9px] font-semibold py-0.5 px-1.5 rounded-sm shrink-0 bg-success-200 text-success-500 max-xs:hidden">Identified</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-2 rounded-md text-[11px] bg-secondary-200 text-secondary-400">
                <div className="w-[18px] h-[18px] rounded bg-secondary-300 shrink-0" />
                <span className="font-semibold shrink-0 max-xs:shrink max-xs:min-w-0 max-xs:overflow-hidden max-xs:text-ellipsis max-xs:whitespace-nowrap">Unknown visitor</span>
                <span className="text-secondary-400 flex-1 whitespace-nowrap overflow-hidden text-ellipsis">/pricing</span>
                <span className="text-secondary-400 text-[10px] shrink-0 max-xs:hidden">12 min</span>
                <span className="text-[9px] font-semibold py-0.5 px-1.5 rounded-sm shrink-0 bg-secondary-300 text-secondary-500 max-xs:hidden">Anonymous</span>
              </div>
            </div>
            <h3 className="text-[22px] font-bold mb-3 -tracking-wide text-secondary-950">Live visitor feed</h3>
            <p className="text-[15px] text-secondary-500 leading-relaxed mt-auto">See every company on your site as it happens. Company name, industry, pages viewed, time spent. Filter by size, location, or behaviour.</p>
          </div>

          {/* Feature 2: Verified contacts */}
          <div className="bg-white border border-secondary-300 rounded-2xl p-9 max-xs:p-6 transition-all duration-300 flex flex-col hover:border-primary-500 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="bg-secondary-100 border border-secondary-300 rounded-[10px] p-3.5 mb-6">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-500 text-[11px] font-bold flex items-center justify-center shrink-0">ML</div>
                  <div className="flex flex-col gap-px">
                    <span className="text-[13px] font-semibold text-secondary-800">Maria L.</span>
                    <span className="text-[11px] text-secondary-400">Marketing Manager, Spotify</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <div className="flex items-center gap-2 py-1.5 px-2.5 bg-white border border-secondary-300 rounded-md text-[11px] text-secondary-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-secondary-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <span>m&bull;&bull;&bull;@spotify.com</span>
                    <span className="ml-auto text-[10px] font-medium text-success-500 flex items-center gap-0.5 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-2.5 bg-white border border-secondary-300 rounded-md text-[11px] text-secondary-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-secondary-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    <span>linkedin.com/in/&bull;&bull;&bull;</span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-2.5 bg-white border border-secondary-300 rounded-md text-[11px] text-secondary-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-secondary-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>+46 &bull;&bull;&bull;&bull;&bull;&bull; 42</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-[22px] font-bold mb-3 -tracking-wide text-secondary-950">Verified contacts</h3>
            <p className="text-[15px] text-secondary-500 leading-relaxed mt-auto">Every company comes with the right person. Verified email, phone, LinkedIn &mdash; ready to reach out. No manual research needed.</p>
          </div>

          {/* Feature 3: Push to CRM */}
          <div className="bg-white border border-secondary-300 rounded-2xl p-9 max-xs:p-6 transition-all duration-300 flex flex-col hover:border-primary-500 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="bg-secondary-100 border border-secondary-300 rounded-[10px] p-3.5 mb-6">
              {[
                { logo: "https://cdn.simpleicons.org/hubspot/FF7A59", name: "HubSpot", status: "Synced" },
                { logo: "https://www.google.com/s2/favicons?domain=overloop.com&sz=64", name: "Overloop", status: "Campaign launched" },
                { logo: "https://www.google.com/s2/favicons?domain=slack.com&sz=64", name: "Slack", status: "Team notified" },
              ].map((integ) => (
                <div key={integ.name} className="flex items-center gap-2 py-1.5 px-2 rounded-md text-[11px] mb-1 bg-white border border-secondary-300 text-secondary-800">
                  <img className="w-[18px] h-[18px] rounded object-contain shrink-0" src={integ.logo} alt={integ.name} />
                  <span className="font-semibold flex-1">{integ.name}</span>
                  <span className="text-[10px] font-semibold text-success-500 shrink-0 flex items-center gap-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    {integ.status}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 text-[10px] text-secondary-400 mt-2">
                <span className="shrink-0">Also:</span>
                <div className="flex items-center gap-1.5">
                  {["salesforce.com", "pipedrive.com", "zapier.com"].map((d) => (
                    <img key={d} src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} alt={d.split(".")[0]} className="w-4 h-4 rounded-sm opacity-50 grayscale" />
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-[22px] font-bold mb-3 -tracking-wide text-secondary-950">Push to CRM &amp; campaigns</h3>
            <p className="text-[15px] text-secondary-500 leading-relaxed mt-auto">Leads push to your CRM with full context &mdash; then straight into an Overloop campaign. HubSpot, Pipedrive, Salesforce, Slack. Zero copy-paste.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
