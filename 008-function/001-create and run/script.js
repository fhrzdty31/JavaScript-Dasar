function jumlahVolume (a, b) {
    var volumeA = a * a * a;
    var volumeB = b * b * b;

    var total = volumeA + volumeB;
    
    return total;
}

alert("Total volume kubus adalah "+ jumlahVolume(5, 2));