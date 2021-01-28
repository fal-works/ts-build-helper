import type { Config as TsConfig } from "./typescript/index.js";
import type { Config as RollupConfig } from "./rollup/index.js";
import type { Config as EsbuildMinifyConfig } from "./esbuild-minify/index.js";

export type Config = TsConfig & RollupConfig & EsbuildMinifyConfig;
