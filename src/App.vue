<script setup>
import { ref } from 'vue'
import { DASHBOARD_URL } from './config'
const open = ref(false)
const close = () => (open.value = false)
</script>

<template>
  <header class="nav">
    <div class="wrap nav-inner">
      <router-link to="/" class="brand" @click="close">
        <svg viewBox="0 0 120 120" class="brand-mark" aria-hidden="true">
          <defs>
            <linearGradient id="navmark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#22d3ee" /><stop offset="1" stop-color="#2dd4bf" />
            </linearGradient>
          </defs>
          <g stroke="url(#navmark)" stroke-width="7" stroke-linecap="round" fill="none">
            <path d="M45 42 a 24 24 0 0 0 0 34" /><path d="M75 42 a 24 24 0 0 1 0 34" />
          </g>
          <circle cx="60" cy="53" r="8.5" fill="url(#navmark)" />
          <g stroke="url(#navmark)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M60 60 L60 96" /><path d="M47 98 L60 64 L73 98" />
          </g>
        </svg>
        <span class="brand-name">SiteSense&nbsp;5G</span>
      </router-link>

      <button class="nav-toggle" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span></span><span></span><span></span>
      </button>

      <nav class="nav-links" :class="{ open }">
        <router-link to="/" @click="close">Home</router-link>
        <a :href="DASHBOARD_URL" target="_blank" rel="noopener" class="nav-map" @click="close">Map</a>
        <router-link to="/solution" @click="close">Solution</router-link>
        <router-link to="/about" @click="close">About</router-link>
        <a :href="DASHBOARD_URL" target="_blank" rel="noopener" class="btn btn-primary nav-cta" @click="close">
          Launch dashboard
        </a>
      </nav>
    </div>
  </header>

  <main><router-view /></main>

  <footer class="foot">
    <div class="wrap foot-inner">
      <div class="foot-brand">
        <strong>SiteSense&nbsp;5G</strong>
        <span>GeoAI for telecommunication tower siting &amp; 5G coverage-gap planning.</span>
      </div>
      <div class="foot-cols">
        <div>
          <h4>Explore</h4>
          <router-link to="/">Home</router-link>
          <a :href="DASHBOARD_URL" target="_blank" rel="noopener">Live map</a>
          <router-link to="/solution">Solution</router-link>
          <router-link to="/about">About</router-link>
        </div>
        <div>
          <h4>Project</h4>
          <span>Team Neural Shield · Cambodia</span>
          <span>ASEAN GeoAI Fusion 2026</span>
          <span>Penang pilot · Malaysia</span>
        </div>
      </div>
    </div>
    <div class="wrap foot-legal">
      <span>© 2026 Team Neural Shield.</span>
      <span>Estimates from open data — not verified operator coverage.</span>
    </div>
  </footer>
</template>

<style scoped>
.nav { position: sticky; top: 0; z-index: 50;
  background: rgba(10,14,21,0.72); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border); }
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: 66px; }
.brand { display: inline-flex; align-items: center; gap: 10px; }
.brand-mark { width: 30px; height: 30px; }
.brand-name { font-family: var(--font-display); font-weight: 700; font-size: 1.16rem; letter-spacing: -0.01em; }
.nav-links { display: flex; align-items: center; gap: 30px; }
.nav-links a { font-size: 0.98rem; color: var(--muted); transition: color .14s ease; }
.nav-links a:hover, .nav-links a.router-link-active { color: var(--text); }
.nav-links a.router-link-active.router-link-exact-active { color: var(--cyan); }
.nav-map::after { content: ''; }
.nav-cta { color: #04141a !important; }
.nav-toggle { display: none; }

.foot { border-top: 1px solid var(--border); padding: 56px 0 30px; margin-top: 40px; }
.foot-inner { display: flex; justify-content: space-between; gap: 48px; flex-wrap: wrap; }
.foot-brand { max-width: 30ch; }
.foot-brand strong { font-family: var(--font-display); font-size: 1.1rem; display: block; margin-bottom: 8px; }
.foot-brand span { color: var(--muted); font-size: 0.95rem; }
.foot-cols { display: flex; gap: 60px; flex-wrap: wrap; }
.foot-cols h4 { font-size: 0.8rem; color: var(--muted-2); margin-bottom: 12px; font-weight: 600; }
.foot-cols a, .foot-cols span { display: block; color: var(--muted); font-size: 0.92rem; margin-bottom: 8px; }
.foot-cols a:hover { color: var(--cyan); }
.foot-legal { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap;
  margin-top: 40px; padding-top: 22px; border-top: 1px solid var(--border-soft);
  color: var(--muted-2); font-size: 0.82rem; }

@media (max-width: 800px) {
  .nav-toggle { display: flex; flex-direction: column; justify-content: center; gap: 5px;
    width: 42px; height: 42px; background: none; border: 1px solid var(--border);
    border-radius: 9px; cursor: pointer; }
  .nav-toggle span { display: block; width: 18px; height: 2px; background: var(--text); margin: 0 auto; }
  .nav-links { position: absolute; top: 66px; left: 0; right: 0; flex-direction: column;
    align-items: stretch; gap: 4px; padding: 14px 20px 20px;
    background: var(--surface); border-bottom: 1px solid var(--border);
    max-height: 0; overflow: hidden; padding-top: 0; padding-bottom: 0; }
  .nav-links.open { max-height: 340px; padding-top: 14px; padding-bottom: 20px; }
  .nav-links a { padding: 10px 4px; }
  .nav-cta { margin-top: 8px; justify-content: center; }
}
</style>
