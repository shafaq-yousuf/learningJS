// //  chapter 1

// alert("hello js");

// // chapter 2

// var a = ("my world")
// alert(a)

// // chapter 3

// var b = 18
// alert(b)

// // chapter 4
// // var var  // illegal
// // var 12  // illegal
// // var abc // legal
// // var ab12 // legal

// // chapter 5

// var c = 10
// var d = 20
// var e = c + d
// alert(e)

// // chapter 6

// var f = 10
// var g = f++
// var h = --g
// alert(g)
// alert(h)

// console.log(g)
// console.log(h)

// // chapter 7

// var i = c + d
// var j = c * d
// var k = c - d
// var l = c / d

// alert(i)
// alert(j)
// alert(k)
// alert(l)

// // chapter 8

// var m = c + d
// var n = a + c
// alert(m)
// alert(n)

// var eng = +prompt

// chapter 15 to 20

// var z = ["a", "b", "c", "d", "e", "f"]

// z.push("y", "z")
// z.pop()
// z.shift()
// z.unshift("0")
// var x = z.slice(1 , 3)
// var y = z.splice(3 , 3)

// console.log(y)

// for (var s=1; s<11; s++ ){
// console.log("2 " + "x " + s + "= " + s*2)
// }

// var a = Math.random();

// for hat and tail
// var toss = Math.round(a)
// console.log(toss)

// for ludo dice game
// var dice = Math.ceil(a * 6);
// if(dice == 1){
//     alert("you got 1")
// }else if(dice == 2){
//     alert("you got 2")
// }
// console.log(dice)

// var dt = new Date()
// var dt = new Date("1-Dec-2002")
// var dt = new Date("12-01-2003")

// var a = dt.getDate()
// var a = dt.getDay()
// var a = dt.getMonth()
// var a = dt.getFullYear()
// var a = dt.getHours()
// var a = dt.getSeconds()
// var a = dt.getMilliseconds()
// var a = dt.getHours()
// var day = ["sun", "mon", "tues", "wed", "thur", "fri", "sat"]
// console.log(day[a])

// dt.setDate(18);
// dt.setMonth(9);
// dt.setFullYear(1999);
// dt.getHours(00);
// dt.getMinutes(00);
// dt.setSeconds(00);
// console.log(dt)

// for finding age

// var dt1 = new Date();
// var dt2 = new Date("1-jan-2000");
// var a = dt1.getTime();
// var b = dt2.getTime();
// var currentMs = a - b;
// var sec = currentMs/(1000*60*60*24*12*365)
// var age = Math.floor(sec)

// console.log(a);
// console.log(b);
// console.log(currentMs);
// console.log(sec);

// functions

// function discountcalculator(a,b){
//     var amount = a;
//     var discount = b;
//     var totalcost = amount - discount;
//     console.log(totalcost);
// }
// discountcalculator(100,20);
// discountcalculator(200,50);
// discountcalculator(300,100);
// discountcalculator(400,150);
// discountcalculator(500,200);

// local variable

// function local(){
//     var age = "thirty"
//     console.log(age)
// }
// local()

// global variable

// var glob = "forty"

// function global(){
//     glob = "fifty"
// }
// global();
// console.log(glob)

// return topic

// function abc(){
//     var a = 20;
//     return a;
// }
// var c = abc();
// console.log(c)

// switch case

// var day = "tues";

// switch (day) {
//     case "sun":
//         console.log("off");
//         break;

//     case "mon":
//         console.log("first day");
//         break;

//     case "tues":
//         console.log("second day");
//         break;

//     case "wed":
//         console.log("third day");
//         break;
// }

// while loop (console before itration)

// var i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// while loop (console after itration)

// var j = 0;
// while(j<10){
//     j++;
//     console.log(j);
// }

// do while loops

// var k = 0;
// do{
//     console.log(k);
//     k++;
// }while(k<10)

// events

// function diff(a){
//     console.log(a)
// }

