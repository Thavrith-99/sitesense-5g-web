<script setup>
// The signature visual: a live, mouse-reactive node network — the literal
// "network" SiteSense analyses. Ported from the dashboard's login canvas so
// the brand is continuous. Respects prefers-reduced-motion (renders a single
// static frame instead of animating).
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)
let raf = null
let cleanup = null

onMounted(() => {
  const c = canvas.value
  const ctx = c.getContext('2d')
  const host = c.parentElement
  let W = 0, H = 0, DPR = 1, pts = []
  const mouse = { x: -9999, y: -9999 }
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function size() {
    DPR = Math.min(window.devicePixelRatio || 1, 2)
    W = host.clientWidth; H = host.clientHeight
    c.width = W * DPR; c.height = H * DPR
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
  }
  function init() {
    const n = Math.max(40, Math.min(90, Math.floor((W * H) / 17000)))
    pts = []
    for (let i = 0; i < n; i++) {
      pts.push({ x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.32, vy: (Math.random() - 0.5) * 0.32 })
    }
  }
  const D = 150, MD = 200
  function draw() {
    ctx.clearRect(0, 0, W, H)
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0 || p.x > W) p.vx *= -1
      if (p.y < 0 || p.y > H) p.vy *= -1
      const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy)
      if (d < MD && d > 0.1) { p.x += (dx / d) * 0.45; p.y += (dy / d) * 0.45 }
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy)
        if (d < D) {
          ctx.strokeStyle = 'rgba(34,211,238,' + (0.15 * (1 - d / D)) + ')'
          ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
        }
      }
    }
    if (mouse.x > -9000) {
      for (const p of pts) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy)
        if (d < MD) {
          ctx.strokeStyle = 'rgba(45,212,191,' + (0.36 * (1 - d / MD)) + ')'
          ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(p.x, p.y); ctx.stroke()
        }
      }
    }
    for (const p of pts) {
      ctx.fillStyle = 'rgba(130,205,225,0.75)'
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.2832); ctx.fill()
    }
  }
  function frame() { draw(); raf = requestAnimationFrame(frame) }

  function onMove(e) {
    const r = c.getBoundingClientRect()
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
  }
  function onLeave() { mouse.x = -9999; mouse.y = -9999 }
  function onResize() { size(); init() }

  size(); init()
  if (reduce) { draw() } else { frame() }
  window.addEventListener('resize', onResize)
  host.addEventListener('mousemove', onMove)
  host.addEventListener('mouseleave', onLeave)
  cleanup = () => {
    window.removeEventListener('resize', onResize)
    host.removeEventListener('mousemove', onMove)
    host.removeEventListener('mouseleave', onLeave)
  }
})

onBeforeUnmount(() => { if (raf) cancelAnimationFrame(raf); if (cleanup) cleanup() })
</script>

<template>
  <canvas ref="canvas" class="net-canvas" aria-hidden="true"></canvas>
</template>

<style scoped>
.net-canvas { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
</style>
