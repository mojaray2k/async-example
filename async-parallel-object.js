var async = require('async');

var stack = {};

stack.getUsername = function(callback){
    var userName = 'Amen';
    callback(null, userName);
}

stack.getAge = function(callback){
    var userAge = 42;
    callback(null, userAge);
}

stack.getGender = function(callback){
    var userGender = 'Male';
    callback(null, userGender);
}


async.parallel(stack, function(error, result){
    if(error){
        console.log(error);
        return;
    }

    console.log(result);
})
