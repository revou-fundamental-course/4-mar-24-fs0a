 function calculateBMI() {

var weight = document.getElementById("hw").value, height = document.getElementById("hh").value;
var BMIVal = parseFloat(weight * 10000/ (height * height));   


    document.getElementById("BMIval").innerHTML = BMIVal;

    if (30 <= BMIVal){
        document.getElementById("BMIcat").innerHTML = "Kegemukan";
    } else if (25 <= BMIVal & BMIVal < 30){
    document.getElementById("BMIcat").innerHTML = "Kelebihan a badan";
    } else if ( 18 <= BMIVal & BMIVal < 25) {
        document.getElementById("BMIcat").innerHTML = "normal";
    } else if(BMIVal < 18){
        document.getElementById("BMIcat").innerHTML = "kurang berat badan";
    }
 }
