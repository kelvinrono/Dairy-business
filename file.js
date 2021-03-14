

var no = "Litres Per Shed : <br>"; 
var items= document.getElementsByName('shed'); 
function kelvin() { 
  

    for (var i = 0; i < items.length; i++) { 
        var a = items[i]; 
        no = no +  a.value + " " +"<br>"; 
    } 
    
    document.getElementById("res").innerHTML = no; 
    document.getElementById("milk").innerHTML = "Productions"; 
} 




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
  document.getElementById('daily')="Daily Income: " + dailyIncome;
  document.getElementById('weekly')="Weekly Income: " + weeklyIncome;
  document.getElementById('yearly')="Yearly Income:" + yearlyIncome;
  var mon = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayOfMonth= [ 31,29,31,30,31,30,31,31,30,31,30,31];
  for (i = 0; i<mon.length; i++){
    var sum = dayOfMonth[i] *dailyIncome;
  document.getElementById('monthly')= 'Your income for ' + mon[i] +  ' is  Ksh' + sum;
  }