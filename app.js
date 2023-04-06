
function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Dorcas');



// HOW TO DECLARE A FUNCTION IN NODE
//
// var sayHello = function() {
//
// }

const queD = require('./logger');

//console.log(logger);

queD('DevCareer Network');

// Use 'jshint' TO SCAN JS CODE FOR ERRORS

//HOW TO USE BUILT-IN NODE MODULES 
// Case I:
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

// Case II:
const os = require("node:os");

var totalMemory = os.totalmem();

var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log(`Total Memory: ${totalMemory}`);

console.log(`Free Memory: ${freeMemory}`);