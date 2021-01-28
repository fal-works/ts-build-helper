import * as options from "./options/index.js";

export type Config = options.typescript.Config &
  options.esbuild.Config &
  options.rollup.Config;
