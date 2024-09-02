import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Use the environment-provided PORT or default to 5173
    host: true, // Listen on all network interfaces
  },
});
