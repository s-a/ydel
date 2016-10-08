"use strict";

var YDel = require("../lib/deleter");
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
