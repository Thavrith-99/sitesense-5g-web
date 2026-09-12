<script setup>
import NetworkCanvas from '../components/NetworkCanvas.vue'
import { DASHBOARD_URL, STATS } from '../config'

const steps = [
  { n: '1', t: 'See the network', d: 'Every existing cell mapped from open OpenCelliD data — 4G, 5G, and legacy layers.' },
  { n: '2', t: 'Find the gap', d: 'Population and settlements overlaid on coverage to quantify who is left unserved.' },
  { n: '3', t: 'Spot the strain', d: 'Cells under unusually high demand flagged as a proxy for where the network is straining.' },
  { n: '4', t: 'Recommend the site', d: 'A weighted model ranks candidate sites and attaches a build cost and a rollout order.' },
]
</script>

<template>
  <!-- HERO: the live network is the signature visual -->
  <section class="hero">
    <NetworkCanvas />
    <div class="wrap hero-inner">
      <p class="hero-kicker">GeoAI decision-support for telecom planning</p>
      <h1 class="hero-title">Where should the next<br />5G tower go?</h1>
      <p class="hero-lede">
        SiteSense&nbsp;5G turns coverage-blind, manual tower planning into a
        transparent, costed, ROI-ranked deployment plan — piloted on Penang,
        Malaysia, and built to replicate across ASEAN.
      </p>
      <div class="hero-actions">
        <a :href="DASHBOARD_URL" target="_blank" rel="noopener" class="btn btn-primary">Launch the live map</a>
        <router-link to="/solution" class="btn btn-ghost">See how it works</router-link>
      </div>
    </div>
    <div class="hero-fade"></div>
  </section>

  <!-- PROBLEM -->
  <section class="section">
    <div class="wrap">
      <p class="section-kicker">The problem</p>
      <h2>Coverage decisions are still made blind.</h2>
      <p class="lede">
        Across ASEAN, operators and regulators still choose where to build the
        next tower with manual, coverage-blind methods. Capital is spent on the
        wrong sites while whole communities stay offline — and the digital divide
        widens.
      </p>
    </div>
  </section>

  <!-- PENANG READOUT: real figures, colour-coded to their map meaning -->
  <section class="section readout-section">
    <div class="wrap">
      <p class="section-kicker">The Penang pilot, in numbers</p>
      <p class="readout-scope found">
        <span class="rs-tag">What it found</span>
        {{ STATS.scope }} · max coverage range {{ STATS.maxRange }} · high-demand threshold {{ STATS.demandThreshold }}
      </p>
      <div class="readout">
        <div class="readout-lead">
          <div class="readout-fig">{{ STATS.underserved }}</div>
          <div class="readout-cap">people in estimated underserved areas</div>
        </div>
        <div class="readout-grid">
          <div class="ro amber"><span class="ro-n">{{ STATS.villages }}</span><span class="ro-l">villages / kampungs underserved</span></div>
          <div class="ro red"><span class="ro-n">{{ STATS.highDemand }}</span><span class="ro-l">estimated high-demand cells</span></div>
          <div class="ro green"><span class="ro-n">{{ STATS.gapClosed }}</span><span class="ro-l">of the gap closed by {{ STATS.sites }} recommended sites</span></div>
          <div class="ro cyan"><span class="ro-n">{{ STATS.capex }}</span><span class="ro-l">estimated capex · {{ STATS.perThousand }} people per $1,000</span></div>
        </div>
      </div>
      <p class="readout-scope rec">
        <span class="rs-tag">Preliminary recommendations</span>
        {{ STATS.sites }} sites · new 5G tower range {{ STATS.towerRange }} · {{ STATS.profile }} profile
      </p>
      <p class="readout-note">
        Estimated from open data (OpenCelliD, WorldPop, OpenStreetMap, Ookla) —
        a range-based proxy, not verified operator coverage.
      </p>
    </div>
  </section>

  <!-- HOW IT WORKS: a genuine 4-step sequence -->
  <section class="section">
    <div class="wrap">
      <p class="section-kicker">How it works</p>
      <h2>From a coverage map to a fundable plan.</h2>
      <ol class="steps">
        <li v-for="s in steps" :key="s.n">
          <span class="step-n">{{ s.n }}</span>
          <div>
            <h3>{{ s.t }}</h3>
            <p>{{ s.d }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- TRUST -->
  <section class="section trust">
    <div class="wrap trust-inner">
      <div><strong>Top 17 of 159</strong><span>ASEAN GeoAI Fusion 2026 finalist</span></div>
      <div><strong>Mentor-reviewed</strong><span>Methodology validated by Assoc. Prof. Dr. Asmidar Binti Abu Bakar</span></div>
      <div><strong>Live &amp; deployed</strong><span>Full stack running on a public, HTTPS-secured host</span></div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section cta">
    <div class="wrap cta-inner">
      <h2>Explore the live Penang pilot.</h2>
      <p class="lede">Open the interactive dashboard — change the assumptions and watch the coverage gap, recommendations and cost recompute in real time.</p>
      <a :href="DASHBOARD_URL" target="_blank" rel="noopener" class="btn btn-primary">Launch the live map</a>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; overflow: hidden; border-bottom: 1px solid var(--border); }
