function volume (x) {
    var vol = x * x * x;

    return vol;
}

var a = prompt("Masukkan Panjang Sisi Kubus Pertama");
var b = prompt("Masukkan Panjang Sisi Kubus Kedua");

function jumlahVolume () {
    var total = volume(a) + volume(b);

    return total;
}

alert("Total volume kubus adalah "+ jumlahVolume());

// function tambah () {
//     var hasil = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// console.log(tambah(1,2,3,4,5,6,7,8,9));