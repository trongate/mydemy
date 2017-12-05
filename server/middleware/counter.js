module.exports = function() {
    return function counter(req, res, next) {
        console.log('hello from the middleware');
    }
}