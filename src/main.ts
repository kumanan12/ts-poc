import { add } from "./add.js";
import { isTeenAger } from "./add.js";
import { Person } from "./add.js";
let result = add(1,"2");
let isTeen = isTeenAger(19);

let dhivakar: Person = {
    name: 'Dhivakar',
    age: 20,
    isTeen: false
}
console.log(result, isTeen);