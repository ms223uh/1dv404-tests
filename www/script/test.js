"use strit"


 window.onload = function(){


// Provar användarnamn
        var name = Main.userName;
        if (name === Main.Name) {
            
            console.log("Test OK!");
      
        }
        else{
            console.log("Test Fail!");
        }
        
        
        if (name != Main.Name) {
            
            console.log("Test2 OK!");
      
        }
        else{
            console.log("Test2 Fail!");
        }
        
        
        
        // Testar lösenord
        
        var word = Main.passWord;
        if (word === Main.Word) {
            
            console.log("Test OK!");
        }
        else{
            console.log("Test Fail!");
        }
   
   if (word != Main.Word) {
            
            console.log("Test2 OK!");
        }
        else{
            console.log("Test2 Fail!");
        }








    
    var send = document.getElementById("send");
   
    send.onclick = function(e){
        
        window.location = "startpage.html";
        
    };
    
    




};
