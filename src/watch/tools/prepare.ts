import type { Config } from "./config";

import * as esbuildBundle from "./esbuild/index.js";
import * as esbuildMinify from "./esbuild-minify/index.js";

/**
 * Prepare incremental build functions from a single `Config` object.
 */
export const prepare = (config?: Config) => ({
  ...esbuildBundle.prepare(config),
  ...esbuildMinify.prepare(),
});
