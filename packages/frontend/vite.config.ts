import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          primevue: [
            'primevue/config',
            'primevue/avatar',
            'primevue/button',
            'primevue/card',
            'primevue/tag',
            'primevue/tabmenu',
            'primevue/progressbar',
            'primevue/dialog',
            'primevue/autocomplete',
            'primevue/dropdown',
            'primevue/inputnumber',
            'primevue/inputtext',
            'primevue/datatable',
            'primevue/column',
            'primevue/columngroup',
            'primevue/row'
          ]
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3333',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
