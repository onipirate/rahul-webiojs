module.exports = class Person {
    age = 35
    get location() {
        return 'Canada'
    }

    constructor(firstName, lastName) {
        this.firstName=firstName
        this.lastName=lastName
    }

    fullName() {
        return this.firstName+' '+this.lastName
    }   
}

// let man = new Person('johnny', 'bravo')
// console.log(man.age)
// console.log(man.location)
// console.log(man.firstName)
// console.log(man.fullName())