/**
 * Paths information used mainly internally.
 */
export type RequiredPaths = Readonly<{
  dirs: Readonly<{
    src: string;
  }>;
  files: Readonly<{
    srcEntry: string;
    dist: string;
    distMin: string;
  }>;
}>;

/**
 * Paths information to be passed when building a project.
 */
export type Paths = {
  dirs: {
    /** Defaults to `src`. */
    src?: string;
    /** Defaults to `dist`. */
    dist?: string;
  };
  filenames: {
    /** Such as `index.ts` or `main.ts`. */
    srcEntry: string;
    /** Such as `bundle.js`. */
    dist: string;
  };
};

export const preparePaths = (partialPaths: Paths): RequiredPaths => {
  const { dirs, filenames } = partialPaths;

  const srcDir = dirs.src || "src";
  const distDir = dirs.dist || "dist";

  const srcEntryFilename = filenames.srcEntry;
  const distFilename = filenames.dist;
  const distMinFilename = distFilename.replace(/\.js$/, ".min.js");

  return {
    dirs: {
      src: srcDir,
    },
    files: {
      srcEntry: `${srcDir}/${srcEntryFilename}`,
      dist: `${distDir}/${distFilename}`,
      distMin: `${distDir}/${distMinFilename}`,
    },
  };
};
