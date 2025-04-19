import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  base: '/proyecto-prototipo-2/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwind(),
        autoprefixer()
      ]
    }
  }
})