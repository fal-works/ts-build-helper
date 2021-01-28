import type { TransformOptions } from "esbuild";
import type { Config } from "./config";

export const create = (config?: Config): TransformOptions => ({
  minify: true,
  banner: config?.bannerMin,
  ...config?.overrides?.esbuildMinify,
});
