class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favColor = favColor;
	}
	greet() {
		console.log ("Im " + this.name + " and my color is " + this.favColor);
	}
}
/* -------Node.js Puro (sem Babel)--------------
module.exports = Person; 
------------------------------------------------
*/
export default Person;