// input events

// function abc(a){
//     console.log(a)
// }
// var textinput = document.getElementById("inp");
// var texterror = document.getElementById("error");
// var array = [];

// function textinp(){
// var value = textinput.value;
// if(value == ""){
//     texterror.value = "enter value"
// } else {
//     array.push(textinput.value);
//     console.log(array)
// }
// }

// images change topic

// function abc(a){
// console.log(a);
// a.src = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
// }
// function cba(a){
// a.src = "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
// }

// var main = document.getElementById("main")
// function add(){
//     var para = document.createElement('P');
//     var paratext = document.createTextNode("paragraph123");
//     para.appendChild(paratext);
//     main.appendChild(para);
// }

// objects

// var student1 = {
//     name: "ali",
//     age: 18,
//     rollNum: 1890,
//     course: "web development"
// };
// var student2 = {
//     name: "husnain",
//     age: 19,
//     rollNum: 1891,
//     course: "web development"
// };
// var student3 = {
//     name: "yousuf",
//     age: 18,
//     rollNum: 1893,
//     course: "web development"
// };
// var student4 = {
//     name: "asad",
//     age: 18,
//     rollNum: 1894,
//     course: "web development"
// };
// var student5 = {
//     name: "arif",
//     age: 18,
//     rollNum: 1895,
//     course: "web development"
// };
// var student6 = {
//     name: "aleem",
//     age: 18,
//     rollNum: 1896,
//     course: "web development"
// };
// var student7 = {
//     name: "ammar",
//     age: 18,
//     rollNum: 1897,
//     course: "web development"
// };
// var student8 = {
//     name: "asif",
//     age: 18,
//     rollNum: 1898,
//     course: "web development"
// };
// var student9 = {
//     name: "areej",
//     age: 18,
//     rollNum: 1899,
//     course: "web development"
// };
// var student10 = {
//     name: "faham",
//     age: 18,
//     rollNum: 1990,
//     course: "web development"
// };
// var studentDetail = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];

// var input = document.getElementById("rollNum");
// function searchRollNum() {
//     for (var i = 0; i < studentDetail.length; i++) {
//         if (input.value == studentDetail[i].rollNum) {
//             console.log(studentDetail[i])
//         }
//     }
// }
// student.fatherName= "ahmed";
// delete student.course;
// var a = "qualification" in student;
// console.log(student);
// console.log(a)

// constructor object

// function Abc(name, age, rollNum){
// this.name= name;
// this.age= age;
// this.rollNum= rollNum;
// }
// Abc.prototype.institute= "SAIMS";
// var obj = new Abc("shafaq", 19, "sm-198");
// var obj1 = new Abc("yusra", 14, "sm-199");
// console.log(obj, obj1);

// browser handling

// var a = window.location.href;  //(page ki url ayegi);
// var b = window.location.hostname; //(getting hostname);
// var c = window.location.pathname; //(for getting path name)
// var d = window.location.hash; //(gor getting hash);
// var e = window.location.assign() //(assign new url);
// var f = window.location.replace() //(replace url);
// var g = history.go //(it can be + for forward and - for reverse);
// var h = history.forward(); //for forward
// var i = history.back(); // for reverse
// var j = window.open(); //open blank window
// var k = window.open("https://www.facebook.com"); //for open any window
// var l = window.open("https://www.facebook.com", "win1", "height=500, width=450, top=200, left=300"); // for popup

// console.log(k)

// var inp = document.getElementById("input");
// function submit(){
//     if(inp.value == ""){
//         alert("error")
//     } else {
//         console.log(inp.value)
//     }
// }

// var select = document.getElementById("select");
// function submitCity(){
//     if(select.value == ""){
//         alert("error")
//     } else{
//         console.log(select.value)
//     }
// }
const array = [{ id: 1, name: "basit" }];
const array2 = {id: 1}
const equal = array.filter((x) => x.id === array2.id);
console.log(equal);
