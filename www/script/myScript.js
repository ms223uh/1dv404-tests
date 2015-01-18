"use strict"

var Main = {
    

    userName : "domare1",
    passWord : "abc123",    
    
     
     

    


Start : function(){
    
   
   var Submit = document.getElementById("submit");
   
    Submit.onclick = function(e){
        
        e.preventDefault();
        
        Main.Test();
        
    }
    
    
},


Test : function(tested){
    
    var Name = document.getElementById("login");
     var Word = document.getElementById("password");
    
    if(Name.value == Main.userName){
        if(Word.value == Main.passWord){
            
            alert("Du är nu inloggad & skickas vidare!");
        window.location = "logged.html";
            
        }
        
    }
    

       
             if(Name.value != Main.userName && Word.value != Main.passWord){
                 
                 alert("Du har angett fel uppgifter eller så har du glömt att fylla i ett fält!")
                 
             }
        
return "Test";
    
    
    

    
    
},



    


 



};


window.onload = function(){
    Main.Start();
}