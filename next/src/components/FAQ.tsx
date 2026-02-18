"use client";

import { useState } from "react";

const items = [
  {
    q: "How does Radar identify website visitors?",
    a: "Radar maps IP addresses to company data using a proprietary database updated daily. When a company visits your website, we identify the organization, enrich the data with firmographic information (size, industry, location), and surface verified decision-maker contacts. Installation takes under 2 minutes\u00a0\u2014 just add a small script to your website.",
  },
  {
    q: "Is Radar GDPR compliant?",
    a: "Yes, 100%. Radar only identifies companies, not individual people. We use publicly available business data and IP-to-company mapping. No personal data is collected or stored. We process data within the EU in compliance with GDPR Article 6(1)(f)\u00a0\u2014 legitimate interest for B2B marketing and analytics.",
  },
  {
    q: "What makes Radar different from Leadfeeder, Leadinfo, etc.?",
    a: "Unlike generic visitor identification tools, Radar is built specifically for agencies. The key differentiator: Radar is integrated with the Sortlist ecosystem\u00a0\u2014 600,000+ monthly company searches. This means you can see if a visitor is also actively searching for an agency on Sortlist\u00a0\u2014 a unique buying intent signal no competitor can provide.",
  },
  {
    q: "Does it integrate with our CRM?",
    a: "Yes. Radar integrates natively with HubSpot, Pipedrive, Salesforce, and Slack. We also support Zapier and webhooks for custom workflows. Leads can be automatically pushed to your CRM with full context\u00a0\u2014 company info, pages visited, intent signals.",
  },
  {
    q: "How quickly will I see results?",
    a: "Immediately. Once the tracking script is installed (2 minutes), you\u2019ll start seeing identified companies in real-time. Most agencies see their first qualified lead within the first 24 hours.",
  },
  {
    q: "What happens after the free trial?",
    a: "After your trial, our team will walk you through a personalized recommendation based on the companies identified and your agency\u2019s traffic. No surprise charges, no commitments\u00a0\u2014 if you decide not to continue, your account simply stops and no data is lost.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-secondary-100 pt-32 pb-16 max-md:pt-16 max-md:pb-10">
      <div className="mx-auto max-w-[1152px] px-6">
        <div className="mb-12 text-center max-md:mb-8">
          <h2 className="font-serif text-[40px] font-bold leading-tight text-secondary-950 max-md:text-[28px]">
            Frequently asked questions
            <span className="text-primary-500">.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-[760px] space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-secondary-300 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[16px] font-semibold text-secondary-950 max-md:px-5 max-md:py-4 max-md:text-[15px]"
                >
                  {item.q}
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-secondary-300 text-lg leading-none text-secondary-500 transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-6 pb-5 text-[15px] leading-relaxed text-secondary-500 max-md:px-5">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
