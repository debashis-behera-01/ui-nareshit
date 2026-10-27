function Calculate(){
 var w=parseFloat(document.getElementById("txtWeight").value);
 var h=parseFloat(document.getElementById("txtHeight").value);

 var BMI= (w/(h*h));
 document.getElementById("Result").innerHTML=BMI;
}