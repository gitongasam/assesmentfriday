class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const baseSalary = super.calculateAnnualSalary();
    const bonus = 5000; 
    return baseSalary + bonus;
  }
}


const manager1 = new Manager("John Doe", 60000, "Marketing");
const manager2 = new Manager("Jane Smith", 70000, "Sales");

console.log(manager1.calculateAnnualSalary()); // Output: 71000
console.log(manager2.calculateAnnualSalary()); // Output: 81000

function invokeCallback(callback) {
  setTimeout(callback, 2000);
}

invokeCallback(() => {
  console.log("invoked after 2 seconds");
});


function calculateSum(numbers) {
    let sum = 0;
  
    for (const item of numbers) {
      if (typeof item === 'number') {
        sum += item;
      }
    }
  
    return sum;
  }
  
  const array1 = [2, '11', 3, 'a2', false, 5, 7, 1];
  const array2 = [2, 3, 0, 5, 7, 8, true, false];
  
  console.log(`Original array: ${array1.join(',')}`);
  console.log(`Sum all numbers of the said array: ${calculateSum(array1)}`);
  
  console.log(`Original array: ${array2.join(',')}`);
  console.log(`Sum all numbers of the said array: ${calculateSum(array2)}`);
  