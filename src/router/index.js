import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Home / Solution / About are in-app routes. The "Map" is the live Streamlit
// dashboard (external), so it is a normal link in the nav, not a route here.
const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'SiteSense 5G' } },
  {
    path: '/solution',
    name: 'solution',
    component: () => import('../views/Solution.vue'),
    meta: { title: 'Solution — SiteSense 5G' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: { title: 'About — SiteSense 5G' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta?.title || 'SiteSense 5G'
})

export default router
