function odd_even(a){
    var solution = a % 2;
    var finalSolution = solution;
    if (finalSolution == 0){
      return "It's an even number";
  }
  else{
     return "It's an odd number" 
  }
 }
  var solution1 = odd_even(100);
  console.log(solution1)
  function rocky(gram){
    const solutionOfKg = gram / 1000;
    console.log("You have " + solutionOfKg + " KG")
    return solutionOfKg
  }
const rice = rocky(9780);
const wheat = rocky(678);
function evenAndOdd (val){
const checking = val % 2;
if(checking == 0){
  return true;
}
else{
return false;
}
  

}
 const first = evenAndOdd(57);
 console.log(first)
 const second = evenAndOdd(58);
 console.log(second)
 function leapYear(year){
  const reminder = year % 2;
  const reminder1 = year % 100;
  if(reminder == 0 && reminder1 == 0 ){
    return "leap year"
  }
  else{
    return "not a leap year"
  }
 }
 const year1 = leapYear(2088)
 console.log(year1)
 
 let total = 0;
 
 for(num = 0; num<= 7; num++){
  total = total + num;


 }
console.log(total)




 const arr1 =[15 , 51 , 61, 34 ,89 ,78 ,98 ,95 ,98]
 let myObjects = {
  name: 100,
  rice:300,
  banana:490,
  apple:780,
  orange:690
 }
 function arrsum(arrName){
let sum = 0;
for (i = 0; i < arrName.length; i++){
let arrElements = arrName[i]
 sum = sum + arrElements;
  }
  return sum;

 }
 let arr1Sum = arrsum(arr1);
 console.log(arr1Sum)
 let sumMyObjects = arrsum(Object.values (myObjects))
 console.log(sumMyObjects)
 function sumOddNumbers(theArr){
 anArr = [];
  for(i =theArr.length - 1  ; i > 0; i--){
   let element = theArr[i];
   if((element % 2) === 0){
    anArr.push(element)
    }
   
   
    }
    return anArr

   

 }
 let array = sumOddNumbers(arr1);
 console.log(array)
 let oddSum = arrsum(array);
 console.log("The total sum of the array according to the odd number is " + oddSum)

let factorialSum = 0;
 for(let numt = 0; numt < 7; numt++){
  factorialSum = factorialSum + numt;
  
 }
 console.log(factorialSum)

 
function factorialForSum(factorial){
  let factorialSum = 0;
 for(let numt = 0; numt < factorial; numt++){
  factorialSum = factorialSum + numt;
  
 }
 return factorialSum
}
let newFactorial = factorialForSum(90)
console.log(newFactorial)
let multiplication = 1;

for(let  numMultiple = 1; numMultiple < 10 ;numMultiple++){
multiplication = multiplication*numMultiple
}
console.log(multiplication)

function forMultiplication(numbMul){
  for(let  numMultiple = 1; numMultiple < numbMul ;numMultiple++){
    multiplication = multiplication*numMultiple
    } 

    return numMultiple
}
arrForYear =[2007 , 2017 , 2022 , 2024, 2028, 2016]
function forLeapYear(arrYear){
  arrFake= []
  for(let i = 0 ; i < arrYear.length; i++){
   let mainYear = arrYear[i]
   if((mainYear % 4) == 0 ){
   arrFake.push(mainYear)
    }
  
  }
  return arrFake;
 
  
}

let arrForYearElements = forLeapYear(arrForYear);
console.log(arrForYearElements)
function barbieKane(string){
let output1 = string.length;
console.log("you have " + output1 + " characters in your string")
if((string.length % 2) === 0){
  return"Hi Ken"
}
return"Hi barby"
}
let problems =barbieKane("FHDNNVDVKMMKV");
console.log(problems);

