import * as rollup from "rollup";
import * as options from "./options.js";
import type { Config } from "./config";

/**
 * Prepare bundling functions.
 */
export const prepare = (config?: Config) => {
  const inputOptions = options.createInput(config);
  const outputOptions = options.createOutput(config);

  const bundle = async (tsOutEntry: string): Promise<string> => {
    const built = await rollup.rollup(inputOptions(tsOutEntry));
    const bundled = await built.generate(outputOptions);
    return bundled.output[0].code;
  };

  return { bundle };
};
