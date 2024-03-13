
 
    
function checkform(){
    var weight, height, age, gender;
    weight = document.getElementById("hw").value //get weight value
    height = document.getElementById("hh").value // get height value
    age = document.getElementById("ha").value // get age value
    gender = document.getElementsByName('sex')// get selected sex
    
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            
        if (gender[i].value == "Lady"){
            if (age < 1){ 
                alert("Please fill out age");
            } else if (age < 18){ 
                document.getElementById("resultSX").innerHTML = "Girl";
                calculateBMI();
            } else if (age < 30) { 
                document.getElementById("resultSX").innerHTML = "Lady";
                calculateBMI();
            } else if (age < 120) { 
                document.getElementById("resultSX").innerHTML = "Ma'am";
                calculateBMI();
            } else {
                document.getElementById("resultSX").innerHTML = "Ancient One";
                calculateBMI();
            }
        } else if (gender[i].value == "Sir"){
            if (age < 1){ 
                alert("Please fill out age");
            } else if (age < 18){ 
                document.getElementById("resultSX").innerText = "Boy";
                
                calculateBMI();
            } else if (age < 30) { 
                document.getElementById("resultSX").innerHTML = "Mister";
                calculateBMI();
            } else if (age < 120) { 
                document.getElementById("resultSX").innerHTML = "Sir";
                
                calculateBMI();
            } else {
                document.getElementById("resultSX").innerHTML = "Ancient One";
                calculateBMI();
            }
        }        
    }    }
}

function calculateBMI() {
    var weight, height, age, gender;
    weight = document.getElementById("hw").value //get weight value
    height = document.getElementById("hh").value // get height value
    age = document.getElementById("ha").value // get age value
    gender = document.getElementsByName('sex')// get selected sex
    
    
    var BMIVal = parseInt(weight * 10000/ (height * height));   


    document.getElementById("BMIval").innerHTML = BMIVal;
    

    if (30 <= BMIVal){
        document.getElementById("BMIcat").innerHTML = "Obese";
        document.getElementById("BMI-exp").innerHTML =  "it is for the best of yourself to lose some weight"; 
    } else if (25 <= BMIVal & BMIVal < 30){
    document.getElementById("BMIcat").innerHTML = "Overweight";
    document.getElementById("BMI-exp").innerHTML = "it is for the better of yourself to lose some weight"
    } else if ( 18 <= BMIVal & BMIVal < 25) {
        document.getElementById("BMIcat").innerHTML = "Normal";
        document.getElementById("BMI-exp").innerHTML = "you are doing really good. Please maintain this lifestyle for longer future";
    } else if(BMIVal < 18){
        document.getElementById("BMIcat").innerHTML = "Underweight";
        document.getElementById("BMI-exp").innerHTML = "it is for the better of yourself to gain some weight";
    }

    
 }



function resetBMI() {
    document.getElementById("BMIval").innerHTML = "thank you";
    document.getElementById("BMIcat").innerHTML = "you have removed your data";
    document.getElementById("BMI-exp").innerHTML = "for using our BMI calculator";
    
 }
