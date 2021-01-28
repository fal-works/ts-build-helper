import esbuild from "esbuild";

export type Config = {
  bannerMin?: string;
  overrides?: {
    esbuildMinify?: esbuild.TransformOptions;
  };
};

export const minifyCode = (config: Config): esbuild.TransformOptions => ({
  minify: true,
  banner: config.bannerMin,
  ...config.overrides?.esbuildMinify,
});
