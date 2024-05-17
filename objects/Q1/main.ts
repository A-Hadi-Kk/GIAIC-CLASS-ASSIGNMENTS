type Employee = {
    name: string;
    department: string;
    role: string;
    contact?: {
      phone: number;
      email: string;
    };
    skills?: string[];
  };
  type Restrict = Employee & {
    role: "Manager" | "Engineer" | "Intern";
  };

  const employees: Employee = {
    name: "HK",
    department: "FE Dev",
    role: "intern",
    skills: ["HTML", "CSS"],
    contact:{
      phone: +92138839,
      email: "HK@gmail.com"
    }
  }
  console.log(employees)