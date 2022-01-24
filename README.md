# Tool

General purpose CLI tool for everyday things 🛠️

# Installation

```bash
npm install -g tool
```

or

```bash
yarn global add tool
```

# Usage

Tool is very bare bones for now. 🖖

## Get command

```bash
tool get <options> <target>
```

### Options

- `-f` or `--file`: A file path (absolute/relative).
- `-u` or `--url`: A http(s) url to fetch text content from.

### Target

If `-f` is passed, a PathLike string should be passed directly after the flag. If `-u` is passed, a valid url to fetch content in `utf-8`.

# CLI help output

_main help_

```bash
tool <command> <option>

Commands:
  tool get  Gets file or web address text content.

Options:
      --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

Kaizen Media CC
```

_get help_

```bash
tool get <option> [url | path]

Options:
      --version  Show version number                                   [boolean]
  -f, --file     File path to read. Can be absolute or relative.        [string]
  -u, --url      The url to request text content from                   [string]
  -h, --help     Show help                                             [boolean]

Examples:
  tool get -f example.txt         Gets the file contents as a string
  tool get -u https://google.com  Retrieves a web response as text.
```

[Contribute something that you want to use errr day ✌️](https://github.com/Eckhardt-D/tool)
