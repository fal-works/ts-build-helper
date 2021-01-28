import type { Config } from "./config";

import * as typescript from "./typescript/index.js";
import * as rollup from "./rollup/index.js";
import * as prettier from "./prettier/index.js";
import * as esbuildMinify from "./esbuild-minify/index.js";

/**
 * Prepare several build process functions from a single `Config` object.
 */
export const prepare = (config?: Config) => ({
  ...typescript.prepare(config),
  ...rollup.prepare(config),
  ...prettier.prepare(),
  ...esbuildMinify.prepare(config),
});
