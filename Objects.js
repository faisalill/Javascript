// There are two ways to create an object
// First using object constructor syntax
let newObject = new Object({
    name: "JHon",
    age: 2343,
})
// Second using object literal syntax
let anotherObject = {
    name: "Doe",
    age: 343
}
// Values can be accessed by either dot operator 
// or likethis
// console.log(anotherObject['age'])
// New values can be set by
anotherObject.address = "....."
// To delete a value
delete anotherObject.name
delete anotherObject['age']
// console.log(anotherObject)

// difference between accessing using [".."] and dot operator
// We can access values using another expression which can't 
// be done using dot operator --> returns undefined 
const keyOf = "name";
// console.log(newObject[keyOf])
// Square brackets can also be used as
const fruit = "apple";
let sampleObject = {
    [fruit]: "it is  fruit"
}
// console.log(sampleObject)

// To check for a value present in an object
// console.log("apple" in sampleObject) // Return true since it exists

// Why in is used above checking hte object===undefined
// It’s when an object property exists, but stores undefined
let obj = {
    test: undefined
  };
//   console.log( obj.test); // it's undefined, so - no such property?
//   console.log( "test" in obj ); // true, the property does exist!

//   for..in loop in objects to interate over the whole object
let testObject = {
    name: "Jhon Doe",
    age: 343,
    number: 34343343,
    school: "LMAO University"
}
for(key in testObject){
    // console.log(testObject[key])
}

// number keys are sorted in  an object
let numKeyObject = {
    '34': "thirty four",
    '53': "fifty three",
    "hello": "world",
    '3': "three",
    '1': "one"
}
for(key in numKeyObject){
    console.log(key)
}
// the output is a sorted object