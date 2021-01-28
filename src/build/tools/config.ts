import * as typescript from "./typescript/index.js";
import * as rollup from "./rollup/index.js";
import * as esbuildMinify from "./esbuild-minify/index.js";

export type Config = typescript.Config & rollup.Config & esbuildMinify.Config;
