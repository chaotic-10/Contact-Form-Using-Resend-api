import { defineConfig } from 'vite';

import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
 
  };
});
