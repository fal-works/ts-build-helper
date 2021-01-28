import type { BuildIncremental } from "esbuild";
import * as chokidarIncremental from "@fal-works/chokidar-incremental";

import { preparePaths } from "./paths.js";
import { prepare as prepareTools } from "./tools/prepare.js";

import type { Paths } from "./paths";
import type { Config } from "./tools";
export type { Paths, Config };

/**
 * - Watch with chokidar
 * - Bundle and minify with esbuild
 */
export const watch = async (
  paths: Paths,
  config?: Config,
  watchOptions?: chokidarIncremental.Options<BuildIncremental>
): Promise<void> => {
  const { dirs, files } = preparePaths(paths);
  const { bundle, minify } = prepareTools(config);

  const onStart = async () => {
    const { rebuild: rebundle } = await bundle(files.srcEntry, files.dist);
    const { rebuild: reminify } = await minify(files.dist, files.distMin);

    return {
      onChange: () => rebundle().then(reminify),
      onExit: () => {
        rebundle.dispose();
        reminify.dispose();
      },
    };
  };

  await chokidarIncremental.watch(`${dirs.src}/**/*.ts`, onStart, watchOptions);
};
