function Person(name, age) {
    // console.log("This is a method");
    this.name=name;
    this.age=age;
}

const newArray = ["hello", "world", "dear", "you", "beautiful"]
// console.log(newArray);

const getArray = newArray.map((Array)=>{
    const items = Array
    console.log(items);
})

// instantiate an object with new ObjectName
const Eugene = new Person("Thomas", 30)
const thiago=new Person("Thiago", 24)
const jackson = new Person("Jackson", 21)
console.log(Eugene);
console.log(thiago);
console.log(jackson.name, jackson.age);