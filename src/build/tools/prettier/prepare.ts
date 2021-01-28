import prettier from "prettier";
import { writeFile } from "../../../util/fs.js";
import { preFormat } from "./pre-format.js";

const format = (code: string, filepath: string) =>
  prettier.format(preFormat(code), { filepath });

const formatWrite = async (code: string, filepath: string) =>
  writeFile(filepath, format(code, filepath));

/**
 * @returns formatting functions.
 */
export const prepare = () => {
  return { format, formatWrite };
};
