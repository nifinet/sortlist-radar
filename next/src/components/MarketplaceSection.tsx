"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useCallback } from "react";

function typewrite(el: HTMLElement, text: string, speed: number, cb?: () => void) {
  let i = 0;
  el.textContent = "";
  el.classList.add("is-typing");
  function tick() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(tick, speed);
    } else {
      el.classList.remove("is-typing");
      el.classList.add("is-done");
      if (cb) cb();
    }
  }
  tick();
}

export default function MarketplaceSection() {
  const flowRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(false);

  const startAnimation = useCallback(() => {
    const flow = flowRef.current;
    if (!flow || doneRef.current) return;
    doneRef.current = true;

    const items = flow.querySelectorAll<HTMLElement>(".mp-build-item");
    const step1 = items[0], arrow1 = items[1], step2 = items[2], arrow2 = items[3], step3 = items[4];

    const googleQuery = flow.querySelector<HTMLElement>("#mp-src-google .mp-typewriter");
    const googleResult = flow.querySelector<HTMLElement>("#mp-src-google .mp-type-reveal");
    const chatQuery = flow.querySelector<HTMLElement>("#mp-src-chatgpt .mp-typewriter");
    const chatResult = flow.querySelector<HTMLElement>("#mp-src-chatgpt .mp-type-reveal");
    const ghost = flow.querySelector<HTMLElement>("#mp-ghost");
    const s2Company = flow.querySelector<HTMLElement>("#mp-s2-company");
    const s2Contact = flow.querySelector<HTMLElement>("#mp-s2-contact");
    const s3Items = flow.querySelectorAll<HTMLElement>(".mp-s3-reveal");
    const ctaBtn = flow.querySelector<HTMLElement>("#mp-signal-cta-btn");

    step1?.classList.add("is-built");

    setTimeout(() => {
      if (!googleQuery) return;
      typewrite(googleQuery, googleQuery.getAttribute("data-typetext") || "", 45, () => {
        googleResult?.classList.add("is-revealed");
        setTimeout(() => {
          if (!chatQuery) return;
          typewrite(chatQuery, chatQuery.getAttribute("data-typetext") || "", 40, () => {
            chatResult?.classList.add("is-revealed");
            setTimeout(() => {
              arrow1?.classList.add("is-built");
              setTimeout(() => {
                step2?.classList.add("is-built");
                setTimeout(() => {
                  ghost?.classList.add("is-hidden");
                  setTimeout(() => {
                    s2Company?.classList.add("is-revealed");
                    setTimeout(() => {
                      s2Contact?.classList.add("is-revealed");
                      setTimeout(() => {
                        arrow2?.classList.add("is-built");
                        setTimeout(() => {
                          step3?.classList.add("is-built");
                          setTimeout(() => {
                            s3Items.forEach((item, k) => {
                              setTimeout(() => item.classList.add("is-revealed"), k * 300);
                            });
                            const ctaDelay = s3Items.length * 300 + 600;
                            setTimeout(() => {
                              if (ctaBtn) {
                                ctaBtn.classList.add("is-launched");
                                ctaBtn.innerHTML = "Launched &#10003;";
                              }
                            }, ctaDelay);
                          }, 300);
                        }, 400);
                      }, 300);
                    }, 500);
                  }, 400);
                }, 700);
              }, 400);
            }, 400);
          });
        }, 300);
      });
    }, 600);
  }, []);

  useEffect(() => {
    const el = flowRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !doneRef.current) {
            startAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  return (
    <section className="pt-32 pb-16 bg-secondary-100 max-md:pt-16 max-md:pb-10">
      <div className="max-w-[1152px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Visual */}
        <div ref={flowRef} id="marketplace-flow" className="bg-white rounded-2xl p-7 max-xs:p-4 border border-secondary-300 shadow-[0_4px_24px_rgba(0,0,0,0.04)] order-2 lg:order-1">
          <div className="flex flex-col items-center">
            {/* Step 1 */}
            <div className="mp-build-item opacity-0 translate-y-3.5 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] [&.is-built]:opacity-100 [&.is-built]:translate-y-0 flex items-start gap-3 max-xs:gap-2 w-full">
              <div className="w-6 h-6 max-xs:w-5 max-xs:h-5 bg-secondary-950 text-white text-[11px] max-xs:text-[10px] font-bold rounded-md max-xs:rounded-[5px] flex items-center justify-center shrink-0 mt-2.5 max-xs:mt-2">1</div>
              <div className="flex-1 bg-secondary-100 border border-secondary-300 rounded-[10px] p-3.5 px-4 max-xs:p-2.5 max-xs:px-3">
                <div className="grid grid-cols-2 max-xs:grid-cols-1 gap-2">
                  {/* Google card */}
                  <div id="mp-src-google" className="mp-source-card bg-white border border-secondary-300 rounded-lg p-2.5 px-3 opacity-0 translate-y-2.5 transition-all duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] [.is-built_&:nth-child(1)]:opacity-100 [.is-built_&:nth-child(1)]:translate-y-0 [.is-built_&:nth-child(1)]:delay-150">
                    <div className="flex items-center gap-1.5 mb-2 text-[11px] font-semibold text-secondary-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                      Google
                    </div>
                    <div className="mp-typewriter text-xs font-medium text-secondary-800 mb-2 italic leading-snug max-xs:whitespace-nowrap max-xs:overflow-hidden max-xs:text-ellipsis" data-typetext="performance marketing agency Berlin" />
                    <div className="mp-type-reveal opacity-0 translate-y-1.5 transition-all duration-350 ease-[cubic-bezier(.22,1,.36,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 flex items-center gap-1.5 text-[11px]">
                      <span className="text-primary-500 font-medium text-[11px]">sortlist.com/.../berlin</span>
                      <span className="bg-success-200 text-success-500 text-[10px] font-bold py-0.5 px-1.5 rounded">#1</span>
                    </div>
                  </div>
                  {/* ChatGPT card */}
                  <div id="mp-src-chatgpt" className="mp-source-card bg-white border border-secondary-300 rounded-lg p-2.5 px-3 opacity-0 translate-y-2.5 transition-all duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] [.is-built_&:nth-child(2)]:opacity-100 [.is-built_&:nth-child(2)]:translate-y-0 [.is-built_&:nth-child(2)]:delay-500">
                    <div className="flex items-center gap-1.5 mb-2 text-[11px] font-semibold text-secondary-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z" fill="#1A1A1A"/></svg>
                      ChatGPT
                    </div>
                    <div className="mp-typewriter text-xs font-medium text-secondary-800 mb-2 italic leading-snug max-xs:whitespace-nowrap max-xs:overflow-hidden max-xs:text-ellipsis" data-typetext="best performance marketing agencies in Berlin" />
                    <div className="mp-type-reveal opacity-0 translate-y-1.5 transition-all duration-350 ease-[cubic-bezier(.22,1,.36,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 text-[11px] font-medium text-success-500 flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      Recommends sortlist.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="mp-build-item opacity-0 translate-y-3.5 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] [&.is-built]:opacity-100 [&.is-built]:translate-y-0 text-secondary-300 py-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
            </div>

            {/* Step 2 */}
            <div className="mp-build-item opacity-0 translate-y-3.5 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] [&.is-built]:opacity-100 [&.is-built]:translate-y-0 flex items-start gap-3 max-xs:gap-2 w-full" id="mp-step2">
              <div className="w-6 h-6 max-xs:w-5 max-xs:h-5 bg-secondary-950 text-white text-[11px] max-xs:text-[10px] font-bold rounded-md max-xs:rounded-[5px] flex items-center justify-center shrink-0 mt-2.5 max-xs:mt-2">2</div>
              <div className="flex-1 bg-secondary-100 border border-secondary-300 rounded-[10px] p-3.5 px-4 max-xs:p-2.5 max-xs:px-3 relative">
                {/* Ghost */}
                <div id="mp-ghost" className="mp-ghost-row flex items-center gap-2.5 py-2.5 px-3 bg-secondary-200 rounded-lg transition-all duration-400 [&.is-hidden]:opacity-0 [&.is-hidden]:scale-[0.96] [&.is-hidden]:absolute [&.is-hidden]:pointer-events-none">
                  <div className="w-7 h-7 rounded-md bg-secondary-300 shrink-0" />
                  <div className="flex-1 flex flex-col gap-[5px]">
                    <div className="h-2 rounded bg-secondary-300 w-[70%]" />
                    <div className="h-2 rounded bg-secondary-300 w-[45%]" />
                  </div>
                  <span className="text-[10px] font-medium py-0.5 px-2 rounded bg-secondary-300 text-secondary-500 shrink-0">Anonymous</span>
                </div>
                {/* Spotify revealed */}
                <div id="mp-s2-company" className="mp-s2-reveal opacity-0 translate-y-2.5 transition-all duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-secondary-300 flex items-center justify-center p-1 shrink-0">
                    <img src="https://cdn.simpleicons.org/spotify/1DB954" alt="Spotify" width="20" height="20" className="block" />
                  </div>
                  <div className="flex flex-col gap-px">
                    <span className="text-sm font-semibold text-secondary-800">Spotify</span>
                    <span className="text-[11px] max-xs:text-[10px] text-secondary-400">Music streaming &bull; Stockholm &bull; 5,000+ employees</span>
                  </div>
                </div>
                {/* Contact */}
                <div id="mp-s2-contact" className="mp-s2-reveal opacity-0 translate-y-2.5 transition-all duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 flex items-center gap-2 py-2 px-2.5 bg-white border border-secondary-300 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary-50 text-primary-500 text-[9px] font-bold flex items-center justify-center shrink-0">ML</div>
                  <div className="flex flex-col flex-1">
                    <span className="text-xs font-semibold text-secondary-800">Maria L.</span>
                    <span className="text-[10px] text-secondary-400">Marketing Manager</span>
                  </div>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-success-500 shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="mp-build-item opacity-0 translate-y-3.5 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] [&.is-built]:opacity-100 [&.is-built]:translate-y-0 text-secondary-300 py-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
            </div>

            {/* Step 3 */}
            <div className="mp-build-item opacity-0 translate-y-3.5 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] [&.is-built]:opacity-100 [&.is-built]:translate-y-0 flex items-start gap-3 max-xs:gap-2 w-full" id="mp-step3">
              <div className="w-6 h-6 max-xs:w-5 max-xs:h-5 bg-secondary-950 text-white text-[11px] max-xs:text-[10px] font-bold rounded-md max-xs:rounded-[5px] flex items-center justify-center shrink-0 mt-2.5 max-xs:mt-2">3</div>
              <div className="flex-1 bg-primary-50 border border-primary-200 rounded-[10px] p-3.5 px-4 max-xs:p-2.5 max-xs:px-3">
                <div className="mp-s3-reveal opacity-0 translate-y-2 transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 flex items-center gap-1.5 text-xs font-semibold text-primary-500 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-[pulse_2s_infinite] shrink-0" />
                  New signal sent to your agency
                </div>
                <div className="flex flex-col gap-1.5 mb-3">
                  <div className="mp-s3-reveal opacity-0 translate-y-2 transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 flex items-center justify-between text-xs py-1">
                    <span className="text-secondary-400 font-medium">Company</span>
                    <span className="text-secondary-800 font-medium">Spotify</span>
                  </div>
                  <div className="mp-s3-reveal opacity-0 translate-y-2 transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 flex items-center justify-between text-xs py-1">
                    <span className="text-secondary-400 font-medium">Searched</span>
                    <span className="text-primary-500 font-medium italic max-xs:text-[11px] max-xs:break-words">&ldquo;performance marketing agency Berlin&rdquo;</span>
                  </div>
                  <div className="mp-s3-reveal opacity-0 translate-y-2 transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 flex items-center justify-between text-xs py-1">
                    <span className="text-secondary-400 font-medium">Budget</span>
                    <span className="text-secondary-800 font-medium">&euro;25K &ndash; &euro;50K</span>
                  </div>
                </div>
                <a id="mp-signal-cta-btn" href="#" className="mp-s3-reveal opacity-0 translate-y-2 transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] [&.is-revealed]:opacity-100 [&.is-revealed]:translate-y-0 block w-full text-center py-2 px-3.5 bg-primary-500 text-white font-sans text-xs font-medium rounded-md no-underline cursor-pointer shadow-[0_1px_2px_0_rgba(32,13,242,.15)] hover:bg-primary-600 [&.is-launched]:bg-success-500 [&.is-launched]:pointer-events-none [&.is-launched]:scale-[0.97]">
                  Launch campaign &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-1.5 text-[13px] font-medium font-sans not-italic px-3.5 py-1.5 rounded-full mb-4 bg-success-200 text-success-500">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Sortlist Signals
          </div>
          <h2 className="font-serif text-[40px] font-bold not-italic leading-[1.15] text-secondary-950 mb-5 -tracking-wide max-md:text-[28px]">
            600,000 companies search Sortlist every month. We know{" "}
            <em className="italic text-primary-500">exactly what they need</em>
            <span className="text-primary-500 font-serif">.</span>
          </h2>
          <p className="text-[17px] text-secondary-600 leading-relaxed mb-8">
            Sortlist ranks #1 on the most competitive agency keywords &mdash; &ldquo;performance marketing agency Berlin&rdquo;, &ldquo;SEO agency London&rdquo;, &ldquo;UX design firm Paris&rdquo;. When a company lands on these pages, Radar identifies them, finds the right decision-maker, and sends the signal directly to you.
          </p>
          <div className="flex gap-6 max-md:flex-col max-md:gap-3">
            {[
              { number: "2,400+", label: "High-intent landing pages" },
              { number: "600K", label: "Monthly company searches" },
              { number: "< 5 min", label: "From visit to your inbox" },
            ].map((stat) => (
              <div key={stat.number} className="flex-1 p-4 bg-white border border-secondary-300 rounded-[10px] text-center">
                <span className="block text-2xl font-bold text-secondary-950 -tracking-wide leading-none mb-1">{stat.number}</span>
                <span className="block text-[11px] text-secondary-500 leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
