<script setup>
import { DASHBOARD_URL } from '../config'

// A real timeline (dated sequence) — numbered/ordered markers are justified here.
const journey = [
  { d: 'Selection', t: 'Top 17 of 159', b: 'Selected as a finalist in the ASEAN GeoAI Fusion 2026 among 159 teams across the region.' },
  { d: 'Bootcamps', t: 'Method validated', b: 'Two mentor bootcamps refined the architecture; the methodology was reviewed by Assoc. Prof. Dr. Asmidar Binti Abu Bakar.' },
  { d: 'Build', t: 'Live pilot shipped', b: 'A full PostGIS · FastAPI · LSTM · Streamlit stack deployed to a public host, piloted on Penang, Malaysia.' },
  { d: 'Sep 2026', t: 'Physical finale', b: 'Presenting the working system at the Physical Finale in Kuala Lumpur, 19–22 September 2026.' },
]

const roadmap = [
  { t: 'Multi-country replication', d: 'The engine is data-driven — swapping the OpenCelliD country code (Indonesia 510, Philippines 515, Singapore 525, Cambodia 456) retargets it to a new market.' },
  { t: 'Operator data intake', d: 'Let operators load their own measured coverage so estimates sharpen into verified plans.' },
  { t: 'Backhaul-aware costing', d: 'Refine build-cost estimates with real fibre-route and power-access data.' },
]

const team = [
  { name: 'Sroas Thavrith', role: 'Team Lead', photo: '/team/thavrith.jpg', linkedin: 'https://www.linkedin.com/in/thavrith-sroas-2ab64b1ab' },
  { name: 'Kunvuth Sereyrith', role: 'Data Engineer', photo: '/team/sereyrith.png', linkedin: 'https://www.linkedin.com/in/kunvuth-sereyrith-89bba9263' },
  { name: 'Rem Sonavin', role: 'Full-Stack Developer', photo: '/team/sonavin.jpg', linkedin: 'https://www.linkedin.com/in/sonavin-rem-900327315' },
]
const initials = (n) => n.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
const onImgError = (e) => { e.target.closest('.member-photo').classList.add('no-img') }
</script>

