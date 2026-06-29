
"use strict";
let state="null";
console.table([
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 25, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' }
]);
console.table([typeof state, state]);
let val="33";
let val2=Number(val);
console.table([typeof val2, val2]);
let stringnumber=Number("33");
console.table([typeof stringnumber, stringnumber]);
//const id=Symbol('123');
//const id2=Symbol('123');
//console.table([id===id2]);
const obj1={name:"Alice"};
const obj2={name:"Alice"};
console.table([obj1===obj2]);
const array=[1,2,3];
console.table([array[0], array[1], array[2]]);
const myFunction= function() {
  console.log(obj1.name);
}
console.log(myFunction());
console.log(`The name is ${obj1.name}`);
const hell="Hello, World!";
console.log(hell.indexOf("World"));
const url="https://www.exa%20mple.com";
console.log(url.replace('%20','-'));
let mydate=new Date();
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toISOString());
mydate.toLocaleDateString('default',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
);
const array=[1,2,3,4,5];
console.log(array.slice(1,3));
console.log(array.includes(3));
console.log(array.indexOf(3));
const array2=array.join();//string 
// note splice deletes a section on original array while slice does not
const array3=array.concat([6,7,8]);
console.log(array2);
console.log(array3);
const all_new_values=[...array, ...array3];
console.log(all_new_values);
const another_array=[1,2,3,4,5,[6,7,8],[9,10,11,[12,13]]];
const real_array=another_array.flat(infinity);
//note that flat() method is used to flatten an array of arrays into a single array. The argument passed to flat() specifies the depth level to which the array should be flattened. In this case, we are using infinity to flatten all levels of nested arrays.
console.log(Array.isArray(real_array));
console.log(Array.from("hitesh"));