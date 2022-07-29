var ulang = true;
while(ulang) {
    var y = prompt("Bus beroperasi :");
    var z = prompt("Bus tidak beroperasi :");
    var i = parseInt(y) + parseInt(z);

    for (var x = 1; x <= i; x++) {
        if (x <= y) {
            alert("Bus "+ x +" beroperasi dengan baik");
        } else {
            alert("Bus "+ x +" sedang tidak beroperasi");
        }
    }
    ulang = confirm("Ulangi?");
}