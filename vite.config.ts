import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: './extension',
    rollupOptions: {
      input: {
        popup: fileURLToPath(new URL('./popup.html', import.meta.url)),
        redirect: fileURLToPath(new URL('./redirect.html', import.meta.url)),
       
      },
    },
  },
})