.hero-inner { position: relative; z-index: 2; padding: 128px 0 132px; }
.hero-fade { position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background: radial-gradient(120% 90% at 15% 30%, transparent 40%, rgba(10,14,21,0.55) 100%); }
.hero-kicker { position: relative; z-index: 2; font-family: var(--font-display); font-weight: 600;
  color: var(--cyan); margin-bottom: 20px; font-size: 0.98rem; }
.hero-title { position: relative; z-index: 2; font-size: clamp(2.6rem, 6.5vw, 4.6rem); font-weight: 700;
  letter-spacing: -0.02em; margin-bottom: 22px; }
.hero-lede { position: relative; z-index: 2; color: var(--muted); font-size: 1.16rem; max-width: 56ch; margin-bottom: 34px; }
.hero-actions { position: relative; z-index: 2; display: flex; gap: 14px; flex-wrap: wrap; }

.readout-section { background: var(--surface); }
.readout { display: grid; grid-template-columns: minmax(240px, 1fr) 1.4fr; gap: 40px; align-items: center; margin-top: 26px; }
.readout-lead { border-left: 3px solid var(--amber); padding-left: 22px; }
.readout-fig { font-family: var(--font-display); font-weight: 700; font-size: clamp(3rem, 7vw, 4.6rem);
  line-height: 1; color: var(--text); }
.readout-cap { color: var(--muted); margin-top: 10px; font-size: 1.02rem; max-width: 22ch; }
.readout-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border);
  border: 1px solid var(--border); border-radius: 14px; overflow: hidden; }
.ro { background: var(--surface-2); padding: 22px 24px; display: flex; flex-direction: column; gap: 6px; }
.ro-n { font-family: var(--font-display); font-weight: 700; font-size: 1.9rem; line-height: 1; }
.ro-l { color: var(--muted); font-size: 0.92rem; }
.ro.amber .ro-n { color: var(--amber); }
.ro.red .ro-n { color: var(--red); }
.ro.green .ro-n { color: var(--green); }
.ro.cyan .ro-n { color: var(--cyan); }
.readout-scope { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 10px;
  font-family: var(--font-display); font-size: 0.9rem; color: var(--muted); }
.readout-scope.found { margin: 6px 0 22px; }
.readout-scope.rec { margin: 24px 0 0; }
.rs-tag { font-weight: 700; text-transform: uppercase; letter-spacing: .03em; font-size: 0.8rem; }
.readout-scope.found .rs-tag { color: var(--cyan); }
.readout-scope.rec .rs-tag { color: var(--green); }
.readout-note { color: var(--muted-2); font-size: 0.9rem; margin-top: 22px; max-width: 68ch; }

.steps { list-style: none; padding: 0; margin: 40px 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 28px 48px; }
.steps li { display: flex; gap: 20px; align-items: flex-start; }
.step-n { font-family: var(--font-display); font-weight: 700; font-size: 1.05rem; color: #04141a;
  width: 34px; height: 34px; border-radius: 9px; display: grid; place-items: center; flex-shrink: 0;
  background: var(--grad); }
.steps h3 { font-size: 1.18rem; margin-bottom: 7px; }
.steps p { color: var(--muted); font-size: 0.98rem; }

.trust { background: var(--surface); }
.trust-inner { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
.trust strong { font-family: var(--font-display); font-size: 1.28rem; color: var(--cyan); display: block; margin-bottom: 8px; }
.trust span { color: var(--muted); font-size: 0.96rem; }

.cta-inner { text-align: left; }
.cta-inner .lede { margin-bottom: 28px; }

@media (max-width: 800px) {
  .hero-inner { padding: 90px 0 96px; }
  .readout { grid-template-columns: 1fr; gap: 28px; }
  .steps { grid-template-columns: 1fr; }
  .trust-inner { grid-template-columns: 1fr; gap: 26px; }
}
@media (max-width: 560px) {
  .readout-grid { grid-template-columns: 1fr; }
}
</style>
