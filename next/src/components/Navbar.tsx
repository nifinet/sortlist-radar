import { SortlistMonogram, SortlistWordmark } from "./icons/SortlistLogo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-white border-b border-secondary-300 h-20 flex items-center">
      <div className="max-w-[1152px] mx-auto px-6 flex items-center justify-between w-full">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <SortlistMonogram className="shrink-0" />
          <SortlistWordmark className="shrink-0 max-sm:hidden" />
          <span className="bg-primary-50 text-primary-500 text-xs font-medium px-2.5 py-1 rounded-full border border-primary-200 max-sm:hidden">
            Radar
          </span>
        </a>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 bg-primary-500 text-white font-sans text-sm font-medium px-5 py-3.5 min-h-11 rounded-lg border-none cursor-pointer no-underline transition-all duration-200 shadow-[0_1px_2px_0_rgba(32,13,242,.18),0_0_8px_0_rgba(32,13,242,.12)] hover:bg-primary-600 max-sm:px-3.5 max-sm:text-[13px] max-sm:min-h-10"
        >
          Start free trial &rarr;
        </a>
      </div>
    </nav>
  );
}
