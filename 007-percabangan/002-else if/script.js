var ulang = true;
while(ulang) {
    var x = parseInt(prompt("Masukkan Angka :"));
    if (x % 2 == 0 && x != 0) {
        alert(x +" adalah bilangan GENAP");
    } else if (x % 2 == 1 && x != 0) {
        alert(x +" adalah bilangan GANJIL");
    } else if (x == 0) {
        alert("Anda memasukkan bilangan "+ x);
    } else {
        alert("Anda salah memasukkan format angka");
    }
    ulang = confirm("Ulangi?");
}