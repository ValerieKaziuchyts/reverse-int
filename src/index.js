module.exports = function reverse (n) {
    if (n < 0) {
        n *= -1;
    }
    n = +n.toString().split('').reverse().join('')
    return n;
}
