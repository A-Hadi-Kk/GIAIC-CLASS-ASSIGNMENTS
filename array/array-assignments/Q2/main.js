var students = [
    {
        name: "Asim",
        grades: [85, 90, 78, 92]
    },
    {
        name: "Sharjeel",
        grades: [70, 75, 80, 85]
    },
    {
        name: "Umer",
        grades: [95, 88, 92, 90]
    }
];
function calculateAverageGrade(grades) {
    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}
function displayStudentGrades(students) {
    students.forEach(function (student) {
        var avgGrade = calculateAverageGrade(student.grades);
        console.log("Name: ".concat(student.name, ", Average Grade: ").concat(avgGrade.toFixed(2)));
    });
}
displayStudentGrades(students);
