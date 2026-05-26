import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && (() => {
      const tagger = componentTagger();
      const originalTransform = tagger.transform;
      // Skip tagging files that render react-three-fiber / rapier JSX,
      // because lovable-tagger injects `data-lov-id` props which R3F
      // treats as object paths (data.lov.id) and crashes at runtime.
      tagger.transform = function (code: string, id: string) {
        if (id.includes('/Lanyard/') || id.includes('ThreeCharacter')) {
          return null;
        }
        return (originalTransform as any).call(this, code, id);
      };
      return tagger;
    })(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
