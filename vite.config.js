import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { BsYoutube } from 'react-icons/bs'

// https://vite.dev/config/
export default defineConfig({
  base: "https://blowninsulationservices.com/", // Important for GitHub Pages
  plugins: [react(), tailwindcss()],
})
