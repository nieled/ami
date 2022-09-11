import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/main/webapp',
  build: {
    outDir: '../../../build/resources/main/static',
  },
  plugins: [react()],
})
