import type esbuild from "esbuild";

const warn = (message: unknown) => console.warn(message);

type ResultLike = { warnings: esbuild.Message[] };

export const printEsbuildWarn = <T extends ResultLike>(result: T): T => {
  result.warnings.forEach(warn);
  return result;
};