<template>
  <section class="section head">
    <div class="wrap">
      <p class="section-kicker">About</p>
      <h1>Built to close the coverage gap, not just map it.</h1>
      <p class="lede">
        SiteSense&nbsp;5G is the work of Team&nbsp;Neural&nbsp;Shield, a student team
        from Cambodia. We built it because deciding where a country's next tower
        goes still relies on guesswork — and the people left offline are the ones
        who can least afford the wait.
      </p>
    </div>
  </section>

  <!-- MISSION -->
  <section class="section mission-section">
    <div class="wrap mission">
      <blockquote>
        Every community should be a data point in the coverage decision — not an
        afterthought once the towers are already built.
      </blockquote>
      <p>
        Regulators and operators across ASEAN share the same problem: limited
        capital, incomplete data, and no transparent way to rank where to build
        first. We set out to turn that decision into something you can see,
        question, and defend.
      </p>
    </div>
  </section>

  <!-- JOURNEY -->
  <section class="section">
    <div class="wrap">
      <p class="section-kicker">The journey</p>
      <h2>From 159 teams to a live system.</h2>
      <ol class="timeline">
        <li v-for="(j, i) in journey" :key="i">
          <span class="tl-dot"></span>
          <div class="tl-body">
            <span class="tl-date">{{ j.d }}</span>
            <h3>{{ j.t }}</h3>
            <p>{{ j.b }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- TEAM -->
  <section class="section team-section">
    <div class="wrap">
      <p class="section-kicker">The team</p>
      <h2>Team Neural Shield</h2>
      <div class="team-grid">
        <article v-for="m in team" :key="m.name" class="member">
          <div class="member-photo">
            <img :src="m.photo" :alt="m.name" loading="lazy" @error="onImgError" />
            <div class="member-initials" aria-hidden="true">{{ initials(m.name) }}</div>
          </div>
          <div class="member-info">
            <h3>{{ m.name }}</h3>
            <p class="member-role">{{ m.role }}</p>
            <a :href="m.linkedin" target="_blank" rel="noopener" class="member-linkedin"
               :aria-label="`${m.name} on LinkedIn`">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8h4.5v16H.25V8zm7.5 0h4.31v2.19h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-6.68c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V24h-4.5V8z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ROADMAP -->
  <section class="section roadmap-section">
    <div class="wrap">
      <p class="section-kicker">What's next</p>
      <h2>Beyond Penang.</h2>
      <div class="roadmap">
        <div v-for="r in roadmap" :key="r.t" class="rm">
          <h3>{{ r.t }}</h3>
          <p>{{ r.d }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT / CTA -->
  <section class="section cta">
    <div class="wrap cta-inner">
      <h2>See the system for yourself.</h2>
      <p class="lede">The Penang pilot is live and interactive. Open it, change the assumptions, and watch the plan respond.</p>
      <div class="cta-actions">
        <a :href="DASHBOARD_URL" target="_blank" rel="noopener" class="btn btn-primary">Launch the live map</a>
        <router-link to="/solution" class="btn btn-ghost">Read the method</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head h1 { font-size: clamp(2.1rem, 4.6vw, 3.2rem); max-width: 20ch; margin-bottom: 8px; }
.head .lede { max-width: 64ch; }

.mission-section { background: var(--surface); }
.mission { max-width: 72ch; }
.mission blockquote { margin: 0 0 24px; padding: 0 0 0 26px; border-left: 3px solid var(--cyan);
  font-family: var(--font-display); font-size: clamp(1.4rem, 2.8vw, 2rem); line-height: 1.28; color: var(--text); }
.mission p { color: var(--muted); font-size: 1.06rem; }

.timeline { list-style: none; margin: 40px 0 0; padding: 0; }
.timeline li { position: relative; display: flex; gap: 24px; padding-bottom: 34px; }
.timeline li:last-child { padding-bottom: 0; }
.tl-dot { position: relative; flex-shrink: 0; width: 15px; height: 15px; border-radius: 50%;
  background: var(--grad); margin-top: 6px; }
.timeline li:not(:last-child) .tl-dot::after { content: ''; position: absolute; left: 50%; top: 15px;
  transform: translateX(-50%); width: 2px; height: calc(100% + 34px - 15px); background: var(--border); }
.tl-date { font-family: var(--font-display); font-size: 0.86rem; color: var(--cyan); }
.tl-body h3 { font-size: 1.24rem; margin: 4px 0 7px; }
.tl-body p { color: var(--muted); max-width: 62ch; }

.team-section { background: var(--surface); }
.team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin: 40px auto 0; max-width: 980px; }
.member { background: var(--bg); border: 1px solid var(--border); border-radius: 16px; overflow: hidden;
  transition: border-color .2s ease, transform .2s ease; }
.member:hover { border-color: var(--cyan); transform: translateY(-4px); }
.member-photo { position: relative; aspect-ratio: 4 / 5; background: var(--surface-2); }
.member-photo img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 32%;
  display: block; }
.member-initials { position: absolute; inset: 0; display: none; place-items: center;
  font-family: var(--font-display); font-weight: 700; font-size: 3rem; color: #04141a; background: var(--grad); }
.member-photo.no-img img { display: none; }
.member-photo.no-img .member-initials { display: grid; }
.member-info { padding: 18px 16px 22px; text-align: center; }
.member-info h3 { font-size: 1.08rem; margin-bottom: 4px; }
.member-role { color: var(--muted); font-size: 0.9rem; margin-bottom: 14px; }
.member-linkedin { display: inline-flex; align-items: center; gap: 7px; font-family: var(--font-display);
  font-weight: 600; font-size: 0.84rem; color: var(--cyan); border: 1px solid var(--border);
  padding: 7px 15px; border-radius: 9px; transition: border-color .15s ease, color .15s ease, background .15s ease; }
.member-linkedin:hover { border-color: var(--cyan); color: #04141a; background: var(--grad); }

.roadmap { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 40px; }
.rm { border-top: 2px solid var(--teal); padding-top: 18px; }
.rm h3 { font-size: 1.12rem; margin-bottom: 9px; }
.rm p { color: var(--muted); font-size: 0.95rem; }

.cta-inner { text-align: left; }
.cta-inner .lede { margin-bottom: 28px; }
.cta-actions { display: flex; gap: 14px; flex-wrap: wrap; }

@media (max-width: 800px) {
  .team-grid { grid-template-columns: 1fr; max-width: 300px; }
  .roadmap { grid-template-columns: 1fr; }
}
</style>
