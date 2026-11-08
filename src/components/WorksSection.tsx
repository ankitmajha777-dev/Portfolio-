import { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  PROJECT_BUDGET_DISPLAY,
  filterProjects,
  getStartProjectWhatsAppUrl,
  getWhatsAppUrlForAction,
  type PortfolioProject,
  type ProjectFilterCategory,
} from '../utils/whatsapp';

const FILTER_CATEGORIES: ProjectFilterCategory[] = [
  'All Works',
  'Web Architecture',
  'Brand Systems',
  'Interactive Experience',
];

function ProjectVisualCanvas({ project }: { project: PortfolioProject }) {
  if (project.id === 'kuro-atelier') {
    return (
      <svg
        viewBox="0 0 600 340"
        className="w-full h-56 sm:h-64 object-cover bg-[#08080a] border-b border-zinc-800/80"
        role="img"
        aria-label={`${project.title} architectural preview`}
      >
        <defs>
          <radialGradient id="kuroGlow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#e11d48" stopOpacity="0.32" />
            <stop offset="65%" stopColor="#881337" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="340" fill="#070709" />
        <circle cx="300" cy="170" r="160" fill="url(#kuroGlow)" />
        <circle
          cx="300"
          cy="170"
          r="112"
          fill="none"
          stroke="#27272a"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <circle
          cx="300"
          cy="170"
          r="84"
          fill="none"
          stroke="#e11d48"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />
        <circle
          cx="300"
          cy="170"
          r="46"
          fill="none"
          stroke="#f4f4f5"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <line x1="300" y1="34" x2="300" y2="306" stroke="#27272a" strokeWidth="1" />
        <line x1="164" y1="170" x2="436" y2="170" stroke="#27272a" strokeWidth="1" />
        <line x1="300" y1="170" x2="362" y2="118" stroke="#e11d48" strokeWidth="2" />
        <circle cx="300" cy="170" r="4" fill="#e11d48" />
        <text
          x="32"
          y="42"
          fill="#71717a"
          fontSize="11"
          fontFamily="JetBrains Mono, monospace"
          letterSpacing="2"
        >
          CALIBRE 01 · TOURBILLON CHRONOGRAPH
        </text>
        <text
          x="32"
          y="312"
          fill="#e4e4e7"
          fontSize="12"
          fontFamily="Cinzel, serif"
          letterSpacing="3"
        >
          KURO ATELIER TOKYO
        </text>
      </svg>
    );
  }

  if (project.id === 'ronin-capital') {
    return (
      <svg
        viewBox="0 0 600 340"
        className="w-full h-56 sm:h-64 object-cover bg-[#08080a] border-b border-zinc-800/80"
        role="img"
        aria-label={`${project.title} architectural preview`}
      >
        <rect width="600" height="340" fill="#070709" />
        <g stroke="#18181b" strokeWidth="1">
          <line x1="0" y1="85" x2="600" y2="85" />
          <line x1="0" y1="170" x2="600" y2="170" />
          <line x1="0" y1="255" x2="600" y2="255" />
          <line x1="150" y1="0" x2="150" y2="340" />
          <line x1="300" y1="0" x2="300" y2="340" />
          <line x1="450" y1="0" x2="450" y2="340" />
        </g>
        <path
          d="M 60 260 L 180 210 L 290 225 L 410 130 L 540 75"
          fill="none"
          stroke="#e11d48"
          strokeWidth="2.5"
        />
        <circle cx="180" cy="210" r="4" fill="#050505" stroke="#e11d48" strokeWidth="2" />
        <circle cx="290" cy="225" r="4" fill="#050505" stroke="#e11d48" strokeWidth="2" />
        <circle cx="410" cy="130" r="4" fill="#050505" stroke="#e11d48" strokeWidth="2" />
        <circle cx="540" cy="75" r="5" fill="#e11d48" />
        <text
          x="32"
          y="42"
          fill="#71717a"
          fontSize="11"
          fontFamily="JetBrains Mono, monospace"
          letterSpacing="2"
        >
          SOVEREIGN DEEP-TECH MONOGRAPH
        </text>
        <text
          x="32"
          y="312"
          fill="#e4e4e7"
          fontSize="12"
          fontFamily="Cinzel, serif"
          letterSpacing="3"
        >
          RONIN VENTURE LAB
        </text>
      </svg>
    );
  }

  if (project.id === 'akatsuki-sound') {
    return (
      <svg
        viewBox="0 0 600 340"
        className="w-full h-56 sm:h-64 object-cover bg-[#08080a] border-b border-zinc-800/80"
        role="img"
        aria-label={`${project.title} architectural preview`}
      >
        <rect width="600" height="340" fill="#070709" />
        {Array.from({ length: 24 }).map((_, idx) => {
          const x = 66 + idx * 20;
          const heights = [
            36, 64, 92, 138, 176, 120, 84, 152, 200, 164, 110, 74, 130, 188, 144, 96,
            68, 124, 160, 112, 80, 56, 42, 28,
          ];
          const h = heights[idx % heights.length];
          const y = 175 - h / 2;
          const isHighlight = idx === 8 || idx === 13;
          return (
            <rect
              key={x}
              x={x}
              y={y}
              width="8"
              height={h}
              rx="2"
              fill={isHighlight ? '#e11d48' : '#27272a'}
            />
          );
        })}
        <text
          x="32"
          y="42"
          fill="#71717a"
          fontSize="11"
          fontFamily="JetBrains Mono, monospace"
          letterSpacing="2"
        >
          ANALOG SIGNAL ARCHITECTURE
        </text>
        <text
          x="32"
          y="312"
          fill="#e4e4e7"
          fontSize="12"
          fontFamily="Cinzel, serif"
          letterSpacing="3"
        >
          AKATSUKI ACOUSTICS
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 600 340"
      className="w-full h-56 sm:h-64 object-cover bg-[#08080a] border-b border-zinc-800/80"
      role="img"
      aria-label={`${project.title} architectural preview`}
    >
      <rect width="600" height="340" fill="#070709" />
      <polygon
        points="90,235 470,95 520,115 130,255"
        fill="none"
        stroke="#e11d48"
        strokeWidth="1.75"
      />
      <line x1="90" y1="235" x2="520" y2="115" stroke="#f4f4f5" strokeOpacity="0.35" />
      <text
        x="32"
        y="42"
        fill="#71717a"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        letterSpacing="2"
      >
        HIGH-CARBON FORGED METALLURGY
      </text>
      <text
        x="32"
        y="312"
        fill="#e4e4e7"
        fontSize="12"
        fontFamily="Cinzel, serif"
        letterSpacing="3"
      >
        SAKAI FORGED GUILD
      </text>
    </svg>
  );
}

export function WorksSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectFilterCategory>('All Works');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = filterProjects(PORTFOLIO_PROJECTS, selectedCategory);
  const discussProjectUrl = getWhatsAppUrlForAction('Discuss Your Project');
  const startProjectUrl = getStartProjectWhatsAppUrl();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="border-b border-zinc-900 bg-[#050505]"
    >
      {/* Subtle Editorial Marquee Ribbon Divider */}
      <div
        aria-hidden="true"
        className="overflow-hidden border-b border-zinc-900 bg-zinc-950/60 py-3 text-xs font-mono tracking-[0.2em] uppercase text-zinc-500"
      >
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          <span>Selected Works</span>
          <span className="text-rose-600">·</span>
          <span>Bespoke Web Architecture</span>
          <span className="text-rose-600">·</span>
          <span>{PROJECT_BUDGET_DISPLAY}</span>
          <span className="text-rose-600">·</span>
          <span>Crimson Noir Digital Craft</span>
          <span className="text-rose-600">·</span>
          <span>Selected Works</span>
          <span className="text-rose-600">·</span>
          <span>Bespoke Web Architecture</span>
          <span className="text-rose-600">·</span>
          <span>{PROJECT_BUDGET_DISPLAY}</span>
          <span className="text-rose-600">·</span>
          <span>Crimson Noir Digital Craft</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-3">
            <p className="text-xs font-mono tracking-widest uppercase text-rose-500">
              01. Curated Archive
            </p>
            <h2
              id="works-heading"
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100"
              style={{ textWrap: 'balance' }}
            >
              Selected Digital Commissions
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
              Every commission is engineered from the ground up for visual authority, instant
              response, and measurable commercial outcomes.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="group"
            aria-label="Filter projects by discipline"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-950 border border-zinc-800/80 rounded-lg self-start lg:self-auto"
          >
            {FILTER_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const isWide = idx % 3 === 0;
            return (
              <article
                key={project.id}
                className={`${
                  isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                } group rounded-2xl border border-zinc-800/80 bg-zinc-950/50 overflow-hidden flex flex-col justify-between hover:border-rose-600/50 transition-colors duration-150`}
              >
                <div>
                  <ProjectVisualCanvas project={project} />

                  <div className="p-6 sm:p-8 space-y-4">
                    {/* Unboxed Metadata with Typographic Separators */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono tabular-nums">
                      <span className="text-rose-500">{project.index}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-zinc-100 group-hover:text-rose-400 transition-colors duration-150">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Quantitative Proof Metric */}
                    <p className="font-mono text-xs text-zinc-200 pt-1 tabular-nums">
                      Outcome: <span className="text-rose-400">{project.metric}</span>
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 sm:px-8 py-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4 bg-[#050505]/40">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-semibold tracking-wider uppercase text-zinc-200 hover:text-rose-400 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Read Case Study →
                  </button>

                  <a
                    href={discussProjectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-400 hover:text-rose-300 transition-colors duration-150 whitespace-nowrap shrink-0"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Minimal Bar Below Works */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs sm:text-sm text-zinc-300 tabular-nums">
            {PROJECT_BUDGET_DISPLAY} · Custom Scope &amp; Direct Delivery
          </p>
          <a
            href={discussProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-rose-600 rounded-md hover:bg-rose-500 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Fullscreen Case Study Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs"
        >
          <div className="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-[#09090b] p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="font-mono text-xs text-rose-500 tabular-nums">
                  {activeProject.index} · {activeProject.category} · {activeProject.year}
                </p>
                <h3
                  id="case-study-modal-title"
                  className="font-display text-2xl font-bold text-zinc-100"
                >
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close case study modal"
                className="p-2 rounded-md border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors duration-150 cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed border-y border-zinc-800/80 py-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  The Challenge
                </h4>
                <p>{activeProject.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Architectural Execution &amp; Outcome
                </h4>
                <p>{activeProject.outcome}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Deliverables
                </h4>
                <p className="text-zinc-200">
                  {activeProject.deliverables.join(' · ')}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-900">
                <span className="font-mono text-xs text-rose-400 tabular-nums">
                  Verified Result: {activeProject.metric}
                </span>
                <span className="font-mono text-xs text-zinc-300 tabular-nums">
                  {PROJECT_BUDGET_DISPLAY}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <a
                href={startProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-rose-600 rounded-md hover:bg-rose-500 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={discussProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-zinc-200 border border-zinc-800 rounded-md hover:border-rose-600/60 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
