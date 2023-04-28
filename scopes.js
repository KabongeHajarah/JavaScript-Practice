//scope.js

//var inside a function can only be used inside that function 
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  letsLearnScope()   

  //
  if (true){
    var gravity = 9.81
    console.log(gravity);
  }
  console.log(gravity);  
  
  for(var i = 0; i < 3; i++){
    console.log(i) ;
  }
  console.log(i);
  