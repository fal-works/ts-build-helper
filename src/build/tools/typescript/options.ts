import * as ts from "@fal-works/ts-transpile-modules";

import type { Config } from "./config";

export const create = (config?: Config): ts.Options => ({
  clean: true,
  ...config?.overrides?.typescript,
});
