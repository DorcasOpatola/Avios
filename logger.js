
console.log(__filename);
console.log(__dirname);
// console.log(module);

var url = 'http:mylogger.io/log';

function queD(message) {
    // SEND AN HTTP REQUEST
    console.log(message);
}

// HOW TO EXPORT A MODULE

// module.exports.log = log; //exports an object

module.exports = queD; //exports a function

//NB: A MODULE CAN TAKE ON A NEM NAME WHEN IT IS EXPORTED, SO ASTO KEEP IT MORE PRIVATE.
//module.exports.endPoint = url;
