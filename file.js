var myArray=["21"];
function addRecord(){
    //get the value from the input text
    var mon=document.getElementById('mon').value;
    
    //append the value to the array
    myArray.push(mon);

    var record1="";

    for(i=0;i<myArray.length;i++){
        record1=record1+myArray[i];
    }
    //display
    document.getElementById('display').innerHTML = record1;
}