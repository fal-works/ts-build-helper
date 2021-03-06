import { Paths, RequiredPaths, prepare as preparePaths } from "../paths.js";
import { prepare as prepareTools } from "./tools/index.js";
import type { Config } from "./tools";

export { prepareTools };
export { typescript, rollup, prettier, esbuildMinify } from "./tools/index.js";
export type { Config };

/**
 * Build scripts for distribution.
 *
 * - Transpile with TypeScript
 * - Bundle with Rollup
 * - Minify with esbuild
 * - Format with Prettier
 */
export const run = async (
  paths: Paths | RequiredPaths,
  config: Config
): Promise<void> => {
  const requiredPaths = "files" in paths ? paths : preparePaths(paths);
  const { dirs, files } = requiredPaths;
  const { transpile, bundle, minifyWrite, formatWrite } = prepareTools(config);

  await transpile(dirs.src, dirs.tsOut);

  const bundledCode = await bundle(files.tsOutEntry);

  const writeDistMin = minifyWrite(bundledCode, files.distMin);
  const writeDist = formatWrite(bundledCode, files.dist);

  await Promise.all([writeDist, writeDistMin]);
};
