function hypotenuse() {
    var a = document.getElementById("sideA").value;
    var b = document.getElementById("sideB").value;
    let csquared = (a * a) + (b * b);
    let c = Math.sqrt(csquared);
    document.getElementById("hypotenuseResult").innerHTML = "The hypotenuse of " + a + " and " + b + " is " + c;
}
