
function isAnimal (target) {
    target.isAnimal = true
    return target 
}

function readonly(target, name, discriptor) {
    discriptor.writable = false;
    return discriptor
}

@isAnimal
class Dog {
    @readonly
    say() {
        console.log('wow')
    }
}

console.log(Dog.isAnimal)

let pug = new Dog()
pug.say()
// pug.say = function(){
//     cosnole.log('pug') //error
// }