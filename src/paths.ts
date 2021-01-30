/**
 * Paths information constructed from a given `Paths` and other default values.
 */
export type RequiredPaths = Readonly<{
  dirs: Readonly<{
    src: string;
    tsOut: string;
    dist: string;
  }>;
  files: Readonly<{
    srcEntry: string;
    tsOutEntry: string;
    dist: string;
    distMin: string;
  }>;
}>;

/**
 * Paths information to be passed when building a project.
 */
export type Paths = {
  dirs?: {
    /** Defaults to `src`. */
    src?: string;
    /** Defaults to `ts-out-tmp`. */
    tsOut?: string;
    /** Defaults to `dist`. */
    dist?: string;
  };
  filenames: {
    /** Such as `index.ts` or `main.ts`. */
    srcEntry: string;
    /** Such as `bundle.js`. */
    dist: string;
    /** Defaults to the dist filename with `.min.js` extension. */
    distMin?: string;
  };
};

export const defaultDirs: RequiredPaths["dirs"] = Object.freeze({
  src: "src",
  tsOut: "ts-out-tmp",
  dist: "dist",
});

const shallowDefault = <T extends Record<string, unknown>>(
  def: T,
  partial?: Partial<T>
): T => Object.assign({}, def, partial);

export const tsToJs = (file: string) => file.replace(/\.ts(x?)$/, ".js$1");
export const jsToMinJs = (file: string) => file.replace(/\.js$/, ".min.js");

export const getFilepaths = (
  dirs: RequiredPaths["dirs"],
  filenames: Paths["filenames"]
): RequiredPaths["files"] => {
  const srcEntryFilename = filenames.srcEntry;
  const tsOutEntryFilename = tsToJs(srcEntryFilename);
  const distFilename = filenames.dist;
  const distMinFilename = filenames.distMin || jsToMinJs(distFilename);

  return {
    srcEntry: `${dirs.src}/${srcEntryFilename}`,
    tsOutEntry: `${dirs.tsOut}/${tsOutEntryFilename}`,
    dist: `${dirs.dist}/${distFilename}`,
    distMin: `${dirs.dist}/${distMinFilename}`,
  };
};

export const prepare = (partialPaths: Paths): RequiredPaths => {
  const dirs = shallowDefault(defaultDirs, partialPaths.dirs);
  const files = getFilepaths(dirs, partialPaths.filenames);

  return { dirs, files };
};
