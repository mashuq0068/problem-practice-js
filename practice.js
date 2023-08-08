// var practice1 = 1;
// while(practice1 <= 39){
// console.log("ajke amar mon valo nei");
// practice1++;
// }
// for (var practice1 = 0; practice1 < 39 ; practice1++){
//     console.log("ajke amar mon valo na")
// }
for (practice2 = 97; practice2 > 58; practice2--){
    console.log(practice2)
}
for (practice3 = 412; practice3 <= 456;
    practice3+=2){
        console.log(practice3)
    }
    var practice4 = 581;
    while(practice4 <= 623){
        console.log(practice4);
        practice4+=2;
    }
    var topiscReaded =["html", "css", "javascript" ,"tailwind", "bootstrap" , "github" ]
    for (var index = 0; index < topiscReaded.length; index++){
     var vheck = topiscReaded [index];
        console.log(vheck);
    }
    console.log(topiscReaded.length)
    for (var practice5 = 30; practice5 <= 86; practice5++){
        console.log(practice5)
        if (practice5 == 44){
            break
        }
    }
    var price =[100 ,150 , 170, 199 ,500, 600, 700, 344, 124]
   for (priceIndex = 0; priceIndex < price.length; priceIndex++){
    var priceLoop = price[priceIndex];
    if(price[priceIndex] < 200){
        continue
    }
    console.log(priceLoop)
   }
   var jonny = ["loly" , "bony" , "cjokib" , "mami" , 'hajo']
   for (l = 0; l < jonny.length; l++){
    console.log(jonny[l])
   }
   var mon = [12 ,45 , 76, 86 , ]
   for(num = 0; num < mon.length ;num++){
    console.log(mon[num])
   }
   var num = 0;
   while(num < mon.length){
    console.log(mon[num]);
    num++;
   }
   var number = 99;
   if ((number % 2) == 0 ){
    console.log("It's an even number")
   }
   else{
    console.log("It's an odd number")
   }
 



let numb = 5.56789;
let n = numb.toFixed(2);
console.log(n)
var firstNum = 9;
var secondNum = 3;
var practice6 = firstNum * secondNum;
console.log(practice6)
if ( practice6 == (firstNum + secondNum)){
    console.log("You are doing addition and your result is " + practice6)
}
else if (practice6 == (firstNum - secondNum)){
    console.log("you are doing subtraction and your result is " + practice6)
}
else if (practice6 == (firstNum * secondNum)){
    console.log("you are doing multiplication and your result is " + practice6)
}
else if (practice6 == (firstNum / secondNum)){
    console.log("you are doing division and your result is " + practice6)
}
else{
    console.log("What you want to do?")
}
var year = 2016;
if ((year % 4) == 0 && (year % 100) != 0){
    console.log( year + " is a leap year")
}
else {
    console.log(year + " isn't a leap year")
}
// var arr = [100 ,87 ,97 ,73, 22, 42, 32,36];
// for (var i = 0; i < arr.length; i++){
    
//     if ((arr[i] % 2) != 0){
//         continue
//     }
//     console.log(arr[i])
// }
var arr = [100 ,87 ,97 ,73, 22, 42, 32,36];
for (var i = 7; i > 0; i--){
    console.log(arr[i])
}
function firstFunction( a , b , c, d ,e ){
return a+b;
}
var my = firstFunction(55 , 86 ,200)
console.log(my)
var myObject = {
    name :"rocky",
    age:40,
    date:9,
    sex:"male",
    height:6
}
myObject.name = "mashuq"
var {age}= 9;
console.log(myObject)
var keys = Object.keys(myObject);
console.log(keys)
var values = Object.values(myObject)
console.log(values)
var ObjectName = myObject.name
console.log(ObjectName)

function foo(a , b ,c){
    var total = a + b+ c;
    var average = total / 3;
    return average;
}
var firstOne = foo(57 , 58 , 59);
console.log(firstOne)
var practiceArr = [12 ,34 , 56 ,35, 69 ]
practiceArr[2] = 389;
practiceArr.shift()
console.log(practiceArr)
function functionPractice (i1 ,i2 , i3 , i4 ,i5) {
    var totalFunction = i1 + i2 + i3 +i4 +i5;
    var averageFunction = totalFunction / 5;
    return averageFunction;
}
var newAverage = functionPractice(practiceArr[0] , practiceArr[1] , practiceArr[2],practiceArr[3],practiceArr[4])
newAverage = parseInt(newAverage)
console.log(newAverage)
function movie() {
      return "a";
     


}











  
   

    

