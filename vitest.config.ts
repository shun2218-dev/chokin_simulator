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
    },
  }),
);
