import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  WHATSAPP_BASE_URL,
  PROJECT_BUDGET_DISPLAY,
  getStartProjectWhatsAppUrl,
} from '../utils/whatsapp';

const SAMURAI_HERO_IMAGE =
  '/assets/aistudio/c591a869e098bf60ee69a432ff57af93_e0218280.jpg';

export function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const startProjectUrl = getStartProjectWhatsAppUrl();

  return (
    <section
      aria-label="Hero Introduction"
      className="relative border-b border-zinc-900 bg-[#050505] pt-10 pb-16 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-10 lg:gap-12">
          {/* Left Column: Typographic Hierarchy & Primary Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div className="space-y-6">
              {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-zinc-400">
                <span className="text-rose-500 font-medium">Crimson Noir Edition</span>
                <span aria-hidden="true">·</span>
                <span>Independent Web Director &amp; Engineer</span>
                <span aria-hidden="true">·</span>
                <span>Available for Select Commissions</span>
              </div>

              {/* Expressive Display Headline */}
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-zinc-100 leading-[1.12] max-w-2xl"
                style={{ textWrap: 'balance' }}
              >
                Forging Sovereign Digital Experiences in Shadow &amp; Crimson.
              </h1>

              {/* Lead Prose */}
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-[62ch]">
                I partner with founders, studios, and ambitious brands to design and engineer
                bespoke, high-converting websites. Disciplined minimalism, razor-sharp
                typography, and uncompromising frontend performance.
              </p>

              {/* Minimal, Elegant Project Budget Presentation */}
              <div className="pt-2">
                <p
                  data-testid="hero-project-budget"
                  className="font-mono text-sm sm:text-base font-medium tracking-[0.14em] text-zinc-100 border-y border-zinc-800/90 py-3.5 inline-block tabular-nums"
                >
                  {PROJECT_BUDGET_DISPLAY}
                </p>
              </div>
            </div>

            {/* Primary & Secondary WhatsApp CTAs */}
            <div className="pt-8 flex flex-wrap items-center gap-4">
              <a
                href={startProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wider text-white bg-rose-600 rounded-md hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wider text-zinc-200 border border-zinc-800 bg-zinc-950/60 rounded-md hover:border-rose-600/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Samurai Hero Artwork Container at Matching Height */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 min-h-[420px] lg:min-h-[540px] flex flex-col justify-end">
              {!imageError ? (
                <img
                  src={SAMURAI_HERO_IMAGE}
                  alt="Crimson Noir Samurai standing beneath crimson maple leaves and full moon"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-rose-950/50 via-zinc-950 to-[#050505] flex items-center justify-center p-8 text-center">
                  <span className="font-display text-lg tracking-widest text-rose-400">
                    CRIMSON NOIR ARCHIVE
                  </span>
                </div>
              )}

              {/* Measured Scrim Overlay for Guaranteed 4.5:1 Contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-transparent"
              />

              {/* Subtle Editorial Frame Caption */}
              <div className="relative z-10 p-6 flex items-end justify-between gap-4 border-t border-zinc-800/60 bg-[#050505]/70 backdrop-blur-xs">
                <div>
                  <p className="text-xs tracking-wider text-zinc-400">
                    Ankit · Creative Web Direction
                  </p>
                  <p className="font-mono text-xs text-rose-400 mt-1 tabular-nums">
                    {PROJECT_BUDGET_DISPLAY}
                  </p>
                </div>
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-200 hover:text-rose-400 underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics & Engagement Bar Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="font-mono text-2xl font-semibold text-zinc-100 tabular-nums">
              100% Bespoke
            </p>
            <p className="text-xs text-zinc-400">
              Zero bloated templates · Hand-engineered UI architecture
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-2xl font-semibold text-zinc-100 tabular-nums">
              &lt; 0.8s Load
            </p>
            <p className="text-xs text-zinc-400">
              Sub-second First Contentful Paint across mobile &amp; desktop
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-base font-semibold text-rose-500 tabular-nums whitespace-nowrap">
              {PROJECT_BUDGET_DISPLAY}
            </p>
            <p className="text-xs text-zinc-400">
              Transparent engagement range · Direct founder collaboration
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="font-mono text-base font-semibold text-zinc-100 tabular-nums">
              Direct WhatsApp Line
            </p>
            <div>
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-400 hover:text-rose-300 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Send Me a Message</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
