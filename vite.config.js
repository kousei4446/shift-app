import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
            manifest: {
              name: 'ShiftApp',
              short_name: 'ShiftApp',
              description: 'シフト管理を簡単にするWebアプリ',
              theme_color: '#ffffff',
              background_color: '#ffffff',
              display: 'standalone',
              start_url: '/',
              icons: [
                {
                  src: '/icons/icon-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
                },
                {
                  src: '/icons/icon-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                }
              ],
            },
          })
    ],
});
