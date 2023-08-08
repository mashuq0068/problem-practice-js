for(let i = 1 ; i <= 50;i++){
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("foobar")
    }
    
    else if((i % 5) === 0){
        console.log("bar")
    }
    
    else if((i % 3) === 0){
        console.log("foo")
    }
        
      else{  // console.log(Math.round(Math.random()*100))
        console.log(i)
        
    }
}
const phones = [
    {name: "samsung" , price:900},
    {name: "symphony" , price:200},
    {name: "vivo" , price:300},
    {name: "iphone", price:800},
    {name: "walton" , price:500},
    {name: "iphone pro" , price:600000}
]
function PhoneArr(Phone){
    let cheapest = Phone[0];
    for(let i =0 ; i < Phone.length; i++){
        const element = Phone[i];
        if( cheapest.price > element.price ){
           cheapest = element;
        }
       
       
    }
    return cheapest;
    
}
let loused = PhoneArr(phones);
console.log(loused);
let shoppingArr = [
    {name:"shirt", price:345, quantity:1},
    {name:"pant", price:445, quantity:1},
    {name:"panjabi", price:545, quantity:1},
    {name:"juta", price:745, quantity:1},
    {name:"shoe", price:3500, quantity:1},
    {name:"box", price:34, quantity:1},
    {name:"katha", price:445, quantity:1},
    {name:"balish", price:345, quantity:1},
    {name:"gamsa", price:300, quantity:1},
    {name:"toothbrush", price:47, quantity:3}
]
function functionForShopping(arrShopping){
    let sum = 0
    for(i = 0;i < arrShopping.length; i++){
        const shopping = arrShopping[i];
        sum = sum + (shopping.price*shopping.quantity)
    }
    return sum;
}
let mySum = functionForShopping(shoppingArr);
console.log(mySum)
const posArr =[]
function arrPositive(currentArr){
    
    for (i = 0; i < currentArr.length; i++){
        let currentElement = currentArr[i];
        posArr.push(currentArr[i]) 
        if(currentElement <= 0){
            break;
             
        }
        
    }
    return posArr
}
const posNegNum = [100, 23, 456 ,56, -78 ,69 , -90];
const finalResult = arrPositive(posNegNum);
console.log(finalResult)

function inchToFeet(inch){
    let feetResult = inch * 12;
    return feetResult
}
let myheight = inchToFeet(12);
console.log(myheight)


function paperRequirements(book1Quantity , book2Quantity , book3Quantity){
const book1 = 100;
const book2 = 200;
const book3 = 300;
const book1Pages =book1*book1Quantity;
const book2pages =book2*book2Quantity;
const book3Pages =book3*book3Quantity;
const totalPages = book1Pages + book2pages + book3Pages;
const pageArr =[book1Pages , book2pages , book3Pages];
console.log(pageArr)
return totalPages;


}
let myPages = paperRequirements(2, 4 ,1)
console.log(myPages)
const friendsArr =["sajid" , "mamum" ,"kamal" , "Jubayer bin Rashed" ,"chinku"];
function bestFriend(arrOfFriends){
    let largest = arrOfFriends[0]
    for(i = 0; i < arrOfFriends.length; i++){
        const element = arrOfFriends[i];
       if(largest.length < element.length){
            largest = element
        }

    }
    return largest;
}
const maxFriend = bestFriend(friendsArr);
console.log(maxFriend)
let sum = 0;
for(let i = 0; i <= 3; i++){
    sum = sum + i; 
    console.log(sum);
}
function findingBadData (arrForFind){
    const negArr = [];
   
    for(i = 0; i < arrForFind.length;i++){
    
        const element = arrForFind[i];
        if(element < 0){
            console.log("Bad data")
           negArr.push(element)
        }
        else{
            console.log("Good data")
        }
        
    }
    return negArr.length;
   
}

let ohResult = findingBadData(posNegNum);

console.log(ohResult)
const x = 0.1;
if (x === parseInt(x)){
    console.log("true")
}
else{
    console.log("False")
}
function isLGSeven(input){
if(typeof input !== "number"){
    return "Error ! Please provide a number";
}
else{
    if((input - 7) < 7){
        return input - 7;
    }
    else{
        return input*2;
    }
}
}
const theNum = isLGSeven(15);
console.log(theNum);
let il = [9 , 5];
if(!Array.isArray(il)){
    console.log("no")
}
else{
    console.log("yes")
}
const experimentObject = {
    name:"vjnn",
    age:20,
    home:"Khulna",
    Profession:"Programmer",


}
// const keys =  Object.keys(experimentObject);
// const values = Object.values(experimentObject)

// for(let i=0 ; i < keys.length; i++){
//     const key = keys[i];
//     const value = values[i];
//     console.log(key, ":" , value)
// }
for (const goru in experimentObject) {
    console.log(goru ,":" ,experimentObject[goru])
}
const experimentArr = [30 ,80 ,89 ,76 ,-98 ,90];
function jaitai(){
  const  elementArr = [];
  
    for (const element of experimentArr) {; 
        elementArr.push(element)
         if(element < 0){
          break;
         }
        
    }
    return elementArr;
}
const myArrResult = jaitai(experimentArr);
console.log(myArrResult);