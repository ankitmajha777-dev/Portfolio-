import {
  WHATSAPP_BASE_URL,
  getStartProjectWhatsAppUrl,
} from '../utils/whatsapp';

export function Navbar() {
  const startProjectUrl = getStartProjectWhatsAppUrl();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900 bg-[#050505]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-lg font-bold tracking-[0.18em] text-zinc-100 whitespace-nowrap shrink-0 hover:text-rose-500 transition-colors duration-150"
        >
          ANKIT
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400"
        >
          <a
            href="#works"
            className="hover:text-zinc-100 hover:underline underline-offset-8 decoration-rose-600 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Works
          </a>
          <a
            href="#expertise"
            className="hover:text-zinc-100 hover:underline underline-offset-8 decoration-rose-600 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Expertise
          </a>
          <a
            href="#philosophy"
            className="hover:text-zinc-100 hover:underline underline-offset-8 decoration-rose-600 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Philosophy
          </a>
          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 hover:underline underline-offset-8 decoration-rose-600 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={startProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-rose-600 rounded-md hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Start Project
          </a>
        </div>
      </div>
    </header>
  );
}
