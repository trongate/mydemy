'use strict';

module.exports = function(Member) {

    Member.sayMyName = function(firstName, callback) {
      callback(null, firstName);
    };

    Member.beforeRemote('sayMyName', function(context, unused, next) {
        console.log('Putting in the car key, starting the engine.');
        next();
    });

};
