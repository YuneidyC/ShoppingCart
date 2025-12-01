import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@Component': '/src/component',
      '@Context': '/src/context',
      '@Assets': '/src/assets',
      '@Pages': '/src/pages',
      '@Hooks': '/src/hooks',
      '@Styles': '/src/styles'
    },
  },
});
