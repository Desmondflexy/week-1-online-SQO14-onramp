function calculateGrade(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    const avg = sum / marks.length;
    let grade;

    switch (true) {
        case avg < 50:
            grade = 'F';
            break;
        case avg < 60:
            grade = 'E'
            break;
        case avg < 70:
            grade = 'D'
            break;
        case avg < 80:
            grade = 'C'
            break;
        case avg < 90:
            grade = 'B'
            break;
        default:
            grade = 'A';
            break
    }
    return grade;
}
console.log(calculateGrade([89, 50, 40, 90, 77]))
module.exports = calculateGrade
