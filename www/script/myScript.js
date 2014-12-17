"use strict"

var main = {
    

    userName : "domare1",
    passWord : "abc123",    
    
     
     

    


Start : function(){
    console.log("Load");
   
   var Submit = document.getElementById("submit");
   
    Submit.onclick = function(e){
        
        e.preventDefault();
        
        main.Test();
        
    }
    
    
},


Test : function(tested){
    
    var Name = document.getElementById("login");
     var Word = document.getElementById("password");
    
    if(Name.value == main.userName){
        if(Word.value == main.passWord){
            
            alert("Du är nu inloggad & skickas vidare!");
        window.location = "point.html";
            
        }
        
    }
    

       
             if(Name.value != main.userName && Word.value != main.passWord){
                 
                 alert("Du har angett fel uppgifter eller så har du glömt att fylla i ett fält!")
                 
             }
        

    
},


 



};


window.onload = function(){
    main.Start();
}