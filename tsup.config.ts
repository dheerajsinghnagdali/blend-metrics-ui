import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "components/ui/index.ts",
    "lib/functions.ts",
    "lib/hooks.ts",
    "lib/dom-utils.ts",
    "lib/react-utils.ts"
  ],
  dts: true,
  format: ["cjs", "esm"]
});
