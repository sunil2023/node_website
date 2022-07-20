var fs = require('fs');

console.log("Execute before file");

var data = fs.readFile("../npm/hell.txt", "utf8");

console.log(data);

console.log("Executed after File Reading");