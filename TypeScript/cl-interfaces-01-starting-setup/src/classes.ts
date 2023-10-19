abstract class Department {
  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    //this.name = n;
  }

  get DepId{
    return this.id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department) : void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");

    this.employees = admins;
    // admins.forEach((value) => {
    //   this.addEmployee(value);
    // });
  }

  describe(this: Department): void {
    console.log(this.name + " " + this.DepId);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Pass in valid value");
    }
    this.addReport(value);
  }

  describe(this: Department): void {
    console.log("Accounting Dept." + this.DepId);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "AccountingDepartment");
    this.lastReport = reports[0];
  }

  addEmployee(employee: string): void {
    if (employee == "Olo") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

const accounting = new AccountingDepartment("Ac", ["report1", "report2"]);
accounting.addEmployee("Max");
accounting.addEmployee("Olo");

accounting.describe();
accounting.printEmployeesInformation();

const itDepartment = new ItDepartment("It", ["Lola", "Kola"]);
itDepartment.printEmployeesInformation();

//const accountingCopy = { name: "Olo", describe: accounting.describe };
//accountingCopy.describe(); // undefined - brak name, błąd po this: Department
