import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'public',
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'resources/js/app.js'),
        style: path.resolve(__dirname, 'resources/css/style.css'),
      },
      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.name)) return 'css/[name][extname]';
          if (/\.(woff2?|ttf|otf)$/.test(assetInfo.name)) return 'fonts/[name][extname]';
          if (/\.(png|jpe?g|svg|gif)$/.test(assetInfo.name)) return 'images/[name][extname]';
          return '[name][extname]';
        }
      }
    }
  }
});
