import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  server:{
    port:3000,
    proxy:{
      '/api/*': {
        target: 'http://localhost:8080' //local
      }
    }
  },
  plugins: [vue()],
  test:{
    environment: 'jsdom',
  },
  resolve:{
    alias:{
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})
