function Person(name, age) {
    console.log("This is a method");
    this.name=name;
    this.age=age;
}
// instantiate an object with new ObjectName
const Eugene = new Person("Thomas", 30)
const thiago=new Person("Thiago", 24)
const jackson = new Person("Jackson", 21)
console.log(Eugene);
console.log(thiago);
console.log(jackson.name, jackson.age);