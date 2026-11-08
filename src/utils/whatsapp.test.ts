import test from 'node:test';
import assert from 'node:assert/strict';
import {
  WHATSAPP_PHONE_LOCAL,
  WHATSAPP_PHONE_INTL,
  WHATSAPP_BASE_URL,
  PROJECT_BUDGET_DISPLAY,
  START_PROJECT_MESSAGE,
  buildStartProjectMessage,
  getStartProjectWhatsAppUrl,
  getWhatsAppUrlForAction,
  PORTFOLIO_PROJECTS,
  filterProjects,
  type ContactButtonType,
} from './whatsapp';

test('Project budget matches exact specification without tiers', () => {
  assert.equal(PROJECT_BUDGET_DISPLAY, 'PROJECT BUDGET: ₹10K – ₹30K');
});

test('WhatsApp phone number and base URL match specification', () => {
  assert.equal(WHATSAPP_PHONE_LOCAL, '7853025466');
  assert.equal(WHATSAPP_PHONE_INTL, '917853025466');
  assert.equal(WHATSAPP_BASE_URL, 'https://wa.me/917853025466');
});

test('Pre-filled Start Project WhatsApp message encodes and decodes accurately', () => {
  const url = getStartProjectWhatsAppUrl();
  assert.equal(url.startsWith('https://wa.me/917853025466?text='), true);

  const encodedText = url.replace('https://wa.me/917853025466?text=', '');
  const decodedText = decodeURIComponent(encodedText);

  assert.equal(decodedText, START_PROJECT_MESSAGE);
  assert.equal(
    decodedText.includes(
      "Hello Ankit! I visited your portfolio and I'm interested in working with you."
    ),
    true
  );
  assert.equal(decodedText.includes('My Name:'), true);
  assert.equal(decodedText.includes('Business Name:'), true);
  assert.equal(decodedText.includes('Project Type:'), true);
  assert.equal(decodedText.includes('Budget:'), true);
  assert.equal(decodedText.includes('Project Requirements:'), true);
  assert.equal(
    decodedText.includes("I'd like to discuss my website project with you."),
    true
  );
});

test('Custom brief fields populate the pre-filled message cleanly', () => {
  const msg = buildStartProjectMessage({
    name: 'Rohan',
    businessName: 'Kuro Studio',
    projectType: 'Portfolio Website',
    budget: '₹10K – ₹30K',
    requirements: 'Crimson Noir aesthetic with WhatsApp integration',
  });
  assert.equal(msg.includes('My Name: Rohan'), true);
  assert.equal(msg.includes('Business Name: Kuro Studio'), true);
  assert.equal(msg.includes('Budget: ₹10K – ₹30K'), true);
});

test('All 7 required contact button actions resolve to valid WhatsApp URLs', () => {
  const requiredButtons: ContactButtonType[] = [
    'Contact',
    'Contact Me',
    "Let's Connect",
    'Start Project',
    'Start Your Project',
    'Discuss Your Project',
    'Send Me a Message',
  ];

  for (const button of requiredButtons) {
    const url = getWhatsAppUrlForAction(button);
    assert.equal(
      url.startsWith('https://wa.me/917853025466'),
      true,
      `Button "${button}" must link to https://wa.me/917853025466`
    );
  }
});

test('Portfolio projects filter by category accurately', () => {
  assert.equal(filterProjects(PORTFOLIO_PROJECTS, 'All Works').length, 4);
  assert.equal(filterProjects(PORTFOLIO_PROJECTS, 'Web Architecture').length, 2);
  assert.equal(filterProjects(PORTFOLIO_PROJECTS, 'Brand Systems').length, 1);
  assert.equal(filterProjects(PORTFOLIO_PROJECTS, 'Interactive Experience').length, 1);
});
