var fs= require('fs');


console.log("Executed before FIle Reading ");

var data = fs.readFileSync("../npm/hell.txt", "utf8");

console.log(data);

console.log("Executed after File Reading");