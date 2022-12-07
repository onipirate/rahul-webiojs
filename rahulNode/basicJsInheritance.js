const Person=require('./basicJsClass')
class Pet extends Person {
    location='Philippines'
}

let animal= new Pet('james','hindram')
console.log(animal.firstName)
console.log(animal.location)
console.log(animal.fullName())