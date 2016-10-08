# ydel [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Global shell command to delete files and folder usings globs.

## Installation

```sh
$ npm install [--save|-g] ydel
```

## Usage

### Bash
```sh
$ ydel ./../shelljs !../shelljs/.git;
$ ls -a ./../shelljs/;

# =>   ..  .git
```

### Node
```js
"use strict";

var YDel = require("ydel");
var ydel = new YDel();
var Cli = new require("n-cli");
var cli = new Cli({
  handleUncaughtException : false,
  argv : ["./test", "--verbose"]
});
describe("ydel", function () {
  it("should del!", function () {
    ydel.del(cli);
  });
});
```
## License

MIT © [s-a](https://github.com/s-a)


[npm-image]: https://badge.fury.io/js/ydel.svg
[npm-url]: https://npmjs.org/package/ydel
[travis-image]: https://travis-ci.org/s-a/ydel.svg?branch=master
[travis-url]: https://travis-ci.org/s-a/ydel
[daviddm-image]: https://david-dm.org/s-a/ydel.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/s-a/ydel
[coveralls-image]: https://coveralls.io/repos/github/s-a/ydel/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/s-a/ydel
