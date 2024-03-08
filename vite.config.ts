import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [remix(), vanillaExtractPlugin()],
});
