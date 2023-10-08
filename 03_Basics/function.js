/* function addTwoNumbers(num1 , num2){
   console.log(num1 + num2); 
}
addTwoNumbers(3,null) */

function addTwoNumbers(num1, num2) {
  //console.log(num1 + num2);
  /* let result = num1 + num2
    return result */ // this is also a correct way but we have reduce the line code

  return num1 + num2; // after the return any code does not going to be work or execute
}
const result = addTwoNumbers(3, null);
//console.log("Result is:", result); // here the output is going to be undefined (Result is: undefined)

function loginUserMessage(username = "default value") // we can also set defalut values if you do'nt want to get undefined output
{
    // if we want tocheck the agrument is given or not
    if(!username) // if(undeined===0) these two are same work
    {
       // console.log("Please enter a username");
        return
    }
        return `${username} just logged in`;
}
//console.log(loginUserMessage("Hitesh"));
//console.log(loginUserMessage("Hitesh")); // undefined just logged in because you give nothing.

/* =========Rest operator========== */

function calculateCartPrice(...price) // here it is not spread operator it is rest operator
{

    return price
    
}
//console.log(calculateCartPrice(200,400,500,600)); // print the value in array form


/* ==========Interview question================= */

function calculateCartPrice(val1, val2, ...price) {

      return price
    
}
//console.log(calculateCartPrice(200,400,500,600)); 



/* =============Object in fnction=========== */

const user = {
    username:"hitesh",
    price : 199

}

function handleObject(anyobject) {
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username:"same",
    price:399
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,4000,4500]));