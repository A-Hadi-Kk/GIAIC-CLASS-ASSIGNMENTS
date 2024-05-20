var employees = [
    {
        name: "Maaz",
        hoursWorked: 25,
        hourlyRate: 500,
        salary: 0
    },
    {
        name: "Saad",
        hoursWorked: 15,
        hourlyRate: 300,
        salary: 0
    },
    {
        name: "Rafay",
        hoursWorked: 21,
        hourlyRate: 410,
        salary: 0
    }
];
function calculateSalary(employee) {
    var salary = employee.hourlyRate * employee.hoursWorked;
    if (employee.hoursWorked >= 20) {
        salary *= 1.10;
    }
    return salary;
}
employees.forEach(function (employee) {
    employee.salary = calculateSalary(employee);
});
employees.forEach(function (employee) {
    console.log("Name: ".concat(employee.name, ", Salary: $").concat(employee.salary.toFixed(2)));
});
