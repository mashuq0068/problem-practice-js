
const arr1 =[15 , 51 , 61, 34 ,89 ,78 ,98 ,95 ,98]







function sumOddNumbers(theArr){
    anArr = [];
     for(i = 0; i < theArr.length; i++){
      let element = theArr[i];
       if((element % 2) !== 0){
       anArr.push(element)
       }
      
   
       }
       return anArr


      
   
    }
    let array = sumOddNumbers(arr1)
    console.log(array)