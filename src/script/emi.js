
function amountChange(){
    document.getElementById("rangeAmount").value=document.getElementById("txtAmount").value;
}

function handleAmountChange(){
    document.getElementById("txtAmount").value=document.getElementById("rangeAmount").value;
}
function Yearchange(){
    document.getElementById("rangeYears").value=document.getElementById("txtYears").value;
}
function handleYearChange(){
    document.getElementById("txtYears").value=document.getElementById("rangeYears").value;
}
function Ratechange(){
    document.getElementById("rangeRate").value=document.getElementById("txtRate").value;
}
function handleRateChange(){
    document.getElementById("txtRate").value=document.getElementById("rangeRate").value;
}

function CalculateClick(){
    var P=parseInt(document.getElementById("txtAmount").value);
    var r=parseInt(document.getElementById("txtRate").value)/12/100;
    var n=parseInt(document.getElementById("txtYears").value)*12;

    var EMI=P*r*(Math.pow(1+r,n))/(Math.pow(1+r,n))-1;


       document.getElementById("lblResult").innerHTML = `<span>${EMI.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0})}/m</span>`;
}


