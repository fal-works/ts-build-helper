import esbuild from "esbuild";
import { globalExternals } from "@fal-works/esbuild-plugin-global-externals";

import type { Config } from "./config";

export const create = (config?: Config) => {
  const globals = config?.globals;

  return (
    entryPoint: string,
    outfile: string
  ): esbuild.BuildOptions & { incremental: true } => ({
    entryPoints: [entryPoint],
    bundle: true,
    outfile,
    plugins: globals ? [globalExternals(globals)] : undefined,
    incremental: true,
  });
};
