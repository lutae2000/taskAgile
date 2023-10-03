import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  //root: path.resolve(__dirname, 'src'),
  server:{
    port:5173,
    proxy:{
      '/api/*': {
        target: 'http://localhost:8080', //local
        changeOrigin: true,
        rewrite: (path) => path.replace('^/', ''),
        secure: false,
        ws: true
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
      '/@': path.resolve(__dirname, './src'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@pages': path.resolve(__dirname, './src/pages'),
      '/@services': path.resolve(__dirname, './src/services')
    }
  }
})
