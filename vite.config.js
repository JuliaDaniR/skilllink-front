import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic'  // esto hace que no sea necesario importar React en cada archivo JSX
  })],
})
