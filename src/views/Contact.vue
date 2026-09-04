<script setup>
import { DASHBOARD_URL } from '../config'

const email = 'contact@sitesense5g.com'
</script>

<template>
  <section class="section head">
    <div class="wrap">
      <p class="section-kicker">Contact</p>
      <h1>Let's talk about your coverage gap.</h1>
      <p class="lede">
        Operator, regulator, or partner exploring GeoAI for network planning —
        we'd like to hear from you. Tell us the market you're planning and we'll
        show you what SiteSense&nbsp;5G can map.
      </p>
    </div>
  </section>

  <section class="section contact-main">
    <div class="wrap contact-grid">
      <div class="contact-card primary">
        <p class="cc-label">Email us</p>
        <a :href="`mailto:${email}`" class="cc-email">{{ email }}</a>
        <p class="cc-note">We reply within a couple of business days.</p>
        <a :href="`mailto:${email}?subject=SiteSense%205G%20enquiry`" class="btn btn-primary">Send an email</a>
      </div>

      <div class="contact-card">
        <p class="cc-label">Who you're reaching</p>
        <p class="cc-org">Team Neural Shield</p>
        <p class="cc-sub">Cambodia · ASEAN GeoAI Fusion 2026 Finalist</p>
        <p class="cc-sub">Registration HACK_KH_102</p>
        <a :href="DASHBOARD_URL" target="_blank" rel="noopener" class="cc-link">Explore the live dashboard →</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head h1 { font-size: clamp(2.1rem, 4.6vw, 3.2rem); max-width: 18ch; margin-bottom: 8px; }
.head .lede { max-width: 60ch; }

.contact-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 24px; }
.contact-card { background: var(--surface); border: 1px solid var(--border); border-radius: 18px; padding: 34px; }
.contact-card.primary { border-color: var(--cyan); }
.cc-label { font-family: var(--font-display); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.04em;
  color: var(--muted-2); text-transform: uppercase; margin-bottom: 14px; }
.cc-email { display: inline-block; font-family: var(--font-display); font-weight: 700;
  font-size: clamp(1.3rem, 2.6vw, 1.7rem); color: var(--cyan); margin-bottom: 10px; word-break: break-all; }
.cc-email:hover { color: var(--teal); }
.cc-note { color: var(--muted); font-size: 0.92rem; margin-bottom: 22px; }
.cc-org { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-bottom: 8px; }
.cc-sub { color: var(--muted); font-size: 0.96rem; margin-bottom: 5px; }
.cc-link { display: inline-block; margin-top: 16px; color: var(--cyan); font-weight: 600; font-size: 0.95rem; }
.cc-link:hover { color: var(--teal); }

@media (max-width: 800px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
