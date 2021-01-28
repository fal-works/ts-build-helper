import esbuild from "esbuild";

export const create = () => (
  entryPoint: string,
  outfile: string
): esbuild.BuildOptions & { incremental: true } => ({
  entryPoints: [entryPoint],
  minify: true,
  outfile,
  incremental: true,
});
