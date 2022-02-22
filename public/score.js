function convert() {
    var score = document.getElementById('intScore').value;
    if (score <= 100 && score >= 85) {
        document.getElementById("stringScore").innerHTML = "Student score is : A";
    } else if (score < 85 && score >= 60) {
        document.getElementById("stringScore").innerHTML = "Student score is : B";
    } else if (score < 60 && score >= 35) {
        document.getElementById("stringScore").innerHTML = "Student score is : C";
    } else if (score < 35 && score >= 0) {
        document.getElementById("stringScore").innerHTML = "Student score is : D";
    } else {
        document.getElementById("stringScore").innerHTML = "Please input a number between 0 and 100";
    }
}
        
