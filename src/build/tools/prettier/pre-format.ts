/**
 * Insert empty line before comments.
 *
 * Similar to "lines-around-comment" of ESLint.
 */
export const preFormat = (code: string) =>
  code.replace(/(.)(\n *(?:\/\/|\/\*))/gm, "$1\n$2");
