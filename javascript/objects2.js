function multiply(num){
    return num * 2;
}
multiply.power = 2;
//console.log(multiply.power); // Output: 2
//console.log(multiply.prototype); // Output: {}

function createuser(username,score){
    this.username=username;
    this.score=score;
}
createuser.prototype.increment=function(){
    this.score++;
}
createuser.prototype.login=function(){
    console.log(`${this.username} has logged in`);
}
const chai = new createuser("chai",5);
const test = new createuser("test",10);
chai.increment();
console.log(chai.score);

function HeroPower() {
    this.thor = "hammer";
    this.spiderman = "sling";
    this.ironman = "suit";
}

HeroPower.prototype.getspiderpower = function() {
    console.log(`spiderman power is ${this.spiderman}`);
};

HeroPower.prototype.power = function(name) {
    if (name === "thor") {
        console.log(`thor power is ${this.thor}`);
    } else if (name === "spiderman") {
        console.log(`spiderman power is ${this.spiderman}`);
    } else if (name === "ironman") {
        console.log(`ironman power is ${this.ironman}`);
    }
};

let heropower = new HeroPower();
heropower.power("thor"); 
