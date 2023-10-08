
var c = 300
let a = 100

if(true){
    let a =10;
    const b =20;
    var c = 30;
    d = 40;
   // console.log(`inner let `, a);
}

//console.log(a); // not gonna work 
//console.log(b); // not gonna work 
//console.log(c);  //work gonna print 
//console.log(d);  //work
/* 
function one(){
    const username = "Hitesh"

    function two() {
        const website  = "youtube"
        //console.log(username);
      }
      two()
}
//one() */


if(tre){
    const username = "Hitesh"
    if(username ==="Hitesh"){
        const website = "Youtube"
       // console.log(username + website);
    }
   // console.log(website); // error because of scope
}
// console.log(username); // error because of scope


/* --=========================== */
//one(2)  // we can call over here too no error
function  one (n){
    return n+2
}
 // one(2) // in this we can write over here no error 

 //two(3) error over here because of the scope level
 const num = function two(n){
    return n+4
 }
 // two(3) // no error