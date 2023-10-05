// FUNCTION = Chapter 35-38


// Ques ------ 1

// function currentDate() {
//     var newDate = new Date();
//     alert(newDate);
// }
// currentDate();


// Ques ------ 2

// function userName(firstname,lastname) {
//     alert(firstname,lastname);
// }
// var first = prompt("First Name");
// var second = prompt("Last Name");
// userName(first + " " + second)


// Ques ------ 3

// function addNumber(){
//     var num1 = +prompt("Enter First Value");
//     var num2 = +prompt("Enter second Value");
//     var add = num1 + num2
// return add
// }
// var value = addNumber
// addNumber("Add value" + value);


// Ques ------ 4

// function calculator(num1,oper,num2) {
//     if(oper == "+") {
//         return num1 + num2
//     }else if(oper == "-") {
//         return num1 - num2
//     }else if(oper == "*") {
//         return num1 * num2
//     }else if(oper == "/") {
//         return num1 / num2
//     }
// }
//     var num1 = +prompt("Number1");
//     var oper = +prompt("Operator");
//     var num1 = +prompt("Number2");
//     var calcu = 
//     calculator(num1,oper,num2);
//     document.write(calcu);


// Ques ------ 5

// function arguMent(num) {
//     var squares = num*num
//     return squares
// }
// var result = arguMent(18)
// document.elementFromPoint(result)


// Ques ------ 6

// function factorial(numb) {
//     if(numb < 0){
//         return -1
//     }
//     else if(numb == 0 ){
//         return 1
//     }
//     else{
//         return (numb * factorial( numb - 1 ))
//     }
// }
// var result = factorial(8)
// document.write(result)


// Ques ------ 7

// function count() {
//     var countStart = +prompt("Enter Counting starting number")
//     var countEnd = +prompt("Enter Counting ending number")
//     for(var i= countStart; i <= countEnd;i++){
//         document.write(i + "<br />")
//     }
// }
// count()


// Ques ------ 8

// not 


// Ques ------ 9

// / function areaoftriangle(width,height){
//     var area = width * height
//     document.write(area)
// }
// var wid = 20
// areaoftriangle(21,wid)


// Ques ------ 10

// var palinword = prompt("Enter Word")
// function palindrome(){
//     var check = ""

//     for(i = palinword.length-1 ; i >=0 ; i--){
//         check += palinword[i]
//     }

//     if(check === palinword){
//         alert("This Word is Palindrome")
//     }else {
//         alert("This Word is not Palindrome")
//     }
// }
// palindrome()


// Ques ------ 11

// function uppercase(str){
//     var array1 = str.split(" ")
//     var newarray = []

//     for(var x = 0 ; x < array1.length ; x++){
//         newarray.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1))
//     }
//     return newarray.join(" ")
// }
// var result = uppercase("the quick brown fox")
// document.write(result)


// Ques ------ 12

// function longestword(str){
//     var arr = str.split(" ")
//     var lgword = ""

//     for( i = 0 ; i < arr.length ; i++){
//         var ind = arr[i]

//         if(ind.length > lgword.length){ 
//            lgword = ind 
//         }

//     }
//     return lgword

// }
// var rs = longestword("Web Developent ")
// console.log(rs)


// Ques ------ 13

// function counter(string , letter){
//     var count = 0;
//     for(i = 0 ; i < string.length ; i++){
//         if(string.charAt(i) === letter){
//             count++
//         }
//     }
//     return count;
// }
// var ct = counter("hamza" , "a")
// console.log(ct)


// Ques ------ 14

// function circumference(){
//     var radius = 20
//     var pie = 3.142
//     var circle = 2 * pie * radius
//     document.write(circle + "<br />")
// }
// circumference()

// function area(){
//     var radius = 20
//     var pie = 3.142
//     var circle = pie * radius**2
//     document.write(circle)
// }
// area()

// ----------------------------------------- End --------------------------------- //