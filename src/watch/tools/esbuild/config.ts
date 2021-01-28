import type { globalExternals } from "@fal-works/esbuild-plugin-global-externals";

export type Config = {
  globals: Parameters<typeof globalExternals>[0];
};
