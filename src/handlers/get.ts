import { Arguments } from "yargs";
import { existsSync, readFileSync } from "fs";
import { request } from "undici";
import { URL } from "url";

type GetArguments = {
  file: string;
  url: string;
};

async function handleRequest(url: string) {
  try {
    const final = new URL(url);
    const { body } = await request(final);
    const text = await body.text();
    console.log(text);
  } catch (error: any) {
    console.log("Could not fetch: ", error.message);
  }
}

function readFile(path: string) {
  const exists: boolean = existsSync(path);

  if (!exists) {
    console.log("The specified file path is not found.");
    return;
  }

  console.log(readFileSync(path, { encoding: "utf-8" }));
}

export async function getCommandHandler(
  args: Arguments<GetArguments>
): Promise<void> {
  if (args.file && args.url) {
    console.log("Cannot define file and url simultaneously. Use -h for help.");
    return;
  }

  if (!args.file && !args.url) {
    console.log('"get" requires either a file path or url.');
    return;
  }

  const isWebRequest: boolean = !!args.url;
  const path: string = args.file || args.url;
  return isWebRequest ? await handleRequest(path) : readFile(path);
}
