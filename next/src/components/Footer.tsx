import { SortlistWordmarkFooter } from "./icons/SortlistLogo";

export default function Footer() {
  return (
    <footer className="border-t border-secondary-300 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-[1152px] px-6">
        {/* Top */}
        <div className="flex items-start justify-between gap-12 max-md:flex-col max-md:gap-10">
          {/* Brand */}
          <div>
            <SortlistWordmarkFooter />
            <p className="mt-3 text-sm text-secondary-500">
              Building great business stories.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16 max-md:gap-10 max-sm:flex-col max-sm:gap-8">
            <div className="flex flex-col gap-2.5">
              <h4 className="mb-1 text-sm font-semibold text-secondary-950">Product</h4>
              <a href="#how-it-works" className="text-sm text-secondary-500 hover:text-secondary-700">How it works</a>
              <a href="#pricing" className="text-sm text-secondary-500 hover:text-secondary-700">Pricing</a>
              <a href="#" className="text-sm text-secondary-500 hover:text-secondary-700">Integrations</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="mb-1 text-sm font-semibold text-secondary-950">Company</h4>
              <a href="https://www.sortlist.com/about" className="text-sm text-secondary-500 hover:text-secondary-700">About Sortlist</a>
              <a href="https://www.sortlist.com/blog" className="text-sm text-secondary-500 hover:text-secondary-700">Blog</a>
              <a href="https://www.sortlist.com/contact" className="text-sm text-secondary-500 hover:text-secondary-700">Contact</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="mb-1 text-sm font-semibold text-secondary-950">Legal</h4>
              <a href="#" className="text-sm text-secondary-500 hover:text-secondary-700">Privacy Policy</a>
              <a href="#" className="text-sm text-secondary-500 hover:text-secondary-700">Terms of Use</a>
              <a href="#" className="text-sm text-secondary-500 hover:text-secondary-700">GDPR</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex items-center justify-between border-t border-secondary-300 pt-6 text-sm text-secondary-500 max-md:flex-col max-md:gap-3">
          <p>2026 &copy; Sortlist &mdash; All rights reserved</p>
          <p>
            <a href="#" className="hover:text-secondary-700">Privacy Policy</a>
            {" "}&middot;{" "}
            <a href="#" className="hover:text-secondary-700">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
