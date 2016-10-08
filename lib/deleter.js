
"use strict";
 


var fs = new require("fs");
var path = new require("path"); 
var globule = new require("globule");

var ignoreFolders = [];

var delHard = function(dir, ncli) {
  if( fs.existsSync(dir) ) {
    fs.readdirSync(dir).forEach(function(file){
      var curPath = path.join(dir, file);
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        delHard(curPath);
      } else { // delete file 
        fs.unlinkSync(curPath);
      }
    });  
    if (ignoreFolders.indexOf(dir) === -1){
        fs.rmdirSync(dir); 
    }
  }
};

 
function Deleter(){
    return this;
}

function isIgnorePath(igno,file){ 
    if (igno.indexOf(file) === 0){
        return true;
    } else { 
        return false;
    }
}

Deleter.prototype.del = function(ncli){

    var dir = ncli.argv._[0];
    var params = ncli.argv._;
    var x = params.shift();
    params.unshift(path.join(x, "/.*"));
    params.unshift(path.join(x, "/**"));
    console.log(params);
    var files = globule.find(params);

    // test if folder is not one of ignored
    var cleanFiles = [];
    for(var f = 0; f < files.length; f++){
        var file = ncli.resolvePath(files[f]);
        for(var i = 1; i < ncli.argv._.length; i++){
            var igno = ncli.argv._[i];
            if (igno[0] === "!"){
                igno = path.dirname(ncli.resolvePath(igno.substr(1)));
                //console.log(igno, file);
                if (isIgnorePath(igno, file)){
                    console.log("ignore", file);
                    ignoreFolders.push(file);
                } else {
                    cleanFiles.push(file);
                }
            }
        } 
    }
 
    // Delete files
    files.forEach(function(item, index/*, array*/){
        item = ncli.resolvePath(item);
        if (ncli.resolvePath(dir) !== item) {
            if (ncli.argv.verbose === true){
                ncli.stdout(ncli.color.yellow("found " + index + " \"" + item + "\"\n"));
            } else {
                try {
                    fs.unlinkSync(item);
                    ncli.stdout(ncli.color.green("deleted \"" + item + "\"\n"));
                } catch(e){
                    delHard(item, ncli );
                }
            }
        };
    });
}


module.exports = Deleter;