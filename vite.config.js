// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: 'build',
    assetsDir: '',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        // ...
      },
    },
    rollupOptions: {
      // Make sure output is module type
      output: {
        format: 'module',
      },
    },
  },
});