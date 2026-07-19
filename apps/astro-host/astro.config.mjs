// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@bhd-test/shared-domain': path.resolve('../../libs/shared-domain/src/index.ts'),
        '@bhd-test/ui-react': path.resolve('../../libs/ui-react/src/index.ts'),
      },
    },
  },
});