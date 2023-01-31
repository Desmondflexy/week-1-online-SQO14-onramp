function filterList(arr) {
    return arr.filter(i => typeof i === 'number');
}
module.exports = filterList