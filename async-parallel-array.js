var async = require('async');

var stack = [];

var functionOne = function(callback){
    //perform actions
    callback(null, 'First Funciton Result');
    //callback('ERROR', null);
}

var functionTwo = function(callback){
    //perform actions
    callback(null, 'Second Funciton Result');
}

var functionThree = function(callback){
    //perform actions
    callback(null, 'Third Funciton Result');
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack, function(err, results){
    console.log(results)
});
