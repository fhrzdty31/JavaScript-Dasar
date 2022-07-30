// Refactoring
// readability, DRY, testability, performance, maintainability

// code awal
// function jumlahVolume (a, b) {
//     var volumeA = a * a * a;
//     var volumeB = b * b * b;

//     var total = volumeA + volumeB;
    
//     return total;
// }
// alert("Total volume kubus adalah "+ jumlahVolume(5, 2));


// code refactoring
function jumlahVolume (a, b) {a * a * a + b * b * b}

alert("Total volume kubus adalah "+ jumlahVolume(5, 2));