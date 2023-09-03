import Person from "./Person.js";
class Employee extends Person {
  workingDays;
  salary;
  constructor(id, name, email, address, type, workingDays, salary) {
    super(id, name, email, address, type);
    this.workingDays = workingDays;
    this.salary = salary;
  }

  calSalary = () => {
    return this.workingDays * this.salary;
  };
}

export default Employee;
