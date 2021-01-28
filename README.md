# ts-build-helper

Helps build TypeScript projects.

Not very well tested.


## Usage

### Prepare

Something like this:

```ts
// settings.ts

import type { Paths, Config } from "@fal-works/ts-build-helper";

/** File/directory paths */
const paths: Paths = {
  dirs: {
    src: "src",          // default: src
    tsOut: "ts-out",     // default: ts-out-tmp
    dist: "dist",        // default: dist
  },
  filenames: {
    srcEntry: "main.ts", // required
    dist: "script.js",   // required
  },
};

/** Config (optional) */
const config: Config = {
  banner: "// some banner comment",
  external: ["jquery"],
  globals: { jquery: "$" },
  // ... some other options
};
```

### Build

Build distribution scripts using TypeScript, Rollup, Prettier and esbuild (for minify).

```ts
// build.ts

import * as build from "@fal-works/ts-build-helper/lib/build/index.js";
import { paths, config } from "./settings.js";

void build.run(paths, config);
```

### Watch

Watch files and bundle/minify them automatically with esbuild.

It's quite fast, but the comments will be stripped away. No formatting.

```ts
// watch.ts

import * as watch from "@fal-works/ts-build-helper/lib/watch/index.js";
import { paths, config } from "./settings.js";

void watch.run(paths, config);
```
