import * as ts from "@fal-works/ts-transpile-modules";

export type Config = {
  overrides?: {
    typescript?: ts.Options;
  };
};
