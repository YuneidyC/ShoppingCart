import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/shoppingcart/',
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@Component': new URL('./src/component', import.meta.url).pathname,
      '@Context': new URL('./src/context', import.meta.url).pathname,
      '@Assets': new URL('./src/assets', import.meta.url).pathname,
      '@Pages': new URL('./src/pages', import.meta.url).pathname,
      '@Hooks': new URL('./src/hooks', import.meta.url).pathname,
      '@Styles': new URL('./src/styles', import.meta.url).pathname,
      '@Routes': new URL('./src/routes', import.meta.url).pathname,
    },
  },
});
