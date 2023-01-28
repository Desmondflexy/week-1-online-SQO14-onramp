function filterList(arr) {
    return arr.filter(i => typeof i === 'number');
}

console.log(filterList([1,2,'aasf','1','123',123]));
module.exports = filterList