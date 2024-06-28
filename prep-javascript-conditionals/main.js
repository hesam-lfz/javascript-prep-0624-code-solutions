/* Your JS goes in this file */
function gradeCalculator(score) {
    if (score < 60)
        return 'F'
    else if (score < 70)
        return 'D'
    else if (score < 80)
        return 'C'
    else if (score < 90)
        return 'B'
    else if (score < 100)
        return 'A'
    else
        return 'A++'
}

console.log(gradeCalculator(60))
