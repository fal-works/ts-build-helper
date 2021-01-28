import esbuild from "esbuild";
import { printEsbuildWarn } from "../../../util/esbuild-warn.js";
import { writeFile } from "../../../util/fs.js";

import * as esbuildOptions from "./config.js";
import { create as createOptions } from "./options.js";

/**
 * Prepare minifying functions.
 */
export const prepare = (config?: esbuildOptions.Config) => {
  const bannerMin = config?.bannerMin;
  const options = createOptions(config);

  const minify = async (code: string) => {
    // remove existing banner if new one is provided
    if (bannerMin) code = code.replace("@license", "");

    return esbuild.transform(code, options).then(printEsbuildWarn);
  };
  const minifyWrite = async (code: string, filepath: string) =>
    minify(code).then(({ code }) => writeFile(filepath, code));

  return { minify, minifyWrite };
};
