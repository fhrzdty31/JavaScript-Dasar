function view(n) {
    // base case
    if (n == x) return;
    
    alert("Hello world "+ (n+1))
    // rekursif
    return view(n+1)
}

var x = parseInt(prompt("Buat Hello World sebanyak?"));
view(0);