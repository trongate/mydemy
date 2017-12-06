'use strict';

module.exports = function(Member) {

    Member.sayMyName = function(firstName, callback) {
      callback(null, firstName);
    };

    Member.beforeRemote('sayMyName', function(context, unused, next) {
        var firstName = context.args.firstName;
        console.log('your first name is: ' + firstName);
        next();
    });

    Member.afterRemote('sayMyName', function(context, unused, next) {
        context.result.firstName = 'Sally';
        context.result.lastName = 'Smith';
        console.log('This is the after remote hook running.');
        next();
    });

};
