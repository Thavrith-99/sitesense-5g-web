<script setup>
import { DASHBOARD_URL } from '../config'

const layers = [
  { c: 'red', t: 'Coverage', d: 'OpenCelliD cell towers (4G / 5G / legacy) mapped to their real service footprint.' },
  { c: 'amber', t: 'Demand', d: 'WorldPop population and OpenStreetMap settlements — where people actually live.' },
  { c: 'green', t: 'Terrain', d: 'Elevation and land shape that decide whether a mast can reach a village at all.' },
  { c: 'cyan', t: 'Traffic', d: 'Ookla speed-test observations used to train the demand-forecast model.' },
]

const stack = [
  { t: 'PostGIS', d: 'Spatial database — every layer lives as real geometry, queried by location.' },
  { t: 'FastAPI', d: 'Python service that runs the scoring and forecast, and serves results to the map.' },
  { t: 'LSTM (Keras)', d: 'Recurrent neural network trained on Ookla traffic to forecast demand growth.' },
  { t: 'Streamlit + Leafmap', d: 'The interactive map dashboard planners actually open and drive.' },
]
</script>

<template>
  <section class="section head">
    <div class="wrap">
      <p class="section-kicker">The solution</p>
      <h1>A transparent engine from open data to a ranked build plan.</h1>
      <p class="lede">
        SiteSense&nbsp;5G is not a coverage viewer. It is a decision tool: it
        combines four spatial layers, scores every candidate site, forecasts
        where demand is heading, and returns a costed, ordered list of where to
        build next — with the reasoning shown, not hidden.
      </p>
    </div>
  </section>

  <!-- FOUR LAYERS -->
  <section class="section">
    <div class="wrap">
      <p class="section-kicker">Step one — the inputs</p>
      <h2>Four layers, one question: who is underserved, and why?</h2>
      <div class="layers">
        <div v-for="l in layers" :key="l.t" class="layer" :class="l.c">
          <div class="layer-bar"></div>
          <h3>{{ l.t }}</h3>
          <p>{{ l.d }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TWO ENGINES -->
  <section class="section engines-section">
    <div class="wrap">
      <p class="section-kicker">Step two — two engines</p>
      <h2>Where to build now, and where demand is heading.</h2>
      <div class="engines">
        <article class="engine">
          <div class="engine-tag">Engine 1 · rule-based</div>
          <h3>MCDA site scoring</h3>
          <p>
            A multi-criteria decision analysis weights each candidate site on
            coverage gap, population served, terrain feasibility and distance to
            the nearest existing tower. The weights are explicit and adjustable —
            a planner can see exactly why a site ranks where it does.
          </p>
          <p class="engine-note">Transparent · no black box · reproducible</p>
        </article>
        <article class="engine">
          <div class="engine-tag">Engine 2 · learned</div>
          <h3>LSTM demand forecast</h3>
          <p>
            A recurrent neural network trained on Ookla traffic history projects
            how demand grows in each area, so a site is judged not only on today's
            gap but on the load it will carry tomorrow. This keeps the plan from
            over-building where growth is flat.
          </p>
          <p class="engine-note">Trained on real speed-test data · forward-looking</p>
        </article>
      </div>
    </div>
  </section>

  <!-- FROM MAP TO PLAN -->
  <section class="section">
    <div class="wrap">
      <p class="section-kicker">Step three — the output</p>
      <h2>Every recommendation carries its own justification.</h2>
      <p class="lede">A recommended site is never just a pin. It arrives with the numbers a budget owner needs to defend the spend:</p>
      <div class="output">
        <div class="out-row"><span class="out-k green">People reached</span><span class="out-v">+22,638 within the new footprint</span></div>
        <div class="out-row"><span class="out-k cyan">Nearest tower</span><span class="out-v">2,695 m — confirms it fills a genuine gap</span></div>
        <div class="out-row"><span class="out-k amber">Build cost</span><span class="out-v">Estimated from mast + fibre backhaul distance</span></div>
        <div class="out-row"><span class="out-k red">ROI rank</span><span class="out-v">People reached per $1,000 — the rollout order</span></div>
      </div>
    </div>
  </section>

  <!-- STACK -->
  <section class="section stack-section">
    <div class="wrap">
      <p class="section-kicker">Built on</p>
      <h2>An open, reproducible stack.</h2>
      <div class="stack">
        <div v-for="s in stack" :key="s.t" class="stk">
          <h3>{{ s.t }}</h3>
          <p>{{ s.d }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HONEST FRAMING -->
  <section class="section honest-section">
    <div class="wrap honest">
      <p class="section-kicker">What it is, and isn't</p>
      <h2>An estimate you can interrogate — not a claim of ground truth.</h2>
      <p class="lede">
        SiteSense&nbsp;5G works from open data, so its coverage and demand figures
        are transparent, range-based estimates — a planning proxy, not verified
        operator measurements. That is the point: every assumption is visible and
        adjustable, so an operator can load their own data and the same engine
        sharpens from estimate to plan.
      </p>
      <a :href="DASHBOARD_URL" target="_blank" rel="noopener" class="btn btn-primary">Try it on the live map</a>
    </div>
  </section>
</template>

<style scoped>
.head h1 { font-size: clamp(2.1rem, 4.6vw, 3.2rem); max-width: 20ch; margin-bottom: 8px; }
.head .lede { max-width: 64ch; }

.layers { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 40px; }
.layer { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 24px; }
.layer-bar { height: 4px; width: 42px; border-radius: 3px; margin-bottom: 18px; }
.layer.red .layer-bar { background: var(--red); }
.layer.amber .layer-bar { background: var(--amber); }
.layer.green .layer-bar { background: var(--green); }
.layer.cyan .layer-bar { background: var(--cyan); }
.layer h3 { font-size: 1.14rem; margin-bottom: 8px; }
.layer p { color: var(--muted); font-size: 0.95rem; }

.engines-section { background: var(--surface); }
.engines { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 40px; }
.engine { background: var(--bg); border: 1px solid var(--border); border-radius: 16px; padding: 34px; }
.engine-tag { font-family: var(--font-display); font-size: 0.82rem; color: var(--cyan); margin-bottom: 14px; }
.engine h3 { font-size: 1.5rem; margin-bottom: 14px; }
.engine p { color: var(--muted); margin-bottom: 14px; }
.engine-note { color: var(--teal); font-size: 0.88rem; margin-bottom: 0; }

.output { margin-top: 34px; border: 1px solid var(--border); border-radius: 14px; overflow: hidden; }
.out-row { display: grid; grid-template-columns: 200px 1fr; gap: 20px; padding: 20px 26px;
  border-top: 1px solid var(--border); align-items: center; }
.out-row:first-child { border-top: none; }
.out-k { font-family: var(--font-display); font-weight: 600; font-size: 1.02rem; }
.out-k.green { color: var(--green); } .out-k.cyan { color: var(--cyan); }
.out-k.amber { color: var(--amber); } .out-k.red { color: var(--red); }
.out-v { color: var(--muted); }

.stack-section { background: var(--surface); }
.stack { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 40px; }
.stk { border-left: 2px solid var(--border); padding: 4px 0 4px 18px; }
.stk h3 { font-size: 1.08rem; margin-bottom: 8px; color: var(--text); }
.stk p { color: var(--muted); font-size: 0.92rem; }

.honest { max-width: 70ch; }
.honest .lede { margin-bottom: 30px; }

@media (max-width: 900px) {
  .layers { grid-template-columns: 1fr 1fr; }
  .engines { grid-template-columns: 1fr; }
  .stack { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .layers { grid-template-columns: 1fr; }
  .stack { grid-template-columns: 1fr; }
  .out-row { grid-template-columns: 1fr; gap: 6px; }
}
</style>
