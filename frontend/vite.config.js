import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permet d'écouter sur 0.0.0.0 pour Docker
    port: 5173,
    watch: {
      usePolling: true, // Améliore le rafraîchissement à chaud dans Docker sous Windows
    },
  },
})
