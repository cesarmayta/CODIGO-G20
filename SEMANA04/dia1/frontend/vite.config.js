import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@pages', replacement: path.resolve('src/pages') },
      { find: '@assets', replacement: path.resolve('src/assets') },
      { find: '@components', replacement: path.resolve('src/components') },
      { find: '@lib', replacement: path.resolve('src/lib') },
      { find: '@services', replacement: path.resolve('src/services') }
    ]
  }
})
