// var joker = ["goru" ,"chagol", "hash", "murgi" ,"khashi", "koyel", "mohish", "dumba"]
// joker.splice(5,0,"laaaaaaaaaaaaaaaaaa")
// console.log(joker)
// console.log(125 != 125)
// if (1 > 100){
//     console.log("I want")
// }
// else if (100 > 50){

//     console.log("Astagfirullah")
// }
// else{
//     console.log("Oh!shit")
// }
// var fruits = ["apple" , "banana", "orange"]
// fruits.splice(1 ,0, "mango")
// fruits.pop()
// fruits.push("watermelon")
// console.log(fruits.indexOf("banana"))
// console.log(fruits);

// var myLoop = 10;
// while (myLoop < 20){
//     console.log(myLoop);
//     myLoop+= 2
// }
// for (var myFor = 10; myFor <= 20; myFor+= 2){
// console.log(myFor)
// }
var items = ["apple" ,"mango" ,"orange" , "watermelon"]
for (var l = 0; l<items.length; l++){
    var itemsLoop = items[l];
    
    if(itemsLoop == items[1] ) {
      continue
    }
    console.log(itemsLoop)
}
// var numbers = [45, 87, 89 , 56, 52, 32 , 25, 188 , 98]
// for(var i =0; i< numbers.length; i++){
//     var number = numbers[i];
//     if (number> 50){
//         continue
//     }
//     console.log(number)
// }
var num1=50;
var num2 = 344;
var num3 = 930;
if (num1 > num2 && num1 > num3){
  console.log(num1)
}
else if (num2 > num1 && num2 > num3){
  console.log(num2)
}
else {opk
  console.log(num3)
}
