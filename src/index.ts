export type { Paths, RequiredPaths } from "./paths";
export { prepare as preparePaths } from "./paths.js";

import type { Config as BuildConfig } from "./build";
import type { Config as WatchConfig } from "./watch";
export type Config = BuildConfig & WatchConfig;

export * as build from "./build/index.js";
export * as watch from "./watch/index.js";
