import * as rollup from "rollup";

import type { Config } from "./config";

export const createInputOptions = (config?: Config) => (
  input: rollup.InputOptions["input"]
): rollup.InputOptions => ({
  input,
  external: config?.external,
  ...config?.overrides?.rollupInput,
});

export const createOutputOptions = (config?: Config): rollup.OutputOptions => ({
  format: "iife",
  banner: config?.banner,
  globals: config?.globals,
  interop: "default",
  ...config?.overrides?.rollupOutput,
});
