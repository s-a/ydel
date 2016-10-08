#!/usr/bin/env node

"use strict";
var DelMachine = new require("./deleter.js");

var Cli = new require("n-cli");
var cli = new Cli({ 
  handleUncaughtException : true
});



cli.on(function(){
    var delMachine = new DelMachine();
    delMachine.del(this, this.argv._);
});