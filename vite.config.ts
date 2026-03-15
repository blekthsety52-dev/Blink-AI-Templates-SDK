import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    // Explicitly block any accidental GEMINI_ exposure
    envPrefix: 'VITE_', // only VITE_* vars reach the browser bundle
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // Manual chunk splitting — keeps vendor code out of your app chunk
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'motion': ['motion'],
            'icons': ['lucide-react'],
            'validation': ['zod'],
          },
        },
      },
      // Warn if any single chunk exceeds 400kb
      chunkSizeWarningLimit: 400,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      port: 3000,
    },
  };
});
