/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-notifications-json',
      configureServer(server) {
        server.middlewares.use('/config/notifications.json', (_, res) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify([
              {
                id: 'test-notification',
                title: { fi: 'Testi-ilmoitus', sv: 'Testnotis', en: 'Test notification' },
                description: {
                  fi: 'Tämä on testi-ilmoitus.',
                  sv: 'Detta är en testnotis.',
                  en: 'This is a test notification.',
                },
                variant: 'success' as const,
                link: {
                  label: { fi: 'Lue lisää', sv: 'Läs mer', en: 'Read more' },
                  url: {
                    fi: 'http://localhost:5173/fi',
                    sv: 'http://localhost:5173/sv',
                    en: 'http://localhost:5173/en',
                  },
                },
              },
            ]),
          );
        });
      },
    },
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['lcov'],
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://jodkehitys.fi',
        changeOrigin: true,
        xfwd: true,
      },
    },
  },
});
