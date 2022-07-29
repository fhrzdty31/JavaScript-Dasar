var x = prompt("Masukkan panjang sisi kubus 1");
var y = prompt("Masukkan panjang sisi kubus 2");
function volume (a) {
    var vol = a * a * a;

    return vol;
}

function jumlahVolume () {
    var volumeA = volume(x);
    var volumeB = volume(y);

    var total = volumeA + volumeB;
    
    return total;
}

alert("Total volume kubus adalah "+ jumlahVolume())