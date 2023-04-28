export class Student {
   protected firstName:string;
    private lastName: string;
    private age: number;
    protected initialDays = 10;

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
}