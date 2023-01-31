function countTruthy(arr) {
    let k = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            k++;
        }
    }
    return k;
}
module.exports = countTruthy