import esbuild from "esbuild";
import { printEsbuildWarn } from "../../../util/esbuild-warn.js";

import { create as createOptions } from "./options.js";

export const prepare = () => {
  const options = createOptions();

  const minify = (entryPoint: string, outfile: string) =>
    esbuild.build(options(entryPoint, outfile)).then(printEsbuildWarn);

  return { minify };
};
