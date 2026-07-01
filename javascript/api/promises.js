
//promise is a object itself
//callback function is passed to the promise constructor
//two parts of callback function are resolve and reject
//if promise created then consume it also
const promise1=new Promise((resolve,reject)=>{
    //do an async task
    setTimeout(()=>{
        console.log("Async task is completed");
    },1000);
    resolve();
})
//consume the promise
//.then also have callback function which is executed when promise is resolved
promise1.then(()=>{
    console.log("Promise is consumed");
})


const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([{name:"John",age:30},{name:"Jane",age:25}]);
    },1000);
})

promise3.then((values)=>{// all values are passed to the then callback function
    console.log(values);
})
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve([{ name: "John", age: 30 }, { name: "Jane", age: 25 }]);
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

const user = promise4.then((values) => {
  console.log(values);
  return values; // optional: return something from .then
});

console.log(user); // logs a Promise immediately

