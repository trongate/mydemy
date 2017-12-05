'use strict';

module.exports = function(Member) {

    Member.sayMyName = function(firstName, callback) {
      callback(null, firstName);
    };

    Member.beforeRemote('sayMyName', function(context, unused, next) {
        console.log('Putting in the car key, starting the engine.');
        next();
    });

    Member.afterRemote('sayMyName', function(context, finalOutput, next) {
        console.log('This is the after remote hook running.');
        next();
    });

};
