function squareRoot() {
    var num = document.getElementById("numSquared").value;
    let z = Math.sqrt(num);
    document.getElementById("numSquareRoot").innerHTML = "The square root of " + num + " is " + z;
}
