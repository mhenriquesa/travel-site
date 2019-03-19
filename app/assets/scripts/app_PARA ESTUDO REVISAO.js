/*
var Person = require('./modules/Person');
----------
Usando Node.js puro!
*/
import Person from './modules/Person';


class Adult extends Person {
	payTaxes() {
		console.log(this.name + " pagou tudo!");
	} 
}

var jane = new Adult ("Jane", "Pink");
var john = new Person("John", "green");

john.greet();
jane.greet();

 