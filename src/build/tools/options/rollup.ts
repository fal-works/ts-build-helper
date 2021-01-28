import * as rollup from "rollup";

export type Config = {
  external?: string[];
  banner?: string;
  globals?: rollup.OutputOptions["globals"];
  overrides?: {
    rollupInput?: rollup.InputOptions;
    rollupOutput?: rollup.OutputOptions;
  };
};

export const input = (config: Config) => (
  input: rollup.InputOptions["input"]
): rollup.InputOptions => ({
  input,
  external: config.external,
  ...config.overrides?.rollupInput,
});

export const output = (config: Config): rollup.OutputOptions => ({
  format: "iife",
  banner: config.banner,
  globals: config.globals,
  interop: "default",
  ...config.overrides?.rollupOutput,
});
