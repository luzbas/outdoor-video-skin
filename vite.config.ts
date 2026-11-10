import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const path = (file: string) => fileURLToPath(new URL(file, import.meta.url));

// The demo page in demo/ shows only the player; `@/` imports reach the skin in src/.
export default defineConfig({
  root: path('./demo'),
  // Relative URLs, so the build works at a domain root or in a subfolder such as GitHub Pages.
  base: './',
  plugins: [react()],
  resolve: {
    alias: { '@': path('./src') },
  },
  server: { fs: { allow: [path('.')] } },
  build: {
    outDir: path('./dist'),
    emptyOutDir: true,
  },
});
