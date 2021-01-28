import * as ts from "@fal-works/ts-transpile-modules";

import type { Config } from "./config";
import { create as createOptions } from "./options.js";

/**
 * Prepare transpiling functions.
 */
export const prepare = (config?: Config) => {
  const options = createOptions(config);

  const transpile = (srcDir: string, outDir: string) =>
    ts.transpileModules(srcDir, outDir, options);

  return { transpile };
};
