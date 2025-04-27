import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'admin.timetofitindia.com', // Add your domain here
      'server.timetofitindia.com', // Add the backend domain if needed
      'localhost', // Optionally add localhost for local development
    ],
    proxy: {
      '/api': {
        target: 'https://server.timetofitindia.com',
        changeOrigin: true,
        secure: true
      }
    }
  }
})
