const a = {
    FirstName: "jhon"
}
const b = {
    LastName: "Doe"
}
const c = {
    age: 30
}
const d = {
    number: 45
}

//using __proto__
// a.__proto__ = b
// b.__proto__ = c
// c.__proto__ = d

//using Object Create
const e = Object.create(a)
console.log(e.FirstName)

//Object.PrototypeOf(a,b) is not used much 
