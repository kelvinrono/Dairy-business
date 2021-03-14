

var no = "Litres Per Shed : <br>"; 
var items= document.getElementsByName('shed'); 
function kelvin() { 
  

    for (var i = 0; i < items.length; i++) { 
        var a = items[i]; 
        no = no +  a.value + " " +"<br>"; 
    } 
    
    document.getElementById("res").innerHTML = k; 
    document.getElementById("milk").innerHTML = "Output"; 
} 


// function sum(){
//     const add=items[i].reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 0);
// document.getElementById('summing')=add;
// }

var totalLitres = 0;
function totalCapacity(){
for(var i = 0; i < items.length; i++)
{
    totalLitres = totalLitres + items[i];
}
document.getElementById('summing')=totalLitres;

}

var dailyIncome;
var rate = 45;

dailyIncome = totalCapacity() * 45;
  weeklyIncome = dailyIncome * 7;
  yearlyIncome = dailyIncome * 366;
  //console.log("Your daily income will be Ksh " + dailyIncome);
  console.log("Your weekly income will be Ksh " + weeklyIncome);
  console.log("Your yearly income will be Ksh " + yearlyIncome);
  var mon = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var daymonth= [ 31,29,31,30,31,30,31,31,30,31,30,31];
  for (i = 0; i<mon.length; i++){
    var sum = daymonth[i] * incomePerDay;
  console.log('Your income for ' + mon[i] +  ' is  Ksh' + sum)
  }