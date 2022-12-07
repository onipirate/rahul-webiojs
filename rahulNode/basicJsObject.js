///Object is a collection of attributes, properties and certain actions for that particular object

let person = {
    firstName: 'John',
    lastName: 'Chan',
    age: 24,
    fullName: function() {
        return this.firstName+ ' ' + this.lastName
    }
}

console.log(person.firstName) //access via dot notation
console.log(person['lastName']) //access via array notation

person.firstName='Erwin' //re-assign
console.log(person.firstName)

//adding a property
person.gender='male'
console.log(person)

//delete a property
delete person.gender
console.log(person)

console.log('gender' in person) //check a paricular property

//loop iterates through the property
for(let key in person) {
    console.log(person[key])
}
console.log('**** Calling the Function Method')
console.log(person.fullName()) //take note of the open parenthesis

//classes are only in es6 engine