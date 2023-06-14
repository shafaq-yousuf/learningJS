// form assignment

// var textinput = document.getElementById("inp1");
// var texterror = document.getElementById("error1");
// var textinput2 = document.getElementById("inp2");
// var texterror2 = document.getElementById("error2");
// var textinput3 = document.getElementById("inp3");
// var texterror3 = document.getElementById("error3");
// var textinput4 = document.getElementById("inp4");
// var texterror4 = document.getElementById("error4");
// var textinput5 = document.getElementById("inp5");
// var texterror5 = document.getElementById("error5");
// var textinput6 = document.getElementById("inp6");
// var texterror6 = document.getElementById("error6");
// var array = [];

// function submit() {
//     var value = textinput.value;
//     if (value == "") {
//         texterror.value = "*enter first name"
//     } else {
//         array.push(textinput.value)
//         // console.log(array)
//     };
//     var value2 = textinput2.value;
//     if (value2 == "") {
//         texterror2.value = "*enter last name"
//     } else {
//         array.push(textinput2.value)
//         // console.log(array)
//     };
//     var value3 = textinput3.value;
//     if (value3 == "") {
//         texterror3.value = "*enter email"
//     } else {
//         array.push(textinput3.value)
//         // console.log(array)
//     };
//     var value4 = textinput4.value;
//     if (value4 == "") {
//         texterror4.value = "*enter phone no"
//     } else {
//         array.push(textinput4.value)
//         // console.log(array)
//     };
//     var value5 = textinput5.value;
//     if (value5 == "") {
//         texterror5.value = "*enter your age"
//     } else {
//         array.push(textinput5.value)
//         // console.log(array)
//     };
//     var value6 = textinput6.value;
//     if (value6 == "") {
//         texterror6.value = "*enter password"
//     } else {
//         array.push(textinput6.value)
//         // console.log(array)
//     };
// let values = 
// firstname: value;
// lastname: value2;
// email: value3;
// }

// assignment 2

// Q no 1

// var userinput = prompt("enter your name");
// var capital = userinput.toUpperCase();
// console.log(capital)

// Qno 2

// var userinput = prompt("enter your name");
// var capital = userinput.charAt(0).toUpperCase();
// capital = userinput.toLowerCase();
// console.log(capital)

// Q no 3

// var model = prompt("enter your favourite mobile model");
// var length = model.length;
// console.log(length)

// Q no 4

// var model = prompt("enter your favourite mobile model");
// var lastalpha = model.charAt(model.length-1);
// console.log(lastalpha)

// Q no 5

// var word = "Pakistani";
// var find = word.indexOf('n')
// console.log(find)

// Q no 6

// var username = prompt("enter user name");
// var special = ("!@~#$%^&*()_+=-`");

// function check(){
//     for(var i = 0; i<special.length; i++){
//         if(username.indexOf(special[i]) > -1){
// return true
//         }
//     }
//     return false
// }
// check();
// if(check(username)){
//     alert("not valid")
// } else {
//     alert("valid")
// }

// Qno 8

// var word = "pakistani";
// var find = word.charAt("3");
// console.log(find)

// Q no 9

// var city = "hyderabad";
// var newcity = city.slice(0,5); 
// var rep = newcity.replace("hyder","islam");
// console.log(rep + "abad")

// Q no 10

// var num = prompt("enter integer");
// var round = Math.round(num);
// var ceil = Math.ceil(num);
// var floor = Math.floor(num);
// console.log(round , ceil , floor);

// Q no 11

// var num = prompt("enter negative integer");
// var round = Math.round(num);
// var ceil = Math.ceil(num);
// var floor = Math.floor(num);
// console.log(round , ceil , floor);

// Q no 12

// var random = Math.random();
// var dice = Math.ceil(random * 6);
// console.log(dice)

// Q no 13

// var random = Math.random();
// var toss = Math.ceil(random * 2);
// console.log(toss)
// if(toss == 1){
//     alert("tails")
// } else {
//     alert("head")
// }

// Q no 14

// var secret = 8;
// var number = +prompt("enter  no between 1 to 10");
// if(number == secret){
//     alert("congratulations, number match")
// } else {
//     alert("try again")
// }

// Q no 15

// var age = +prompt("enter your weight in kg");
// var change = age.toString();
// console.log(change);

// Q no 16

// var any = "472";
// var con = Number(any);
// console.log(con);

// Q no 17

// var no = 35.36;
// var neww = no.toString();
// var parse = parseFloat(neww);
// console.log(parse * 100)

// Q no 18

// var percentage = 30/45 * 100;
// percentage = percentage.toFixed(2);
// console.log(percentage)

// chapter 31 to 34

// Q no 1

// var dt = new Date();
// console.log(dt)

// Q no 2

