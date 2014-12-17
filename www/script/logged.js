"use strict"

var main = {
    

    
     
     

    


Start : function(){
    
    console.log("Load");
    var name = document.getElementById("name");
    var moment = document.getElementById("moment");
    var adding = document.getElementById("adding");
   var Submit = document.getElementById("submit");

var x = document.forms["res"]["name"].value;

   
    Submit.onclick = function(e){
        e.preventDefault();
        
        
        main.Add (name.value, moment.value, adding.value);



    
};
},


Add : function(namn, gren, points){
    
    console.log(namn + gren + points);
    var resultat = document.getElementById("resultat");
    var pTag = document.createElement("p");
    
    
    pTag.innerHTML += "<b>Namn på deltagaren:</b> " +namn +"<br />"; 
    pTag.innerHTML += "<b>Moment:</b> "+ gren +"<br />";
    pTag.innerHTML += "<b>Antal poäng:</b> "+ points +"<br />";
  
    resultat.appendChild(pTag);
    
    
    
    
    
    
},

}









window.onload = function(){
    main.Start();
}