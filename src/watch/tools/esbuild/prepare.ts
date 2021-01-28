import esbuild from "esbuild";
import { printEsbuildWarn } from "../../../util/esbuild-warn.js";

import type { Config } from "./config";
import { create as createOptions } from "./options.js";

export const prepare = (config?: Config) => {
  const options = createOptions(config);

  const bundle = (entryPoint: string, outfile: string) =>
    esbuild.build(options(entryPoint, outfile)).then(printEsbuildWarn);

  return { bundle };
};
