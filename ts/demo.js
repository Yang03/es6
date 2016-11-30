// interface Person {
//     firstName: string;
//     lastName: string;    
// }
function printLabel(labelledObj) {
    console.log(labelledObj.label);
    console.log(labelledObj.xsize);
}
var myObj = { xsize: 10, label: "Size 10 Object" };
printLabel(myObj);
