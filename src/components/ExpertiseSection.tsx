import { ArrowUpRight } from 'lucide-react';
import {
  WHATSAPP_BASE_URL,
  PROJECT_BUDGET_DISPLAY,
  getStartProjectWhatsAppUrl,
  getWhatsAppUrlForAction,
} from '../utils/whatsapp';

const CAPABILITIES = [
  {
    index: '01.',
    title: 'Bespoke Web Design & Art Direction',
    description:
      'Editorial typography, deliberate negative space, and high-contrast visual storytelling tailored to position your brand above commodity competitors.',
    highlights: 'Editorial Layouts · Design Systems · Responsive Art Direction',
  },
  {
    index: '02.',
    title: 'Precision Frontend Architecture',
    description:
      'Clean, accessible, semantic React & TypeScript engineering built for instant page loads, fluid micro-interactions, and long-term maintainability.',
    highlights: 'React & TypeScript · Core Web Vitals · Technical SEO',
  },
  {
    index: '03.',
    title: 'Conversion & WhatsApp Workflow Integration',
    description:
      'Frictionless lead capture, direct WhatsApp inquiry funnels, and clear user journeys that turn high-intent visitors into active client conversations.',
    highlights: 'Direct Messaging Funnels · Lead Architecture · Mobile Optimization',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Before working with Ankit, our digital presence felt indistinct. He rebuilt our entire flagship in a dark editorial style that increased qualified collector inquiries by 165% in three months.',
    author: 'Kenji Takahashi',
    role: 'Managing Director',
    organization: 'Kuro Timepieces Tokyo',
  },
  {
    quote:
      'Ankit combines rare visual restraint with engineering speed. Our studio booking flow now routes directly to our team with zero friction, doubling our monthly consultations.',
    author: 'Vikram Rathore',
    role: 'Principal Mastering Engineer',
    organization: 'Akatsuki Audio Lab',
  },
];

export function ExpertiseSection() {
  const startProjectUrl = getStartProjectWhatsAppUrl();
  const discussProjectUrl = getWhatsAppUrlForAction('Discuss Your Project');

  return (
    <>
      {/* Expertise & Capabilities Section */}
      <section
        id="expertise"
        aria-labelledby="expertise-heading"
        className="border-b border-zinc-900 bg-[#050505] py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="space-y-3">
              <p className="text-xs font-mono tracking-widest uppercase text-rose-500">
                02. Capabilities
              </p>
              <h2
                id="expertise-heading"
                className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100"
                style={{ textWrap: 'balance' }}
              >
                Disciplined Craft Across Design &amp; Code
              </h2>
            </div>

            {/* Minimal, Elegant Budget Presentation (No Pricing Cards or Tables) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span
                data-testid="expertise-project-budget"
                className="font-mono text-sm font-medium tracking-[0.12em] text-zinc-100 tabular-nums"
              >
                {PROJECT_BUDGET_DISPLAY}
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-zinc-700">
                ·
              </span>
              <a
                href={startProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-400 hover:text-rose-300 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* 3-Column Editorial Capability List separated by hairline borders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-900 border-y border-zinc-900">
            {CAPABILITIES.map((item) => (
              <div
                key={item.index}
                className="py-8 lg:py-10 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs text-rose-500 tabular-nums">
                    {item.index}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <p className="text-xs font-mono text-zinc-500 pt-2">
                  {item.highlights}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Client Proof Section */}
      <section
        id="philosophy"
        aria-labelledby="philosophy-heading"
        className="border-b border-zinc-900 bg-[#050505] py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-mono tracking-widest uppercase text-rose-500">
                03. The Crimson Noir Philosophy
              </p>
              <h2
                id="philosophy-heading"
                className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Clarity Over Clutter. Precision Over Noise.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-zinc-400 text-base leading-relaxed">
              <p>
                Great digital products do not shout with unnecessary ornament. Like a
                master-forged blade in shadow, every typographic proportion, surface contrast,
                and interaction is reduced to what is essential and unmistakable.
              </p>
              <p>
                Every engagement is structured transparently with direct one-on-one
                communication—from initial creative direction to final deployment.
              </p>

              {/* Minimal & Elegant Single-Line Engagement Statement */}
              <div className="pt-2 pb-1 flex flex-wrap items-center justify-between gap-4 border-y border-zinc-800/80 py-4">
                <span
                  data-testid="philosophy-project-budget"
                  className="font-mono text-sm sm:text-base font-medium tracking-[0.14em] text-zinc-100 tabular-nums"
                >
                  {PROJECT_BUDGET_DISPLAY}
                </span>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={discussProjectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-400 hover:text-rose-300 transition-colors duration-150 whitespace-nowrap shrink-0"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>

                  <a
                    href={WHATSAPP_BASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0"
                  >
                    <span>Send Me a Message</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Attributable Client Proof Adjacent to Claims */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.author}
                className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="text-xs text-zinc-400 flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-zinc-100">{item.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-rose-400">{item.organization}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
