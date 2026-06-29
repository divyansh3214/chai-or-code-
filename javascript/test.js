
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
const id=Symbol('123');
const id2=Symbol('123');
console.table([id===id2]);