import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/advanced-client-course-work/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
