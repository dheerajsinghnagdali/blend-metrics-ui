import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    components: "components/ui/index.ts",
    functions: "lib/functions.ts",
    hooks: "lib/hooks.ts",
    "dom-utils": "lib/dom-utils.ts",
    "react-utils": "lib/react-utils.ts"
  },
  dts: true,
  format: ["cjs", "esm"],
  treeshake: true,
  sourcemap: "inline",
  minify: true,
  clean: true,
  splitting: false,
  external: ["react"],
  injectStyle: false
});
