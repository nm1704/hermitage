import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
export default defineConfig({
  plugins: [react()],
})
