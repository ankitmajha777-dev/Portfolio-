import { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import {
  WHATSAPP_BASE_URL,
  WHATSAPP_DISPLAY_PHONE,
  PROJECT_BUDGET_DISPLAY,
  buildStartProjectMessage,
  getStartProjectWhatsAppUrl,
  type CustomBriefFields,
} from '../utils/whatsapp';

export function ContactSection() {
  const [showBriefCustomizer, setShowBriefCustomizer] = useState(false);
  const [briefFields, setBriefFields] = useState<CustomBriefFields>({
    name: '',
    businessName: '',
    projectType: '',
    budget: '',
    requirements: '',
  });

  const defaultStartProjectUrl = getStartProjectWhatsAppUrl();
  const customStartProjectUrl = getStartProjectWhatsAppUrl(briefFields);
  const previewMessage = buildStartProjectMessage(briefFields);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#050505] pt-20 pb-16 lg:pt-28 lg:pb-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Minimal & Premium Contact Experience Container */}
        <div className="rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-950/90 to-[#050505] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-6">
            {/* Minimal Project Budget Line */}
            <p
              data-testid="contact-project-budget"
              className="font-mono text-xs sm:text-sm font-medium tracking-[0.16em] text-rose-500 tabular-nums"
            >
              {PROJECT_BUDGET_DISPLAY}
            </p>

            {/* Exact Required Headline */}
            <h2
              id="contact-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 leading-[1.15]"
              style={{ textWrap: 'balance' }}
            >
              LET&apos;S CREATE SOMETHING EXTRAORDINARY.
            </h2>

            {/* Exact Required Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Have a project in mind? Let&apos;s turn your vision into a meaningful digital
              experience.
            </p>

            {/* Primary & Secondary WhatsApp Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={defaultStartProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-start-your-project-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wider uppercase text-white bg-rose-600 rounded-md hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>START YOUR PROJECT →</span>
              </a>

              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-contact-me-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wider uppercase text-zinc-200 border border-zinc-800 bg-zinc-950 rounded-md hover:border-rose-600/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>CONTACT ME →</span>
              </a>
            </div>

            {/* Optional Interactive Pre-Filled Brief Customizer Disclosure */}
            <div className="pt-4 border-t border-zinc-900/90">
              <button
                type="button"
                onClick={() => setShowBriefCustomizer((prev) => !prev)}
                aria-expanded={showBriefCustomizer}
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors duration-150 cursor-pointer"
              >
                <span>
                  {showBriefCustomizer
                    ? 'Hide Pre-Filled WhatsApp Brief Editor'
                    : 'Optional: Customize Pre-Filled WhatsApp Message Before Sending'}
                </span>
                {showBriefCustomizer ? (
                  <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                )}
              </button>

              {showBriefCustomizer && (
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-zinc-900">
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="brief-name"
                        className="block text-xs font-mono text-zinc-400 mb-1.5"
                      >
                        My Name
                      </label>
                      <input
                        id="brief-name"
                        type="text"
                        value={briefFields.name}
                        onChange={(e) =>
                          setBriefFields((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className="w-full rounded-md border border-zinc-800 bg-[#050505] px-3.5 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-rose-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="brief-business"
                        className="block text-xs font-mono text-zinc-400 mb-1.5"
                      >
                        Business Name
                      </label>
                      <input
                        id="brief-business"
                        type="text"
                        value={briefFields.businessName}
                        onChange={(e) =>
                          setBriefFields((prev) => ({
                            ...prev,
                            businessName: e.target.value,
                          }))
                        }
                        placeholder="Company or studio"
                        className="w-full rounded-md border border-zinc-800 bg-[#050505] px-3.5 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-rose-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="brief-type"
                        className="block text-xs font-mono text-zinc-400 mb-1.5"
                      >
                        Project Type
                      </label>
                      <input
                        id="brief-type"
                        type="text"
                        value={briefFields.projectType}
                        onChange={(e) =>
                          setBriefFields((prev) => ({
                            ...prev,
                            projectType: e.target.value,
                          }))
                        }
                        placeholder="Brand Website / Portfolio / E-Commerce"
                        className="w-full rounded-md border border-zinc-800 bg-[#050505] px-3.5 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-rose-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="brief-budget"
                        className="block text-xs font-mono text-zinc-400 mb-1.5"
                      >
                        Budget
                      </label>
                      <input
                        id="brief-budget"
                        type="text"
                        value={briefFields.budget}
                        onChange={(e) =>
                          setBriefFields((prev) => ({ ...prev, budget: e.target.value }))
                        }
                        placeholder="₹10K – ₹30K"
                        className="w-full rounded-md border border-zinc-800 bg-[#050505] px-3.5 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-rose-600 focus:outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="brief-requirements"
                        className="block text-xs font-mono text-zinc-400 mb-1.5"
                      >
                        Project Requirements
                      </label>
                      <textarea
                        id="brief-requirements"
                        rows={2}
                        value={briefFields.requirements}
                        onChange={(e) =>
                          setBriefFields((prev) => ({
                            ...prev,
                            requirements: e.target.value,
                          }))
                        }
                        placeholder="Key goals, pages, or timeline..."
                        className="w-full rounded-md border border-zinc-800 bg-[#050505] px-3.5 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-rose-600 focus:outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2 pt-1">
                      <a
                        href={customStartProjectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-rose-600 rounded-md hover:bg-rose-500 transition-colors duration-150 whitespace-nowrap shrink-0"
                      >
                        <span>Start Project</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-5 rounded-xl border border-zinc-900 bg-[#050505] p-4 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-mono text-zinc-500 mb-2">
                        WhatsApp Pre-Filled Message Preview:
                      </p>
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed">
                        {previewMessage}
                      </pre>
                    </div>
                    <p className="text-[11px] font-mono text-zinc-500 mt-4 pt-2 border-t border-zinc-900 tabular-nums">
                      Direct Destination: wa.me/917853025466
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Minimal Footer with All Direct WhatsApp Contact Links Verified */}
        <footer className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display font-bold tracking-[0.18em] text-zinc-200">
              ANKIT
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-zinc-300 tabular-nums">
              {PROJECT_BUDGET_DISPLAY}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">WhatsApp: {WHATSAPP_DISPLAY_PHONE}</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-zinc-400">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Contact
            </a>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Contact Me
            </a>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Let&apos;s Connect
            </a>
            <a
              href={defaultStartProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Start Project
            </a>
            <a
              href={defaultStartProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Discuss Your Project
            </a>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Send Me a Message
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
