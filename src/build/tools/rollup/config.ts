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
