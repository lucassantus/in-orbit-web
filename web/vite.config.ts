import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['dayjs/locale/pt-br'],
    },
  },
  plugins: [react()],
})
