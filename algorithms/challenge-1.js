function countTruthy(arr) {
    let k = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            k++;
        }
    }
    return k;
}
console.log(countTruthy(['', 0, 0, undefined, 7]));
module.exports = countTruthy