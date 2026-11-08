export const WHATSAPP_PHONE_LOCAL = '7853025466';
export const WHATSAPP_PHONE_INTL = '917853025466';
export const WHATSAPP_DISPLAY_PHONE = '+91 78530 25466';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE_INTL}`;

export const PROJECT_BUDGET_DISPLAY = 'PROJECT BUDGET: ₹10K – ₹30K';

export const START_PROJECT_MESSAGE = `Hello Ankit! I visited your portfolio and I'm interested in working with you.

My Name:
Business Name:
Project Type:
Budget:
Project Requirements:

I'd like to discuss my website project with you.`;

export interface CustomBriefFields {
  name?: string;
  businessName?: string;
  projectType?: string;
  budget?: string;
  requirements?: string;
}

/**
 * Builds the exact pre-filled message for "Start Project" (and optionally populates brief fields if provided).
 */
export function buildStartProjectMessage(fields?: CustomBriefFields): string {
  if (!fields) {
    return START_PROJECT_MESSAGE;
  }
  const hasAnyField = Boolean(
    fields.name?.trim() ||
      fields.businessName?.trim() ||
      fields.projectType?.trim() ||
      fields.budget?.trim() ||
      fields.requirements?.trim()
  );

  if (!hasAnyField) {
    return START_PROJECT_MESSAGE;
  }

  const nameVal = fields.name?.trim() ? ` ${fields.name.trim()}` : '';
  const bizVal = fields.businessName?.trim() ? ` ${fields.businessName.trim()}` : '';
  const typeVal = fields.projectType?.trim() ? ` ${fields.projectType.trim()}` : '';
  const budgetVal = fields.budget?.trim() ? ` ${fields.budget.trim()}` : '';
  const reqVal = fields.requirements?.trim() ? ` ${fields.requirements.trim()}` : '';

  return `Hello Ankit! I visited your portfolio and I'm interested in working with you.

My Name:${nameVal}
Business Name:${bizVal}
Project Type:${typeVal}
Budget:${budgetVal}
Project Requirements:${reqVal}

I'd like to discuss my website project with you.`;
}

/**
 * Returns the WhatsApp URL with the URL-encoded pre-filled message for "Start Project" buttons.
 */
export function getStartProjectWhatsAppUrl(fields?: CustomBriefFields): string {
  const message = buildStartProjectMessage(fields);
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns the direct WhatsApp URL or pre-filled WhatsApp URL depending on button intent.
 * All buttons open https://wa.me/917853025466 directly.
 */
export type ContactButtonType =
  | 'Contact'
  | 'Contact Me'
  | "Let's Connect"
  | 'Start Project'
  | 'Start Your Project'
  | 'Discuss Your Project'
  | 'Send Me a Message';

export function getWhatsAppUrlForAction(
  action: ContactButtonType,
  fields?: CustomBriefFields
): string {
  switch (action) {
    case 'Start Project':
    case 'Start Your Project':
    case 'Discuss Your Project':
      return getStartProjectWhatsAppUrl(fields);
    case 'Contact':
    case 'Contact Me':
    case "Let's Connect":
    case 'Send Me a Message':
    default:
      return WHATSAPP_BASE_URL;
  }
}

export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  client: string;
  category: 'Web Architecture' | 'Brand Systems' | 'Interactive Experience';
  year: string;
  summary: string;
  challenge: string;
  outcome: string;
  metric: string;
  deliverables: string[];
  featured?: boolean;
  accentTone: 'crimson' | 'obsidian' | 'ember';
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'kuro-atelier',
    index: '01',
    title: 'Kuro Atelier — Bespoke Horology Flagship',
    client: 'Kuro Timepieces Tokyo',
    category: 'Web Architecture',
    year: '2026',
    summary:
      'High-contrast editorial digital flagship engineered for a bespoke mechanical watchmaker, pairing tactile macro product storytelling with sub-second page transitions.',
    challenge:
      'Translate the quiet precision of hand-assembled tourbillon calibres into a dark-mode web presence without sacrificing mobile speed or conversion clarity.',
    outcome:
      'Delivered a custom WebGL-free high-frame-rate showcase that elevated private collector inquiries within the first quarter.',
    metric: '+165% Private Collector Inquiries in 90 Days',
    deliverables: ['Bespoke Web Design', 'Frontend Architecture', 'Interactive Calibre Explorer'],
    featured: true,
    accentTone: 'crimson',
  },
  {
    id: 'ronin-capital',
    index: '02',
    title: 'Ronin Venture Lab — Sovereign Deep-Tech Portal',
    client: 'Ronin Partners',
    category: 'Brand Systems',
    year: '2026',
    summary:
      'Minimalist institutional web presence and thesis monograph system for an early-stage hardware and robotics fund.',
    challenge:
      'Replace fragmented investor PDFs with a unified, authoritative digital publication that communicates technical conviction at first glance.',
    outcome:
      'Established a cohesive Crimson Noir visual language across thesis essays, portfolio company directories, and founder onboarding.',
    metric: '2.4x Longer Founder Session Duration',
    deliverables: ['Visual Identity System', 'Editorial Design', 'Responsive Web Platform'],
    featured: false,
    accentTone: 'obsidian',
  },
  {
    id: 'akatsuki-sound',
    index: '03',
    title: 'Akatsuki Acoustics — Reference Mastering Studio',
    client: 'Akatsuki Audio Lab',
    category: 'Interactive Experience',
    year: '2025',
    summary:
      'Acoustic room architecture showcase and direct booking portal designed for an analog vinyl and spatial audio mastering facility.',
    challenge:
      'Present complex acoustic treatment specifications and gear signal chains in an intuitive, high-impact layout that drives direct studio bookings.',
    outcome:
      'Streamlined engineer booking workflows and direct WhatsApp studio consultation scheduling.',
    metric: '+120% Direct Studio Bookings in 60 Days',
    deliverables: ['Interactive Signal Chain View', 'UI/UX Direction', 'Performance Optimization'],
    featured: false,
    accentTone: 'ember',
  },
  {
    id: 'shogun-blades',
    index: '04',
    title: 'Sakai Forged — Heritage Culinary Coutellerie',
    client: 'Sakai Craft Guild',
    category: 'Web Architecture',
    year: '2025',
    summary:
      'Direct-to-chef digital storefront and steel metallurgy guide for hand-forged high-carbon culinary knives.',
    challenge:
      'Honor six centuries of forging heritage in a modern, lightning-fast web experience with zero visual clutter.',
    outcome:
      'Crafted an atmospheric dark-surface showcase highlighting steel patina, blade geometry, and direct artisan commissioning.',
    metric: '99/100 Lighthouse Performance Score',
    deliverables: ['Custom Storefront UI', 'Art Direction', 'Mobile-First Engineering'],
    featured: true,
    accentTone: 'crimson',
  },
];

export type ProjectFilterCategory =
  | 'All Works'
  | 'Web Architecture'
  | 'Brand Systems'
  | 'Interactive Experience';

export function filterProjects(
  projects: PortfolioProject[],
  category: ProjectFilterCategory
): PortfolioProject[] {
  if (category === 'All Works') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}