let input = [5 , 7 , 9 ,11 ,15 ,17]
for(i =0 ;i < input.length ; i++){
  let mainArr = input[i];
  if( (input[i] + 2 ) !== input[i+1]){
  console.log((input[i + 1]) - 2)
  }
  
  
  []
  }
  let str1 = "This is the night";
  const night ="night"
  const indexCheck = str1.indexOf(night);
  console.log(indexCheck)
  let mySystem = "Mashuq"
  mySystem = mySystem.toLowerCase()
  let userInput = "rocky"
  userInput = userInput.toLowerCase()
  if(mySystem === userInput){
    console.log("You are telling the truth")
  }
  else{
    console.log("You may did some mistakes in your user name.")
  }
  let myInput = 'I love to do codding . And my FaVorite language is Javascript'
 myInput = myInput.toLowerCase()
let mySearch = "Favorite"
    mySearch = mySearch.toLowerCase()
    mySearch = myInput.includes(mySearch)
console.log(mySearch)
const  index = myInput.indexOf("did")
console.log(index)
let  userInput1 = "Aand"
userInput1 = userInput1.toLowerCase()
if(myInput.indexOf(userInput1) === -1){
  console.log("error!! This is not into the server")
}
else{
  console.log(userInput1)
}
let sentence = "Who wants me in the ownfooter of the door and what, I need to do for a long time. in error and ,in mind and a - source of life . and a danger and a dng and a lifetime security and for some hold for  abroad and a way to earn ,it and I have to recover to a main."

let sentence1 = sentence.split(" ")
let sentence2 = sentence.slice(0, 80)

console.log(sentence2)
let one = "jskjkfkmkvmlmmmmvmvmfm rocky "
let two ="lhufdhkvkjnvjndjvnkjn mocky"
let arrJoin =["kjnjk" , "mdfk" , "fgljjio" , "koooj"]
let newJoin = arrJoin.join( " ")
console.log(newJoin)
let monng = "rionkfdnmkdnnn"
let sli = monng.substring(5 , 0);
console.log(sli)
const shonkha = 5.9000;
console.log(Math.round(shonkha))
let main1 = 34;
let main2 = 89;
const forSomeTime = 34;
main1 = main2;
main2 = forSomeTime


console.log(main1 , main2)
function maxNumber(a, b, c){
  let max = Math.min(a, b ,c)
  return max;
}
let jim = 45;
let oggy = 42;
let shila = 99;
let tallArr = [942 , 155 , 177 , 198 ,120 ,170]
console.log(maxNumber(45 , 42 , 99))
function tallest(arrForTallest){
  let firstNum = arrForTallest[0]
  for(let i = 0; i < arrForTallest.length;i++){
    let element = (arrForTallest[i])    
   if(element > firstNum){
    firstNum = element
   }
  }
  return firstNum
 
  
}

  let final = tallest(tallArr)
  console.log(final)
  let str3 = "my string";
  function reverseString(str){
    
    for(i = str.length; i >= 0; i--){
      let reverse = str[i];
      console.log(reverse)
      
    }


  }
  reverseString(str3);
  let sentence3 = "This is my favorite programming language and I know the main term and a little and our mi set is a line and a putting on a human being and a lie time in the season and atime in a life isn't good in short time and a limit and a my August"

  sentence3 = sentence3.split(" ")
  reverseString(sentence3);
  let importantArr= [ 12 , 45 , 98 , 90];
  str3 = str3.replace("my" , "your")
  console.log(str3)
  importantArr.splice(1 ,0,100 ,500, 1000, 7000);
  console.log(importantArr)
  let arrZero = [10 ,35 ,34 ,56, 100 ,20 , 53 , 61 , 90 ,81 ,92 ,50]


let objectHome = {
  mashuq: "khulna",
  rakib:"baria",
  mohit:"khali",
  sojib:"khalia",
  ajib:"chot",
  mehmed:"kalia",
  shohan:"baria",
  ajib:"ahmedpur"

}
function home(objectKey){
  const obj =[]
  for(i = 0 ; i < objectKey.length; i++){
    let main = objectKey[i];
    if(objectKey[i] !== "baria"){
      obj.push(objectKey[i])
    }
  }
  return obj
}
 let mot = home(Object.values(objectHome));
 console.log(mot);










  
    
  





 









  