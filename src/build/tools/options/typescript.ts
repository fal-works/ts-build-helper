import * as ts from "@fal-works/ts-transpile-modules";

export type Config = {
  overrides?: {
    typescript?: ts.Options;
  };
};

export const transpile = (config: Config): Partial<ts.Options> => ({
  clean: true,
  ...config.overrides?.typescript,
});
