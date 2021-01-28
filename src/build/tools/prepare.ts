import prettier from "prettier";
import * as ts from "@fal-works/ts-transpile-modules";
import * as rollup from "rollup";
import esbuild from "esbuild";
import { printEsbuildWarn } from "../../util/esbuild-warn.js";
import { writeFile } from "../../util/fs.js";
import * as options from "./options/index.js";

import type { Config } from "./config";

/**
 * Prepare seveal build process functions from a single `Config` object.
 */
export const prepare = (config: Config) => {
  const tsOptions = options.typescript.transpile(config);
  const transpile = (srcDir: string, outDir: string) =>
    ts.transpileModules(srcDir, outDir, tsOptions);

  const rollupInputOptions = options.rollup.input(config);
  const rollupOutputOptions = options.rollup.output(config);
  const bundle = async (tsOutEntry: string): Promise<string> => {
    const built = await rollup.rollup(rollupInputOptions(tsOutEntry));
    const bundled = await built.generate(rollupOutputOptions);
    return bundled.output[0].code;
  };

  const { bannerMin } = config;
  const minifyOptions = options.esbuild.minifyCode(config);
  const minify = async (code: string) => {
    // remove existing banner if new one is provided
    if (bannerMin) code = code.replace("@license", "");

    return esbuild.transform(code, minifyOptions).then(printEsbuildWarn);
  };
  const minifyWrite = async (code: string, filepath: string) =>
    minify(code).then(({ code }) => writeFile(filepath, code));

  const preFormat = (code: string) =>
    code.replace(/(.)(\n *(?:\/\/|\/\*\*))/gm, "$1\n$2");
  const format = (code: string, filepath: string) =>
    prettier.format(preFormat(code), { filepath });
  const formatWrite = async (code: string, filepath: string) =>
    writeFile(filepath, format(code, filepath));

  return {
    transpile,
    bundle,
    minify,
    minifyWrite,
    format,
    formatWrite,
  };
};
