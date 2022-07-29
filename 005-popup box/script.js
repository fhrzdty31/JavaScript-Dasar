//Alert
alert("Belajar Javascript");
alert("Bersama R324");

var ulang = true;
while(ulang) {
    //Prompt
    var nama = prompt("Masukkan Nama :");
    alert("Hai " + nama);

    //Confirm
    var kondisi = confirm("Apakah kamu baik-baik saja?");
    if (kondisi == false) {
        alert("Semoga harimu menyenangkan");
    } else {
        alert("Alhamdulillah...");
    }
    ulang = confirm("Ulangi?");
}