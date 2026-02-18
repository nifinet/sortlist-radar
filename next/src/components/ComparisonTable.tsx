const rows = [
  { feature: "Visitor identification", generic: { check: true }, radar: { check: true } },
  { feature: "Verified decision-maker contacts", generic: { text: "Sometimes" }, radar: { check: true, text: "Verified & adapted to the most relevant decision-maker" } },
  { feature: "Built for agency workflows", generic: { cross: true }, radar: { check: true, text: "Designed for agencies" } },
  { feature: "Know what service they're searching for", generic: { cross: true, text: "Impossible" }, radar: { check: true, text: "Powered by 600,000+ monthly searches" } },
  { feature: "Search query, budget & location data", generic: { cross: true }, radar: { check: true, text: "Exclusive Sortlist data" } },
  { feature: "Agency-friendly pricing", generic: { text: "Per seat, expensive" }, radar: { check: true, text: "Per agency, transparent" } },
];

export default function ComparisonTable() {
  return (
    <section className="pt-32 pb-16 bg-secondary-100 max-md:pt-16 max-md:pb-10">
      <div className="max-w-[1152px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[40px] font-bold not-italic leading-[1.15] text-secondary-950 mb-4 -tracking-wide max-md:text-[28px]">
            Built for agencies, not for everyone<span className="text-primary-500 font-serif">.</span>
          </h2>
          <p className="text-[17px] text-secondary-600">See why Radar is different from generic visitor identification tools.</p>
        </div>
        <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
          <table className="w-full border-collapse border-separate-0 rounded-xl overflow-hidden border border-secondary-300 bg-white" style={{ borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="py-4 px-6 max-md:py-2.5 max-md:px-3 text-left text-sm max-md:text-xs bg-secondary-200 font-medium text-secondary-500 border-b border-secondary-300">Feature</th>
                <th className="py-4 px-6 max-md:py-2.5 max-md:px-3 text-left text-sm max-md:text-xs bg-secondary-200 font-medium text-secondary-500 border-b border-secondary-300">Generic tools</th>
                <th className="py-4 px-6 max-md:py-2.5 max-md:px-3 text-left text-sm max-md:text-xs bg-secondary-200 font-bold text-secondary-950 border-b border-secondary-300">Sortlist Radar</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className={`py-4 px-6 max-md:py-2.5 max-md:px-3 text-sm max-md:text-xs font-medium text-secondary-800 ${i < rows.length - 1 ? "border-b border-secondary-200" : ""}`}>
                    {row.feature}
                  </td>
                  <td className={`py-4 px-6 max-md:py-2.5 max-md:px-3 text-sm max-md:text-xs text-secondary-700 ${i < rows.length - 1 ? "border-b border-secondary-200" : ""}`}>
                    {row.generic.check && <span className="text-success-500 font-bold">&#10003;</span>}
                    {row.generic.cross && !row.generic.text && <span className="text-secondary-400">&#10007;</span>}
                    {row.generic.cross && row.generic.text && <span className="text-secondary-400">&#10007; {row.generic.text}</span>}
                    {!row.generic.check && !row.generic.cross && row.generic.text && <span className="text-secondary-400">{row.generic.text}</span>}
                  </td>
                  <td className={`py-4 px-6 max-md:py-2.5 max-md:px-3 text-sm max-md:text-xs text-secondary-700 font-medium ${i < rows.length - 1 ? "border-b border-secondary-200" : ""}`}>
                    {row.radar.check && <span className="text-success-500 font-bold">&#10003;</span>}
                    {row.radar.text && <> {row.radar.text}</>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
