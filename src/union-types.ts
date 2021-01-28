import type { Paths as BuildPaths, Config as BuildConfig } from "./build";
import type { Paths as DevPaths, Config as DevConfig } from "./dev";

export type Paths = BuildPaths & DevPaths;
export type Config = BuildConfig & DevConfig;
