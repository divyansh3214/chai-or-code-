function one(){
    const username="hitesh";

    function two(){
        const website="youtube";
        console.log(username);
    }
    //console.log(website);
    two();
}
one();

const addtwo=function(a){
    return a+2;
}
console.log(addtwo(5));

const chai=()=>{
    let usename="hitesh";
    console.log(usename);
}
chai();
const addtwo=(num1,num2)=>(num1+num2);
console.log(addtwo(5,6));
const objects=()=>({name:"hitesh", age:25});
console.log(objects());

(function chai(){//IIFE global scope pollution is avoided using this function
    console.log("hello");
})();

((name)=>{
    console.log(`hello ${name}`);
})("hitesh");