var ulang = true;
while(ulang) {
    var y = parseInt(prompt("Buat Hello World sebanyak :"));

    for (var x = 1; x <= y; x++) {
        alert("Hello World " + x);
    }
    ulang = confirm("Ulangi?");
}