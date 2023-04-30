export class Student {
   public firstName:string;
    private lastName: string;
    private age: number;
    protected initialDays = 10;
    private _college = Student.collegeName
  // this is a static variable
    static collegeName = 'Anna University';

    constructor(fname: string, lname: string, age: number) {
        this.firstName = fname;
        this.lastName = lname;
        this.age= age;
        
    }

    updateAbsence(days: number):void {
        this.initialDays -= days;
    }

    getFullName(): string {
        return `${this.firstName} '----' ${this.lastName}`
    }

     updateFirstName(value: string) {
        this.firstName = value;
    }

    getFullDetails() {
        return `
            First name: ${this.firstName},
            Last name: ${this.lastName},
            College: ${this._college}
        `
    }
}