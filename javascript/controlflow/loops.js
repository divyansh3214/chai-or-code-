//for of loop->give the value of the array
const array=[1,2,6,3,4,5];
for(const iterator of array){
    console.log(iterator);
}

//for in loop->gives the index of the array
const object={name:"hitesh", age:25, website:"youtube"};
for(const key in object){
    console.log(key, object[key]);
}

//Map->do not work with for in loop, use for of loop instead
const map=new Map();
map.set('IN',"India");
map.set('US',"United States");
map.set('UK',"United Kingdom");
console.log(map);
for( const [key,value] of map){
    console.log(key, value);
}
//for each loop
const array1=[1,2,3,4,5];
array1.forEach(function(item){
    console.log(item);
});
map.forEach(function (key,value){
    console.log(key,value);
})
map.forEach((key,value)=>{
    console.log(key,value);
})
function printme(){
    console.log("hello");
}
array1.forEach(printme);//give reference of the function, not calling it, so no parenthesis is used
array1.forEach((index,value, array)=>{
    console.log(index, value, array);
})

const array2=[1,2,3,4,5,6,7,8,9,10];
const newnums=array2.filter((num)=>{
    return num > 5;
});
console.log(newnums);
const books=[{title:"Book 1", author:"Author 1"}, {title:"Book 2", author:"Author 2"}, {title:"Book 3", author:"Author 3"}];
const newbooks=books.filter((book)=>{//filter gives true or false, if true it will return the value of the array
    if(book.title==="Book 1"){
        return book;
    }
})
console.log(newbooks);
const numbers=[1,2,3,4,5,6,7,8,9,10];
const newnumbers=numbers.map((num)=>{
    return num*10;
}).map((num)=>{//chaining of map function
    return num+1;
});
console.log(newnumbers);

//reduce function
const numbers1=[1,2,3,4,5];
const sum=numbers1.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
},0);//0 is the initial value of the accumulator
console.log(sum);