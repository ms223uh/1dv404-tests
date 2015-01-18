"use strict"

 
 
 
 
 

 
 
var userMain = {

  users : [], 
  summ : [],
  resTot : 0,
  
addUser : function(){
    document.getElementById("submit").disabled = true;
 var AddUser = document.getElementById("addUser");
 var optionName = document.getElementById("name");
 var RegUser = document.getElementById("regUser");
        RegUser.onclick =  function(e){
            document.getElementById("submit").disabled = false;
            e.preventDefault();
            userMain.users.push(AddUser.value);
            var option = document.createElement("option");
            option.innerHTML = AddUser.value;
            optionName.appendChild(option);
            console.log(userMain.users);
            
        };
 
 
 
},
 
 

 

 



   
     
     

    


Start : function(){
    
    console.log("Load");
    
    var name = document.getElementById("name");
    
    var moment = document.getElementById("moment");
    var adding = document.getElementById("adding");
   var Submit = document.getElementById("submit");
   console.log();

var x = document.forms["res"]["name"].value;



   
    Submit.onclick = function(e){
        
        var sum = userMain.summ;
        
        var addArr = document.querySelectorAll("#adding");
        for (var i = 0; i < addArr.length; i++) {
                sum.push(addArr[i].value);
        }
        sum.sort();
        sum.splice(sum.length-1, 1);
        sum.splice(0, 1);
        console.log(sum);
      
        
        var totRes = userMain.resTot;
        var One = parseInt(sum[0]);
        var Two = parseInt(sum[1]);
        var Three = parseInt(sum[2]);
        totRes = Math.round(((One + Two + Three )/3));
        e.preventDefault();
        console.log(totRes);
        
        userMain.Add (name.value, moment.value, totRes);


        }
 
},



Add : function(namn, gren, points){
    
    
    var resultat = document.getElementById("resultat");
    var pTag = document.createElement("p");
    
    
    pTag.innerHTML += "<b>Namn på deltagaren:</b> " +namn +"<br />"; 
    pTag.innerHTML += "<b>Moment:</b> "+ gren +"<br />";
    pTag.innerHTML += "<b>Antal poäng:</b> "+ points +"<br />";
  
    resultat.appendChild(pTag);
    
    
    
    
    
    
},

logOut : function(){
    
 var logOut = document.getElementById("logOut");

        logOut.onclick =  function(e){
            
            e.preventDefault();
            
            alert("Tack för ditt besök - Välkommen åter!");
            
            window.location = "startpage.html";
            
        };
 
 
 
},



}




window.onload = function(){
    userMain.Start();
    userMain.logOut();
    userMain.addUser();
    
}




