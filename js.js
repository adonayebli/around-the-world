var country = {
    Canada:  {
     capital: "ottawa",
     animal:"beaver",
     language:"French and english",
     population:"35.16 million",
 },

 
 "Ivory coast" : {
     capital:"yamousoukro",
      animal:"elephant",
     language:"french",
     population:"20.32 million",
    
 },
 
 japan : {
     capital:"tokyo",
     animal:"green pheasant",
     population:"127.3 milliom",
     language:"japanese",
 }
 };
 // A $( document ).ready() block.
$( document ).ready(function() {
  //  console.log( "ready!" );
    
$("#submit").click(function() {
 // alert( "Handler for .click() called." );
  
  var place = $("#country").val()
  
  
  $("div").append(country["japan"].capital);
  
  
});
    
    
});
 
