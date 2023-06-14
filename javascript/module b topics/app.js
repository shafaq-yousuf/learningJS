// ========var, lets, const========

// =====var=====
// redeclareable(y)
// reassignable(y)
// blockscope(n)
// hoist(y)

// =====let=====
// redeclareable(n)
// reassignable(y)
// blockscope(y)
// hoist(n)

// =====const=====
// redeclareable(n)
// reassignable(n)
// blockscope(y)
// hoist(n)

// var & functions are hoisting



// =====Template Literals=====

// var a = "shafaq";
// var b = `My name is ${a}`;
// console.log(b)

// =====Ternary operator=====

// ===1st situation===

// var marks = 60;

// if(marks<70){
//     console.log("pass")
// } else{
//     console.log("fail")
// }

// marks<70 ? console.log("pass") : console.log("fail");

// ===2nd situation===

// var marks = 30;

// if (marks > 80) {
//     console.log("excellent")
// } else if (marks > 50) {
//     console.log("good")
// } else {
//     console.log("bad")
// };

// marks > 80 ? console.log("excellent") : marks > 50 ? console.log("good") : console.log("bad");

// ===== Circuits =====

// let bool = true;
// let total = bool && "abc";
// console.log(total);

// let bool = false;
// let total = bool && "abc";
// console.log(total);

// let bool = true;
// let total = bool || "abc";
// console.log(total);

// let bool = false;
// let total = bool || "abc";
// console.log(total);

// let num = "ab" * 5;
// let total = num || 10;
// console.log(total);

// ===== object methods=====

// let obj = {
//     id: 1,
//     name: "shafaq",
//     category: "A"
// };
// let arr = Object.keys(obj);
// let arr = Object.values(obj);
// let arr = Object.entries(obj);
// Object.freeze(obj);
// obj.category = "c"
// console.log(obj);

// // ===== spread operators =====

// let conf = {
//     adress: "abc",
//     area: 12
// }

// let confo = conf;

// confo.id = "xyz"
// console.log(conf, confo);

// let config = {
//     name: "abc ",
//     class: 5,
//     sec: "b"
// }

// let std1 = {
//     inst: "saims",
//     course: "web",
//     ...config
// }
// console.log(std1)

// let array1 = [1, 2, 3]
// let array2 = ["a", "b", ...array1, "c"]
// console.log(array2)

// let a = {
//     name: "abc ",
//     class: 5,
//     sec: "b"
// }
// let b = {
//     inst: "saims",
//     course: "web",
//     ...a
// }
// b.id = 124
// console.log(b)

// let c = [1, 2, 6]
// let d = [...c]
// d.push(789)
// console.log(d)

// let obj = {
//     name: "ahmed",
//     id: 1,
//     details: {
//         city: "khi",
//         country: "pak"
//     }
// }
// let obj2 = { ...obj };
// delete obj2.details
// console.log(obj, obj2)

// let arr1 = [
//     {
//         name: "ahmed",
//         id: 1,
//         details: {
//             city: "khi",
//             country: "pak"
//         }
//     }
// ]

// let arr2 = JSON.parse(JSON.stringify([...arr1]))
// delete arr2[0].details
// console.log(arr1, arr2)

// // ===== rest operators =====

// function abc(...rest){
//     console.log(rest)
// }
// abc(1,2,3,4)


// // ===== Destructure =====

// let datafromlocalstorage = {
//     id: 1,
//     name1:"abc",
//     useername:"abc123",
//     contact:1132232435
// }

// let {id, name1, useername, contact} = datafromlocalstorage

// console.log(id);
// console.log(name1);
// console.log(useername);
// console.log(contact);

// let arr = ["abc", "mno", "pqr", "jkl", "xyz"]
// let [val01,val2,,,val5] = arr
// console.log(val5)


// let array = [
//     2,
//     2,
//     3,
//     "abc",
//     "ty",
//     [
//       true,
//       { id: 374, details: [{ id: 1, name: "Abu Bakar", dt: [1, 2, 3, 4, 5] }] },
//     ],
//   ];

