 
var k = "Productions : <br>"; 
function kelvin() { 
    var items = document.getElementsByName('shed'); 

    for (var i = 0; i < items.length; i++) { 
        var a = [i]; 
        k = k +  a.value + " " +"<br>"; 
    } 
    
    document.getElementById("res").innerHTML = k; 
    document.getElementById("milk").innerHTML = "Output"; 
} 

