import { MyMath } from "./MyMath.js";
import { Student } from "./Student.js";
import { PartTimeStudent } from "./part-time-student.js";
import { TShirt, TShirtColor, TShirtType } from "./t-shirt.js";


let dhivakar  = new Student('Dhivakar', 'Manickam', 21);
let veeshwa = new Student('Veeshwa', 'Kumar', 20);
Student.collegeName ='MIT';

let cubed = MyMath.cubed(3);
console.log(cubed);



console.log(dhivakar.getFullDetails());
console.log(veeshwa.getFullDetails());

let kumanan = new PartTimeStudent('Kumanan', 'Murugesan', 20, 'CapitalOne')


let tShirt = new TShirt(TShirtColor.Red,TShirtType.round);
