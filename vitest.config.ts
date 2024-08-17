import { fileURLToPath, URL } from 'node:url';

import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude],
      globals: true,
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        exclude: [
          'src/App.vue',
          'src/main.ts',
          'src/const/**',
          'src/types/**',
          'src/*.d.ts',
          '*.config.{j,cj,mj,t,ct,mt}s',
          'src/**/*.spec.ts',
        ],
      },
    },
  }),
);
