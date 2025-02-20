import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://realestate-26kt.onrender.com",
        changeOrigin: true,
        secure: false
      },
    },
  },
  plugins: [react()],
});


// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://realestate-26kt.onrender.com",
//         changeOrigin: true,
//         secure: false
//       },
//     },
//   },

//   plugins: [react()],
// });
