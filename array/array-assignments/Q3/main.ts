type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
};
const employees: Employee[] = [
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
function calculateSalary(employee: Employee){
    let salary = employee.hourlyRate * employee.hoursWorked;
    if (employee.hoursWorked >= 20) {
        salary *= 1.10;
    }
    return salary;
}
employees.forEach(employee => {
    employee.salary = calculateSalary(employee);
});
employees.forEach(employee => {
    console.log(`Name: ${employee.name}, Salary: $${employee.salary.toFixed(2)}`);
});
