import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Marketing shell for SiteSense 5G. The Map lives in the Streamlit dashboard;
// this site links out to it. Build with `npm run build` -> dist/ (static files
// a reverse proxy such as Caddy can serve).
export default defineConfig({
  plugins: [vue()],
  server: { host: true, port: 5174 },
  base: '/',
})
