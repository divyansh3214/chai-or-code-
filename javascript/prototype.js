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
