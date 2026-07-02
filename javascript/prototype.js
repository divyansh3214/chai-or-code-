let myheros=["thor","spiderman","ironman"];
let heropower={
    thor:"hammer",
    spiderman:"sling",
    ironman:"suit",
    getspiderpower:function(){
        console.log(`spiderman power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh=function(){
    console.log("hitesh is a good boy");
}

heropower.hitesh();
myheros.hitesh();

//inheritance
const username={
    username:"hitesh"
}
const Teacher={
    makevideo:true
}

const TeachingSupport={
    isavailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fulltime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=username;

//modern syntax
Object.setPrototypeOf(Teacher,username);//prototypal inheritance


