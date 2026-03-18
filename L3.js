// const person={
//     fanme:"Ajay",
//     Iname:"singh",
//     age: 25
// };

// for(let x in person){
//     console.log("person details:"+":"+ person[x]);
// }

/*var grade = 'A';

console.log("Entering switch block <br/>");

switch (grade) {

case 'A':
    console.log("Good job <br/>");
    break;

case 'B':
    console.log("Pretty good <br/>");
    break;

case 'C':
    console.log("Passed <br/>");
    break;

case 'D':
    console.log("Not so good <br/>");
    break;

case 'F':
    console.log("Failed <br/>");
    break;

}

console.log("Exiting switch block");*/

// var person = {
//     name: "John Mac",
//     age: 30,
//     isMarried: true,
//     address: {
//         street: "Vinay Nagar",
//         flatNo: 201
//     }
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.isMarried);
// console.log(person.address.street);
// console.log(person.address.flatNo);

// var person2 = new Object();

// person2.name = "Krishnakant";   // add property
// person2.age = 32;
// person2.isMarried = true;

// person2.address = {};
// person2.address.street = "Nagar Road";
// person2.address["flatNo"] = 33;

// console.log(person2);

var person2 = new Object();

person2.name = "Krishnakant";
person2.age = 32;
person2.isMarried = true;

person2.address = {};
person2.address.street = "Nagar Road";
person2.address["flatNo"] = 33;

console.log(person2.name);
console.log(person2.age);
console.log(person2.isMarried);
console.log(person2.address.street);
console.log(person2.address.flatNo);

// array literal (preferred way)
const myInformation = [];
const myInformationRef = myInformation;

// create array using constructor
var myInfo = new Array();

// create array using Array()
var myInfo1 = Array();

console.log(myInformation);
console.log(myInformationRef);
console.log(myInfo);
console.log(myInfo1);