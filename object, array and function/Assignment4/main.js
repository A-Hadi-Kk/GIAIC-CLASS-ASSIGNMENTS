var students = [
    { name: "Umer", isSenior: true, hasCompletedAssignments: true },
    { name: "Ahmed", isSenior: true, hasCompletedAssignments: false },
    { name: "Haris", isSenior: false, hasCompletedAssignments: true },
    { name: "Ali", isSenior: true, hasCompletedAssignments: true },
    { name: "Danial", isSenior: false, hasCompletedAssignments: false }
];
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
function updateClassList(students) {
    return students.filter(function (student) { return student.hasCompletedAssignments; });
}
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students who have completed their assignments:", seniorStudentsWithAssignments);
var updatedClassList = updateClassList(students);
console.log("Updated class list (students who have completed assignments):", updatedClassList);
