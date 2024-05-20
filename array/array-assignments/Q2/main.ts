type Student = {
    name: string;
    grades: number[];
};
const students: Student[] = [
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
function calculateAverageGrade(grades: number[]) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}
function displayStudentGrades(students: Student[]) {
    students.forEach(student => {
        const avgGrade = calculateAverageGrade(student.grades);
        console.log(`Name: ${student.name}, Average Grade: ${avgGrade.toFixed(2)}`);
    });
}
displayStudentGrades(students);