// let {name} = array[5][1].details[0]
// // let[] = array
// console.log(name)

// let [val1] = array[5][1].details[0].dt
// console.log(val1)

// ===== Functions =====

// === Higher Order Functions ===
// === Call Back Functions ===

// // function abc is higher order function... jo function apne parameter me kisi ko dusre function ko call kr rha ho
// function abc(a) {
//     console.log(a)
// }

// // function xyz is call back function... woh function jo khd kisi function k parameter me call ho rha ho
// function xyz(x) {
//     return x;
// }
// abc(xyz("names"));


// function mno(a) {
//     console.log(a)
//     return function(b){
//         console.log(b)
//     }
// }
// mno("abc")("xyz") // another way of calling function
// let returnValue = mno("abc");
// returnValue("xyz");

// === Arrow Function === ese functions space nhi lete memory me... yeh let me save hote hen

// let a = function(){     //normal function
//     console.log("abc")
// };
// a();

// let b = (b) => {      //arrow function
// console.log(b)
// }
// b("done");

// let c = () => {
//     return "abc"
// }
// console.log(c())

// let d = (()=> {
//     return "mno"
// })();
// console.log(d)

// // === one line arrow function ===
// const arr = a => a*5; // a is argument, a*5 is return 
// console.log(arr(8));
// let abc = () => "xyz"; // xyz is return 
// console.log(abc())

// // ===== lexical scoping =====

// let a = "ABC";
// let mno = () => {
//     let a = 123;
//     console.log(a)
// };
// mno(); // here console shows 123 found in locally... this behaviour is lexical scoping

// let b = "ABC";
// let pqr = () => {
//     console.log(b)
// };
// pqr() // here console shows abc found globally... this behaviour is lexical scoping

// // ===== default parameter =====

// let abc = (a = "default") => { // here it shows which we enter
//     console.log(a)
// };
// abc(123);
// abc("xyz");
// abc();

// // ===== Array Functions =====

// // prompt is a method(return something) and alert is a function
// // alert is a function
// // math.random is a method
// // map array k prototype se ata he
// // return srf ek hi cheez hoti he, return srf ek hi bar chlata he

// let Arr = [1,2,3,4,5,6]

// // === forEach method === itself a method...new array return ni krta he
// let newArray = Arr.forEach((e, i)=>{
//     e = e + "a";
//     console.log(e)
// })
// console.log(Arr)
// console.log(newArray)

// // === map method === itself a method... map new array return krta he

// let newArray = Arr.map((e, i)=>{
//         console.log(e)
//         return e*2
//     })

//     console.log(Arr)
//     console.log(newArray)



// let newArr = Arr.map(function(a, b){ // a is value, b is index

// })
// console.log(newArr)

// // ==== filter method =====

// let arr = [
//     {
//       id: 1,
//       name: "ABC",
//       category: "C",
//     },
//     {
//       id: 2,
//       name: "XYZ",
//       category: "A",
//     },
//     {
//       id: 3,
//       name: "MNO",
//       category: "A",
//     },
//     {
//       id: 4,
//       name: "JKL",
//       category: "B",
//     },
//     {
//       id: 5,
//       name: "LPO",
//       category: "C",
//     },
//     {
//       id: 6,
//       name: "TYU",
//       category: "A",
//     },
//     {
//       id: 7,
//       name: "LKJ",
//       category: "B",
//     },
//     {
//       id: 8,
//       name: "OLK",
//       category: "A",
//     },
//     {
//       id: 9,
//       name: "JHG",
//       category: "B",
//     },
//     {
//       id: 10,
//       name: "ERT",
//       category: "A",
//     },
//   ];

// let arr2 = arr.filter((x) =>{
//     if(x.category == "C"){
//         return x;
//     }
// })
// console.log(arr2)

