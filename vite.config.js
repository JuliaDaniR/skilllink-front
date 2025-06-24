import { defineConfig } from 'vite'


export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu'],
    },
  },
});