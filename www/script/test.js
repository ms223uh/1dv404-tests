


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



// Kollar om användaren har lagt till en deltagare till arrayen eller ej.

var addChar = userMain.users;
if(addChar.length === null){
    console.log("Test3 OK! - Array = Empty.")
}
else
{
    console.log("Test3 Fail! - Array have item.")
}


// Kollar om värdet för poängen

var Points = userMain.resTot;
if(Points === 1 || Points < 6){
    console.log("Test OK! - Points is in intervall between 1 and 5.");
}
else{
    console.log("Test Fail! - Ponts is not in intervall between 1 and 5.")
}








    
    var send = document.getElementById("send");
   
    send.onclick = function(e){
        
        window.location = "startpage.html";
        
    };
    
    




};
