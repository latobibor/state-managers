import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), checker({ typescript: true })],
  server: {
    open: true,
    port: 3000,
    host: 'localhost',
  },
  preview: {
    port: 3000,
  },
})
