//---------------- Array----------------

/* const myArr = [0, 1, 2, 3, 4, 5];

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array (1,2,3,4) */

//console.log(myArr2[1]);

// Array Methods

/* myArr.push(6);
myArr.push(7);
myArr.pop() */

//myArr.unshift(9);
//myArr.shift();

/* console.log(myArr.includes(9));

console.log(myArr.indexOf(2)); */

/* const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr); */

// Slice and splice method

//console.log("C", myArr);

/* const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B" , myArr); */

/* const myn2 = myArr.splice(1,3);
console.log("D" , myArr);
console.log(myn2);
 */

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["supermna", "flash", "batman"];

/* marvel_heros.push(dc_heros);
console.log(marvel_heros[3][1]); */

/* const new_heros = marvel_heros.concat(dc_heros);
console.log(new_heros); */

const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);

/* console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // intresting its gonna return only empty string
 */

let score1 = 100;
let score2 = 200;
let score3 = 300;
//console.log(Array.of(score1,score2,score3));


/* // all following calls return True
const arr1 = Array.isArray([]);
const arr2 = Array.isArray([1]);
const arr3 = Array.isArray(new Array());
const arr4 = Array.isArray(new Array("a", "b", "c", "d"));
const arr5 = Array.isArray(new Array(3));

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5); */

/* 
// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32)); */
