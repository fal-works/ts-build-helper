import type { Paths as BuildPaths, Config as BuildConfig } from "./build";
import type { Paths as WatchPaths, Config as WatchConfig } from "./watch";

export type Paths = BuildPaths & WatchPaths;
export type Config = BuildConfig & WatchConfig;
