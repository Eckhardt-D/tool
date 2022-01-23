#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { readFileSync, existsSync } from 'fs';

// import chalk from 'chalk'
// import boxen from 'boxen'

const options = yargs(hideBin(process.argv))
  .usage('$0 <command> <option>')
  .command('get', '-f <filename> | Gets file contents', (yargs) => {
    return yargs.usage('$0 -f <filename>')
      .example('$0 get -f example.txt', 'Gets the file contents as a string')
      .alias('f', 'file')
      .nargs('f', 1)
      .describe('f', 'File path')
      .help('h')
      .alias('h', 'help')
  }, getFileContents)
  .help('h')
  .alias('h', 'help')
  .epilog('Kaizen Media CC')
  .argv;

async function getFileContents(args: yargs.Arguments<{file: string}>): Promise<void> {
  const path = args.file;
  const exists = existsSync(path);

  if(!exists) {
    return console.log('The specified file path is not found.')
  }

  return console.log(readFileSync(path, {encoding: 'utf-8'}))
}
