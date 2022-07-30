function faktorial(n) {
    if (n == 0) return 1;
    return n * faktorial(n-1);
}

var x = parseInt(prompt("Faktorial dari :"));
alert("Faktorial dari "+ x +" adalah "+ faktorial(x));