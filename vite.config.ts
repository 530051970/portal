import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  publicDir: "public",
  server: {
    middlewareMode: false
  },
  css: {
    devSourcemap: false, // 开启 CSS Sourcemaps
  },
  plugins: [react()],
})
