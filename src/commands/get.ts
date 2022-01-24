import { Argv } from "yargs";

export const getCommandOptions = (yargs: Argv) => {
  return yargs
    .usage("$0 get <option> [url | path]")
    .example("$0 get -f example.txt", "Gets the file contents as a string")
    .alias("f", "file")
    .nargs("f", 1)
    .describe("f", "File path to read. Can be absolute or relative.")
    .string("f")
    .example(
      "$0 get -u https://google.com",
      "Retrieves a web response as text."
    )
    .alias("u", "url")
    .nargs("u", 1)
    .string("u")
    .describe("u", "The url to request text content from")
    .help("h")
    .alias("h", "help").argv;
};
