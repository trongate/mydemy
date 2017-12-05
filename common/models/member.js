'use strict';

module.exports = function(Member) {

    Member.sayMyName = function(firstName, callback) {
      callback(null, firstName);
    };

    //simple example of a before remote hook
    Member.beforeRemote('sayMyName', function(context, unused, next) {
        console.log('Putting in the car key, starting the engine.');
        next();
    });

    //simple example of an after remote hook
    Member.afterRemote('sayMyName', function(context, finalOutput, next) {
        console.log('This is the after remote hook running.');
        next();
    });

};
