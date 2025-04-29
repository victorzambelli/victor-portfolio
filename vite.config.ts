import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: "/victor-portfolio",
    plugins: [react()],
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split(".");
                    const extType = info[info.length - 1];
                    if (/\.(jpe?g|png|gif|svg|ico)$/i.test(assetInfo.name)) {
                        return `assets/[name]-[hash][extname]`;
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
            },
        },
    },
}));
