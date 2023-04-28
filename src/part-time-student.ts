import { Student } from "./Student.js";

export class PartTimeStudent extends Student {
    private employer: string;

    constructor(fname: string, lname: string, age: number, employer: string) {
        super(fname,lname,age);
        this.employer = employer;
        this.initialDays = 20;
        
    }

    updateEmployer(value: string): void {
        
    }

    
}