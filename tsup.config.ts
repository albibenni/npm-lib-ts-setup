import { defineConfig } from "tsup";

export default defineConfig(async () => {
  return [
    {
      entry: ["src/**/*.ts"],
      format: ["esm", "cjs"],
      dts: true,
      access: "public",
    },
  ];
});
