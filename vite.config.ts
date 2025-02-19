import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'tsx', // Aseguramos que el loader soporte archivos TSX
    jsx: 'automatic', // JSX para React
  },
  resolve: {
    alias: {
      // Alias para que 'src' sea la ruta base
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
