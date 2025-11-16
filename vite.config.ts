import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/mySite/",
  server: {
    // Allow ngrok host for local development tunnels
    allowedHosts: ["afb92d2d2269.ngrok-free.app"],
  },
  plugins: [react(), tailwindcss()],
});
