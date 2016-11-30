// interface Person {
//     firstName: string;
//     lastName: string;    
// }

// function greeter(person: Person) {
//     return "hello" + person.firstName + person.lastName
// }

// var user = {firstName: "Jane", lastName: "User"}

// console.log(greeter(user));



// function test(a:string , b? :number) {
//     console.log(a);
//     console.log(b)
//     return a;
// }
// test('a', 1)


interface LabelledValue {
  label: string;
  size ?: number;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
  console.log(labelledObj.xsize);
}

let myObj = {xsize: 10, label: "Size 10 Object"};
printLabel(myObj);