

function calculateBMI() {

var weight, height, age, gender;
weight = document.getElementById("hw").value //get weight value
height = document.getElementById("hh").value // get height value
age = document.getElementById("ha").value // get age value
gender = document.getElementsByName('sex')// get selected sex
var call = String     ; //set nickname
    

    for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
        document.getElementById("resultSX").innerHTML
            = "Gender: " + gender[i].value;
        
    if (gender[i].value == "Lady"){
        if (age < 18){ call = "Girl"
        } else if (age < 30) { call = "Lady"
        } else {call = "Ma'am"}
    } else  {
        if (age < 18){ call = "Boy"
        } else if (age < 30) { call = "Mister"
        } else {call = "Sir"}
    //} else {console.log("dumass")
    }


//gender = document.querySelector('input[name="sex"]:checked').value;
//[i]
//(gender.value[i] = "Sir")

var BMIVal = parseInt(weight * 10000/ (height * height));   


    document.getElementById("BMIval").innerHTML = BMIVal;

    if (30 <= BMIVal){
        document.getElementById("BMIcat").innerHTML = "Obese";
        document.getElementById("BMI-exp").innerHTML = gender[i].value + ", it is for the best of yourself to lose some weight"; 
    } else if (25 <= BMIVal & BMIVal < 30){
    document.getElementById("BMIcat").innerHTML = "Overweight";
    document.getElementById("BMI-exp").innerHTML = gender[i].value + ", it is for the better of yourself to lose some weight";
    } else if ( 18 <= BMIVal & BMIVal < 25) {
        document.getElementById("BMIcat").innerHTML = "Normal";
        document.getElementById("BMI-exp").innerHTML = gender[i].value + ", you are doing really good. Please maintain this lifestyle for longer future";
    } else if(BMIVal < 18){
        document.getElementById("BMIcat").innerHTML = "Underweight";
        document.getElementById("BMI-exp").innerHTML = gender[i].value + ", it is for the better of yourself to gain some weight";
    }

    }
 }
}
 
function resetBMI() {
    document.getElementById("BMIval").innerHTML = "thank you";
    document.getElementById("BMIcat").innerHTML = "you have removed your data";
    document.getElementById("BMI-exp").innerHTML = "for using our BMI calculator";
    
 }
