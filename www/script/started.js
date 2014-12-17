"use strict"


var Program = {


admin : main.userName,
inputAdmin : "domare1",
pass : main.Word,
inputPass : main.Word,
testName1 : "Sven",
testWord1 : "123",






tested : function(){
    
    var testBox = document.getElementById("testBox");
    var Tag = document.createElement("p");
    
    testBox.appendChild(Tag);
    
    
    
    var send = document.getElementById("send");
   
    send.onclick = function(e){
        
        window.location = "startpage.html";
        
    }
    
    
    
    
     
    
    
    if(Program.admin === Program.inputAdmin){
        
       Tag.innerHTML += "<b>Stämmer användarnamnet som användaren har skrivit in med det korrekta</b>" + " Ja!" + "<br />"; 
    }
    
    if(Program.admin !== Program.testName1){
        
       Tag.innerHTML += "<b>Sven är inte ett användarnamn</b>" + "<br />"; 
    }
    
    if(Program.pass === Program.inputPass){
        
       Tag.innerHTML +="<br />" + "<b>Stämmer lösenordett som användaren har skrivit in med det korrekta</b>" + " Ja!" + "<br />"; 
    }
    
    
    if(Program.pass !== Program.testWord1){
        
       Tag.innerHTML += "<b>123 är inte ett lösenord</b>" + "<br />"; 
    }
    
    
},






};

window.onload= function(){

Program.tested();
    
}



