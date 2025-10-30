import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    host: '10.0.1.75', // IP manzilni o'zingizning tarmoq IP'siga moslang
    port: 5174, // Portni istalgan raqamga o'zgartirishingiz mumkin
    strictPort: true, // Port band bo'lsa, boshqa portga o'tmasligi uchun
    open: false, // Avtomatik brauzerda ochmasligi uchun
  },
})