// var mon = dt.getMonth();
// var monarray = ["jan", "feb", "march", "april", "may", "jun", "july", "aug", "sep", "oct", "nov", "dec"]
// alert("Current Month: " + monarray[mon]);

// Q no 3

// var day = ["sun", "mon", "tues", "wed", "thur", "fri", "sat"];
// var dayy = dt.getDay();
// alert("Today is " + day[dayy]);

// Q no 4

// var dt = new Date();
// var day = ["sun", "mon", "tues", "wed", "thur", "fri", "sat"];
// var din = dt.getDay();
// console.log(day[din])
// switch (day[din]) {
//     case "sun":
//         alert("its fun day");
//         break;
//     case "sat":
//         alert("its fun day");
//         break;
//     default: alert("its " + day[din])
// }

// Q no 5

// var dt = new Date();
// var datee = dt.getDate();
// if(datee < 16 ){
// alert("first fifteen days of month")
// } else {
// alert("last fifteen days of month")
// }
// console.log(datee)

// Q no 6

// var dt = new Date();
// var dt2 = new Date("5,dec,2015");
// var time = dt.getTime();
// var time2 = dt2.getTime();
// var totaltime = time - time2;
// var minutes = (totaltime/1000)/60;
// console.log(minutes);

// Q no 7

// var laterdate = new Date("31,dec,2020");
// console.log(laterdate);

// Q no 8

// var ramzan = new Date("18,june,2/022");
// var dt = new Date();
// var dtram = ramzan.getTime();
// var dtdt = dt.getTime();
// var daypassed = dtdt - dtram;
// var total = dtram/(1000*60*60*24);
// console.log(total)
// console.log(dtdt)

// Q no 9

// var dt = new Date();
// var hr = dt.getHours();
// console.log(hr - 1);

// Q no 10

// var dt = new Date("28,nov,1922");
// console.log(dt);

// Q no 11

// var dt = new Date();
// var yr = dt.getFullYear();
// var agee = +prompt("enter your age");
// var birthyr = yr - agee;
// console.log(birthyr);

// chapter 35 to 38

// Q no 1

// function time(){
//     var dt = new Date();
//     console.log(dt)
// }
// time();

// Q no 2

// function greet(){
//     var firname = prompt("enter first name");
//     var lastname = prompt("enter last name");
// alert("hey,, " + firname + lastname)
// }
// greet();

// Q no 3

// function sum(){
// var a = +prompt("enter first no");
// var b = +prompt("enter second no");
// var total = a + b;
// alert(total); 
// }
// sum();

// Q no 4

// function addnum(a,b){
//     return a + b;
// }
// var sum = addnum(14,16)
// alert(sum)

// Q no 5

// function square(a){
//     return a*a
// }
// var ans = square(5);
// alert(ans)

// Q no 6

// function factorial(n){
// var answer = +prompt("enter no");
//     if (n == 0 || n == 1) {
//         alert(answer)
//     } else {
//         for (var i = n; i >= 1 ; i--) {
//             answer = answer * i
//         }
//         console.log(answer)
//     }
// }
// factorial();

// var main = document.getElementById("main")
// function add(){
//     var para = document.createElement('P');
//     var paratext = document.createTextNode("paragraph123");
//     para.appendChild(paratext);
//     main.appendChild(para);
// }


// var a = {
//     mobiles: {
//       samsung: {
//         a30: {
//           name: "a30",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 2000,
//         },
//         note10: {
//           name: "note10",
//           ram: "6gb",
//           rom: "128gb",
//           camera: "50px",
//           price: 4000,
//         },
//         s10: {
//           name: "s10",
//           ram: "3gb",
//           rom: "128gb",
//           camera: "10px",
//           price: 5000,
//         },
//       },
//       iphone: {
//         iphone4: {
//           name: "iphone4",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//         iphone4s: {
//           name: "iphone4s",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 20000,
//         },
//         iphone5: {
//           name: "iphone5",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 30000,
//         },
//         iphone6: {
//           name: "iphone6",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 30000,
//         },
//       },
//       xiomi: {
//         redminote10: {
//           name: "redminote10",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//         redminote11: {
//           name: "redminote11",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//         redmi10: {
//           name: "redmi10",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//         redmi10pro: {
//           name: "redmi10pro",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//       },
//       oppo: {
//         a3s: {
//           name: "a3s",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//       },
//     },
//   };

//   var brand = document.getElementById("brand");
//   var model = document.getElementById("model");

 
//   function searchModel(){
//       console.log(a.mobiles[brand.value][model.value]);

//   }

// pass by value
// pass by reference


// var arr = [
//     1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0,
//     0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1,
//     0, 0, 0, 1, 0, 1,
//   ];

//   for(var i = 0; i < arr.length; i++){

//   }
