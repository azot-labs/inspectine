# azot

[![npm version](https://img.shields.io/npm/v/azot?style=flat&color=black)](https://www.npmjs.com/package/azot)
![GitHub Downloads (all assets, latest release)](https://img.shields.io/github/downloads/vitalygashkov/azot/latest/total?style=flat&color=black)
[![npm downloads](https://img.shields.io/npm/dt/azot?style=flat&color=black)](https://www.npmjs.com/package/azot)

Azot (Russian word for "nitrogen", pronounced `/azо́t/`) is a set of tools (JavaScript library, command-line utility and browser extension) for diagnosing, researching, and pentesting [Google's](https://about.google/) [Widevine](https://www.widevine.com/about) [DRM](https://www.urbandictionary.com/define.php?term=DRM).

> Azot is still in the early stages of development, so until version 1.0 is released, performance may be unstable and major changes may be made

## Features

- **Minimal** dependencies
- **Runtime agnostic** core: works in Node.js, Bun, Deno, browsers and more
- **Logging** details from EME events in Developer Tools console of current page
- **Encrypted Media Extensions API** compatibility via `requestMediaKeySystemAccess()` method
- **Converting clients** between formats via CLI
- **Manifest V3** compliant browser extension
- **Custom client support**: WVD v2, device_client_id_blob + device_private_key, client_id.bin + private_key.pem
- **Network-independent interception**, so it doesn't matter if the request has one-time tokens or a custom request/response body format.

## Installation

> JavaScript library and command-line tool installation requires pre-installed JavaScript runtime (e.g. Node.js).

### JavaScript library

```bash
npm install azot
```

### Command-line tool

```bash
npm install -g azot
```

### Browser extension

**Developer Mode** needs to be enabled in `chrome://extensions/` page

1. Download archive from [latest release](https://github.com/vitalygashkov/azot/releases/latest)
2. Drag and drop downloaded zip file to `chrome://extensions/` page

## Usage

### Library

See [examples](https://github.com/vitalygashkov/azot/blob/main/examples).

### Command-line tool

See help: `azot --help`
