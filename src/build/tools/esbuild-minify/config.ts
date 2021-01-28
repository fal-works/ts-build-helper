import esbuild from "esbuild";

export type Config = {
  bannerMin?: string;
  overrides?: {
    esbuildMinify?: esbuild.TransformOptions;
  };
};