// // === for finding id, name, category in array as array===
// let ids = arr.map(x => [x.name])
// let idss = arr.map(x => [x.id])
// let idsss = arr.map(x => [x.category])

// console.log(ids, idss, idsss)

// // === for finding id, name, category in array as object===
// let ids = arr.map(x => ({name:x.name}))
// let idss = arr.map(x => ({id:x.id}))
// let idsss = arr.map(x => ({category:x.category}))

// console.log(ids, idss, idsss)

// // === get only id from arr by 2 different method ===

// let arr2 = arr.filter(x => {
//     if(x.category == "A"){
//         return x
//     }
// }).map(x => x.id)
// console.log(arr2);

// let arr2 = arr.map(x => {
//     if(x.category == "A"){
//         return x.id
//     }
// }).filter(Boolean);
// console.log(arr2)

// let mobiles = [
//   {
//       name: "a30",
//       ram: "4gb",
//       rom: "64gb",
//       camera: "50px",
//       price: 2000,
//       brand: "samsung"
//   },
//   {
//       name: "note10",
//       ram: "6gb",
//       rom: "128gb",
//       camera: "50px",
//       price: 4000,
//       brand: "samsung"
//   },
//   {
//       name: "s10",
//       ram: "3gb",
//       rom: "128gb",
//       camera: "10px",
//       price: 5000,
//       brand: "samsung"
//   },
//   {
//       name: "iphone4",
//       ram: "4gb",
//       rom: "64gb",
//       camera: "50px",
//       price: 10000,
//       brand: "iphone"
//   },
//   {
//       name: "iphone4s",
//       ram: "4gb",
//       rom: "64gb",
//       camera: "50px",
//       price: 20000,
//       brand: "iphone"
//   },
//   {
//       name: "iphone5",
//       ram: "4gb",
//       rom: "64gb",
//       camera: "50px",
//       price: 30000,
//       brand: "iphone"
//   },
//   {
//       name: "iphone6",
//       ram: "4gb",
//       rom: "64gb",
//       camera: "50px",
//       price: 30000,
//       brand: "iphone"
//   },
//   {
//       name: "redminote10",
//       ram: "4gb",
//       rom: "64gb",
//       camera: "50px",
//       price: 10000,
//       brand: "xiaomi"
//   },
//   {
//       name: "redminote11",
//       ram: "4gb",
//       rom: "64gb",
//       camera: "50px",
//       price: 10000,
//       brand: "xiaomi"
//   },
//   {
//       name: "redmi10",
//       ram: "4gb",
//       rom: "64gb",
//       camera: "50px",
//       price: 10000,
//       brand: "xiaomi"
//   },
//   {
//       name: "redmi10pro",
//       ram: "4gb",
//       rom: "64gb",
//       camera: "50px",
//       price: 10000,
//       brand: "xiaomi"
//   },
//   {
//       name: "a3s",
//       ram: "4gb",
//       rom: "64gb",
//       camera: "50px",
//       price: 10000,
//       brand: "oppo"
//   },
// ];

// // === find ===


// let findInd = mobiles.findIndex((x)=> x.name == "note10")
// console.log(findInd)

// // === some ===

// let some = mobiles.some((x)=>x.name == "note11")
// console.log(some)

// // === flat ===

// let arr = [1,2,3,[4,5,6,[7,8,9]]]
// arr = arr.flat(3) // infinity for more nested items
// console.log(arr)

// // === max ===

// let numArr = [1,45,787,432,09,2,5465,787,21,56,87,54,6,8,8,53,32]
// let max = Math.max(...numArr)
// console.log(max)

// ===== promise =====

// let jobRequirement = (age, language, nationality) => {
//     return new Promise((resolve, reject) => {
//         if (
//             age > 18 && language == true && nationality == true
//         ) { resolve("congrats") }
//         else (reject("try again"))
//     })
// }

// jobRequirement(20, true, true).then((res) => { console.log(res) }).catch((err) => { console.log(err) })
