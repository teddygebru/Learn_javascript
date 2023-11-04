$(document).ready(function() {
    'use strict';
    //CONTROL FLOW
    let theNumber = Number(prompt("pick a number"));
    console.log("your number is " + theNumber * theNumber);
    
 
  
    
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //CONVERTING TO NUMBERS
  /** const numStr = parseInt("3a", 16);
  console.log(numStr);
    **/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //REGULAR EXPRESSION
   /*  const email = / (:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4} /;
    console.log(email);
    */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //DATE
    /**
    const myBirthday = new Date(5, 7, 1999);
    console.log("teddy's birth date is " + myBirthday.getFullYear())
    */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //ARRAYS
    /** 
    const a5 = [
      [1, 3, 5],
      [2, 4, 6],
    ];
    console.log(a5)
    */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /** 
    const typeOfMelody = {
      noofclasses : 5,
      classification : {
        sunlight : 'kids',
        daylight : 'adults',
        moonlight : 'oldies',
        twilight : 'youngs',    
      },
      
  };
  console.log("melody is " + typeOfMelody.classification.sunlight);
  //delete typeOfMelody.classification.sunlight;
  typeOfMelody.speak = function(daylight) {
    return 'meow!';
  };  
     */
  

  
  
  
  
  
  
  
  
  




//OBJECTS
    /** 
    const obj = {SIZE : 10, COLOR : 'RED', TYPE : 'MAN'};
  console.log("the overall is " + obj.SIZE);
  if (obj.SIZE > 5){
    console.log("thats best");
  }
  else
  console.log();
**/
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    // NULL & UNDEFINED
  /** 
    let currentTemp; //implicit value of undefined
  const targetTemp = null; //not yet known
  currentTemp = 19.5; //it have a value
  currentTemp = undefined; //not recommended
  **/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    //SYMBOLS
  
    /** const RED = Symbol();
  const ORANGE = Symbol("The color of a sunset");
  console.log(ORANGE) 
  **/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    //BOOLEAN
    
  /** 
    const result1 = true;
  const result2 = false;
  console.log(result1 )
  if (result1 == false){
    console.log("that is true");
  }
  else
  console.log("that is false");
    **/
    
   
 //TYPES OF STRINGS MIXED TOGETHER
    /**const message = 'Current temperature:\n' + '\t${currentTemp}\u00b0C\n' + "Don't worry...the heat is on!";
   console.log(message); 
   **/



   //STRINGS
    // let dialog = "De Morgan’s law: \u2310(P \u22c0  Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)";

/** paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var tool = new Tool();
     var c = Shape.Circle(200, 200, 80);
     c.fillColor = 'black';
     var text = new PointText(200, 200);
     text.justification = 'center';
     text.fillColor = 'white';
     text.fontSize = '20';
     text.content = 'it works';

    tool.onMouseDown = function(event){
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    
    };
    **/
});