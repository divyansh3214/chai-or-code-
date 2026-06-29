let key = 'a';
switch(key){
    case 'a':
        console.log('You pressed A');
        break;
    case 'b':
        console.log('You pressed B');
        break;
    default:
        console.log('You pressed something else');
}
const empty={};
let d=Object.keys(empty).length;
let val1;
val1=null ??'default value'??10;//null is falsy so it will return 'default value'