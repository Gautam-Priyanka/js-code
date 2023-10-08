const mySym = Symbol("Key1");

const jsUser = {
  name: "Hitesh",
  "Full name": "Hitesh Roy",
  age: 18,
  [mySym]: "myKey1", // way of define symbol in object
  location: "Pune",
  email: "hitesh@gmail.com",
  isLoggedIn: false,
  lastLoggedDays: ["Monday", "Saturday"],
};

//console.log(jsUser);

//console.log(jsUser["Full name"]);

//Object.freeze(jsUser);  // gonna freeze the values we cannot change it in future

//jsUser.email = "hitesh@google.com";
//console.log(jsUser);
/* -----------Function------------ */

/* jsUser.greetings = function(){
    console.log("Hello JS USer");
}
jsUser.greetingsTwo = function(){
    console.log('Hello JS USer ${this.name}');
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());
console.log(jsUser.greetings);
console.log(jsUser.greetingsTwo); */

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

/* const obj3 = Object.assign({},obj1,obj2);
console.log(obj3); */

const obj3 = { ...obj1, ...obj2 };

const user = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];
