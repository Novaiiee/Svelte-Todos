import { svelte } from '@sveltejs/vite-plugin-svelte';
import preprocess from "svelte-preprocess";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: preprocess()
  })]
})
