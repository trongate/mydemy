'use strict';

module.exports = function(Member) {

    Member.sayMyName = function(myName, callback) {
      var myResponse = 'Your name is ' + myName;
      callback(null, myResponse);
    };

};
