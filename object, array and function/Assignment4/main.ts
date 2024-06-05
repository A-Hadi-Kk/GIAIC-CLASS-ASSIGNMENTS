type Student = {
    name: string;
    isSenior: boolean;
    hasCompletedAssignments: boolean;
}
let students: Student[] = [
    { name: "Umer", isSenior: true, hasCompletedAssignments: true },
    { name: "Ahmed", isSenior: true, hasCompletedAssignments: false },
    { name: "Haris", isSenior: false, hasCompletedAssignments: true },
    { name: "Ali", isSenior: true, hasCompletedAssignments: true },
    { name: "Danial", isSenior: false, hasCompletedAssignments: false }
];
function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}
function updateClassList(students: Student[]): Student[] {
    return students.filter(student => student.hasCompletedAssignments);
}
const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students who have completed their assignments:", seniorStudentsWithAssignments);
const updatedClassList = updateClassList(students);
console.log("Updated class list (students who have completed assignments):", updatedClassList);
