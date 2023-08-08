function foo(){
    console.log("foo" )
    bar()
}
function bar (){
    console.log("bar")
   
}
foo()
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
odd_even (100);

 var check = odd_even(5)
 console.log(check)
 var signal = "red";
 if(signal == "red"){
    console.log("You are in danger")
 }
 else if(signal == "green"){
    console.log("you should cross the road")
 }
 else{
    console.log("You should stop")
 }



 switch(signal){
    case "red":
        console.log("You are in danger");
    break;    
       
    case "yellow":
        console.log("You should stop");
    break;     
    default:
        console.log("You should cross the road");
             
 }
 var p = 1;
 console.log(typeof p)