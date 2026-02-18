"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useCallback } from "react";

interface DashLine {
  reveal: boolean;
  expand?: boolean;
  logo?: string;
  name?: string;
  detail?: string;
  ghostPages: string;
}

const lines: DashLine[] = [
  { reveal: true, expand: true, logo: "https://cdn.simpleicons.org/spotify/1DB954", name: "Spotify", detail: "7 pages &bull; /services", ghostPages: "3 pages" },
  { reveal: false, ghostPages: "1 page" },
  { reveal: true, logo: "https://www.google.com/s2/favicons?domain=decathlon.com&sz=128", name: "Decathlon", detail: "5 pages &bull; /case-studies", ghostPages: "5 pages" },
  { reveal: true, logo: "https://cdn.simpleicons.org/bmw/0066B1", name: "BMW Group", detail: "4 pages &bull; /portfolio", ghostPages: "4 pages" },
  { reveal: false, ghostPages: "2 pages" },
];

export default function IdentificationSection() {
  const visualRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const inViewRef = useRef(false);

  const addTimer = useCallback((fn: () => void, delay: number) => {
    const t = setTimeout(() => {
      if (!inViewRef.current) return;
      fn();
    }, delay);
    timersRef.current.push(t);
  }, []);

  const resetState = useCallback(() => {
    const el = visualRef.current;
    if (!el) return;

    el.querySelectorAll<HTMLElement>(".dash-line").forEach((wrap, gi) => {
      const line = wrap.querySelector<HTMLElement>(".visitor-line");
      if (!line) return;
      const ghostAv = line.querySelector<HTMLElement>(".visitor-avatar.ghost-av");
      const imgAv = line.querySelector<HTMLElement>(".visitor-avatar-img");
      const company = line.querySelector<HTMLElement>(".visitor-company");
      const pages = line.querySelector<HTMLElement>(".visitor-pages");
      const tag = line.querySelector<HTMLElement>(".visitor-tag");

      line.classList.remove("identified");
      line.classList.add("ghost");
      if (ghostAv) ghostAv.style.display = "";
      if (imgAv) imgAv.style.display = "none";
      if (company) company.textContent = "Unknown visitor";
      if (pages) pages.textContent = lines[gi]?.ghostPages || "1 page";
      if (tag) {
        tag.classList.remove("tag-identified");
        tag.classList.add("tag-unknown");
        tag.textContent = "Anonymous";
      }
    });

    const expand = el.querySelector<HTMLElement>(".dash-expand");
    if (expand) expand.classList.remove("is-open");
    const campBtn = el.querySelector<HTMLElement>(".dash-expand-btn-primary");
    if (campBtn) {
      campBtn.classList.remove("is-sent");
      campBtn.innerHTML = "Add to campaign &rarr;";
    }
  }, []);

  const runCycle = useCallback(() => {
    if (!inViewRef.current) return;
    const el = visualRef.current;
    if (!el) return;
    timersRef.current = [];

    const revealLines = el.querySelectorAll<HTMLElement>('.dash-line[data-reveal="true"]');

    // Phase 1: ghost → identified, staggered
    revealLines.forEach((wrap, i) => {
      addTimer(() => {
        const line = wrap.querySelector<HTMLElement>(".visitor-line");
        if (!line) return;
        const ghostAv = line.querySelector<HTMLElement>(".visitor-avatar.ghost-av");
        const imgAv = line.querySelector<HTMLElement>(".visitor-avatar-img");
        const company = line.querySelector<HTMLElement>(".visitor-company");
        const pages = line.querySelector<HTMLElement>(".visitor-pages");
        const tag = line.querySelector<HTMLElement>(".visitor-tag");

        line.classList.remove("ghost");
        line.classList.add("identified");
        if (ghostAv) ghostAv.style.display = "none";
        if (imgAv) imgAv.style.display = "block";
        if (company) company.textContent = wrap.getAttribute("data-name") || "";
        if (pages) pages.innerHTML = wrap.getAttribute("data-detail") || "";
        if (tag) {
          tag.classList.remove("tag-unknown");
          tag.classList.add("tag-identified");
          tag.textContent = "Identified";
        }
      }, 600 + i * 400);
    });

    // Phase 2: expand contact panel
    addTimer(() => {
      const expand = el.querySelector<HTMLElement>('.dash-line[data-expand="true"] .dash-expand');
      if (expand) expand.classList.add("is-open");
    }, 2200);

    // Phase 2b: auto-trigger campaign button
    addTimer(() => {
      const btn = el.querySelector<HTMLElement>(".dash-expand-btn-primary");
      if (btn) {
        btn.classList.add("is-sent");
        btn.innerHTML = "Added &#10003;";
      }
    }, 3400);

    // Phase 3: hold → fade → reset → replay
    addTimer(() => {
      el.classList.add("dash-resetting");
      addTimer(() => {
        el.classList.add("dash-no-transition");
        resetState();
        void el.offsetHeight; // force reflow
        el.classList.remove("dash-no-transition");
        el.classList.remove("dash-resetting");
        addTimer(() => {
          runCycle();
        }, 600);
      }, 450);
    }, 5200);
  }, [addTimer, resetState]);

  useEffect(() => {
    const el = visualRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !inViewRef.current) {
            inViewRef.current = true;
            resetState();
            runCycle();
          } else if (!entry.isIntersecting && inViewRef.current) {
            inViewRef.current = false;
            timersRef.current.forEach((t) => clearTimeout(t));
            timersRef.current = [];
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -25% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timersRef.current.forEach((t) => clearTimeout(t));
    };
  }, [resetState, runCycle]);

  return (
    <section className="pt-32 pb-16 bg-white max-md:pt-16 max-md:pb-10" id="problem">
      <div className="max-w-[1152px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-20 items-start">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-1.5 text-[13px] font-medium font-sans not-italic px-3.5 py-1.5 rounded-full mb-4 bg-danger-200 text-danger-500">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            Identification
          </div>
          <h2 className="font-serif text-[40px] font-bold not-italic leading-[1.15] text-secondary-950 mb-5 -tracking-wide max-md:text-[28px]">
            Your next client already <em className="italic text-primary-500">visited your website</em>. You just don&apos;t know it
            <span className="text-primary-500 font-serif">.</span>
          </h2>
          <p className="text-[17px] text-secondary-600 leading-relaxed mb-4">
            Every day, potential clients browse your portfolio, read your case studies, and check your pricing. Then they leave &mdash; without ever making contact. Radar identifies the companies behind those anonymous visits in real-time.
          </p>
          <div className="flex items-center gap-5 mt-8 p-6 bg-primary-50 rounded-xl border border-primary-200 max-md:flex-col max-md:text-center">
            <span className="text-5xl font-bold text-primary-500 leading-none -tracking-wider shrink-0 max-md:text-4xl">98%</span>
            <span className="text-[15px] text-secondary-700 leading-normal">of website visitors leave without ever filling out a form or making contact. That&apos;s revenue walking out the door.</span>
          </div>
        </div>

        {/* Dashboard visual */}
        <div
          ref={visualRef}
          className="bg-secondary-100 rounded-2xl p-8 max-md:p-4 border border-secondary-300 min-h-[510px] max-md:min-h-[auto] transition-opacity duration-400 ease-linear"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-secondary-300">
            <span className="text-[13px] font-medium text-secondary-500">Radar &mdash; Live visitors</span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-success-500">
              <span className="w-1.5 h-1.5 bg-success-500 rounded-full animate-[pulse_1.5s_infinite]" />
              Live
            </span>
          </div>

          {/* Visitor lines */}
          {lines.map((line, i) => (
            <div
              key={i}
              className={`${line.expand ? "visitor-line-wrap" : ""} dash-line ${line.reveal ? "" : ""} mb-1.5`}
              {...(line.reveal ? { "data-reveal": "true" } : {})}
              {...(line.expand ? { "data-expand": "true" } : {})}
              {...(line.logo ? { "data-logo": line.logo } : {})}
              {...(line.name ? { "data-name": line.name } : {})}
              {...(line.detail ? { "data-detail": line.detail } : {})}
            >
              <div className="visitor-line ghost flex items-center gap-3 py-3 px-3.5 rounded-[10px] text-sm bg-secondary-200 text-secondary-500 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]">
                <span className="visitor-avatar ghost-av w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 bg-secondary-300 text-secondary-500 transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]">?</span>
                {line.logo && (
                  <img
                    className="visitor-avatar-img w-8 h-8 rounded-lg object-contain shrink-0 bg-white p-1 border border-secondary-300 transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]"
                    style={{ display: "none" }}
                    src={line.logo}
                    alt={line.name || ""}
                  />
                )}
                <span className="visitor-company flex-1 font-medium text-[13px]">Unknown visitor</span>
                <span className="visitor-pages text-[11px] text-secondary-400 shrink-0 max-md:hidden">{line.ghostPages}</span>
                <span className="visitor-tag tag-unknown text-[10px] font-medium py-0.5 px-2 rounded shrink-0 bg-secondary-300 text-secondary-500 transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]">Anonymous</span>
              </div>

              {/* Expand panel (only on first line) */}
              {line.expand && (
                <div className="dash-expand opacity-0 max-h-0 overflow-hidden -translate-y-1 transition-all duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] mt-0 [&.is-open]:opacity-100 [&.is-open]:max-h-[140px] max-md:[&.is-open]:max-h-[220px] [&.is-open]:translate-y-0 [&.is-open]:mt-1.5">
                  <div className="flex items-center gap-2.5 py-2.5 px-3.5 bg-white border border-secondary-300 rounded-[10px] mb-2 max-md:flex-wrap">
                    <div className="w-7 h-7 rounded-full bg-primary-50 text-primary-500 text-[10px] font-bold flex items-center justify-center shrink-0">ML</div>
                    <div className="flex flex-col gap-px flex-1 min-w-0">
                      <span className="text-xs font-semibold text-secondary-800">Maria L.</span>
                      <span className="text-[10px] text-secondary-400">Marketing Manager</span>
                    </div>
                    <span className="text-[10px] text-secondary-400 shrink-0 max-md:w-full max-md:ml-[38px]">maria.l@spotify.com</span>
                  </div>
                  <div className="flex gap-1.5 max-md:flex-col">
                    <a href="#" className="dash-expand-btn dash-expand-btn-primary flex-1 text-center py-[7px] px-3 rounded-md font-sans text-[11px] font-medium no-underline cursor-pointer transition-all duration-200 bg-primary-500 text-white border-none shadow-[0_1px_2px_0_rgba(32,13,242,.15)] hover:bg-primary-600 [&.is-sent]:bg-success-500 [&.is-sent]:shadow-none [&.is-sent]:pointer-events-none [&.is-sent]:scale-[0.97]">
                      Add to campaign &rarr;
                    </a>
                    <a href="#" className="flex-1 text-center py-[7px] px-3 rounded-md font-sans text-[11px] font-medium no-underline cursor-pointer transition-all duration-200 bg-transparent text-secondary-600 border border-secondary-300 hover:border-primary-500 hover:text-primary-500">
                      View profile
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CSS for identified state — applied via JS class toggling */}
      <style>{`
        .visitor-line.identified {
          background: white;
          border: 1px solid var(--color-secondary-300);
          color: var(--color-secondary-800);
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .visitor-line.identified .visitor-avatar.ghost-av { display: none; }
        .visitor-line.identified .visitor-avatar-img { display: block !important; }
        .visitor-line.ghost { background: var(--color-secondary-200); color: var(--color-secondary-500); }
        .tag-unknown { background: var(--color-secondary-300); color: var(--color-secondary-500); }
        .tag-identified { background: var(--color-success-200); color: var(--color-success-500); }
      `}</style>
    </section>
  );
}
