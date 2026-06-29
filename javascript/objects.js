//object lterals -singletons
const mysym=Symbol("key1");//symbol is a primitive data type that is unique and immutable. It can be used as a key for object properties, ensuring that the property name is unique and cannot be accidentally overwritten or accessed by other code.
const obj={
    name:"hitesh",
    age:22,
    isAdult:true,
    [mysym]:"my symbol value",//computed property name using symbol
    hobbies:["coding","reading","gaming"],
    address:{
        street:"123 main st",
        city:"New York",
        state:"NY"
    },
    greet:function(){
        console.log(`Hello, my name is ${this.name}`);
    }
};
console.table([obj.name, obj.age, obj.isAdult, obj.hobbies, obj.address.street, obj.address.city, obj.address.state]);
obj.greet();
console.log(obj["name"]);
console.log(obj[mysym]);
Object.freeze(obj);//freeze the object to prevent any modifications
console.log(obj);
//other properties can be added outside the object literal using dot notation or bracket notation, but they will not be added to the object if it is frozen.    
const obj2={
    name:"hitesh",
    age:22,
    isAdult:true,
    hobbies:["coding","reading","gaming"],
    address:{
        street:"123 main st",
        city:"New York",
        state:"NY"
    },
    greet:function(){
        console.log(`Hello, my name is ${this.name}`);
    }
};
const obj3=Object.assign({}, obj2,obj);//create a shallow copy of obj2 using Object.assign() method
const obj4={...obj2,...obj};//create a shallow copy of obj2 using spread operator
const array1=[obj2,obj3,obj4];
console.table(array1);
console.log(Object.keys(obj));//returns an array of the object's own enumerable property names
console.log(Object.values(obj));//returns an array of the object's own enumerable property values
console.log(Object.entries(obj));//returns an array of the object's own enumerable property [key, value] pairs
console.log(obj.hasOwnProperty("name"));//returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it)
