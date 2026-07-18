import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three-vendor';
            }
            if (id.includes('swiper')) {
              return 'swiper-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion-vendor';
            }
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 800
  }
})
