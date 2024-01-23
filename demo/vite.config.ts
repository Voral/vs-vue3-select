import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../src', import.meta.url)),
      '@docs': fileURLToPath(
        new URL('../docs/docs/.vuepress/components/', import.meta.url),
      ),
    },
  },
})
