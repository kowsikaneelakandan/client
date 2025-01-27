import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://realestate-26kt.onrender.com",
        changeOrigin: true, // Ensures the origin of the host header matches the target
        rewrite: (path) => path.replace(/^\/api/, ""), // Removes '/api' from the proxy request if the backend doesn't expect it
        secure: true, // Set to `true` since Render uses HTTPS
      }
    },
  },
  plugins: [react()],
});