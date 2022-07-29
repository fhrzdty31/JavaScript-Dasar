var ulang = true;
while(ulang) {
    var x = prompt("Masukkan Angka :");
    var y = x.length;
    switch (y) {
        case 1:
            alert(x +" berupa bilangan satuan");
            break;
        case 2:
            alert(x +" berupa bilangan puluhan");
            break;
        case 3:
            alert(x +" berupa bilangan ratusan");
            break;
        case 4:
            alert(x +" berupa bilangan ribuan");
            break;
        default:
            alert(x +" berupa lebih dari bilangan ribuan");
            break;
    }
    ulang = confirm("Ulangi?");
}