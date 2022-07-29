var ulang = true;
while(ulang) {
    var x = 1;
    var y = parseInt(prompt("Buat Hello World sebanyak :"));

    while(x <= y) {
        alert("Hello World " + x);
        x++;
    }
    ulang = confirm("Ulangi?");
}