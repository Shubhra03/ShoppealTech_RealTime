
setTime();
setInterval(setTime, 1000);


function setTime() {
var today=new Date();
datevalue = (today.getDate() < 10 ? "0" : "") + today.getDate();
var date = datevalue+'-'+(today.toLocaleString('default', { month: 'long' }))+'-'+today.getFullYear();
document.getElementById("datev").innerHTML=date;

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var ar = hours < 12 ? "AM" : "PM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    var todaytime = hours + " : " + minutes + " : " + seconds + "  " + ar;
    document.getElementById("timev").innerHTML = todaytime;
  }
  
  
