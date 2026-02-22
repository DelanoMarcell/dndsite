import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['d0a3-41-76-101-118.ngrok-free.app'],
  },
});
