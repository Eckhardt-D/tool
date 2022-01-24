#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// import chalk from 'chalk'
// import boxen from 'boxen'

import { getCommandHandler } from "./handlers/get";
import { getCommandOptions } from "./commands/get";

yargs(hideBin(process.argv))
  .usage("$0 <command> <option>")
  .command(
    "get",
    "Gets file or web address text content.",
    getCommandOptions,
    getCommandHandler
  )
  .help("h")
  .alias("h", "help")
  .epilog("Kaizen Media CC").argv;
