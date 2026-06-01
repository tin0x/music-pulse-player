import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import svgr from 'vite-plugin-svgr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ViteImageOptimizer(), svgr()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/1_app'),
      '@pages': path.resolve(__dirname, 'src/2_pages'),
      '@widgets': path.resolve(__dirname, 'src/3_widgets'),
      '@features': path.resolve(__dirname, 'src/4_features'),
      '@entities': path.resolve(__dirname, 'src/5_entities'),
      '@shared': path.resolve(__dirname, 'src/6_shared'),
    },
  },
});
