import { Student } from "./Student.js";
import { PartTimeStudent } from "./part-time-student.js";
import { TShirt, TShirtColor, TShirtType } from "./t-shirt";

let dhivakar: Student = new Student('Dhivakar', 'Manickam', 21);
let kumanan = new PartTimeStudent('Kumanan', 'Murugesan', 20, 'CapitalOne')
dhivakar.updateFirstName('Dhivakar123');
console.log(kumanan.getFullName());

let tShirt = new TShirt(TShirtColor.Red,TShirtType.round);
