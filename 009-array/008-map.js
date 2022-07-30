
var angka = [3, 1, 1, 2, 0, 4];
console.log("\nArray awal :");
console.log(angka);

// map
var angka2 = angka.map(function(e){
    return e * 2;
});
console.log("\nMethod map (mengembalikan nilai kali 2) :");
console.log(angka2);