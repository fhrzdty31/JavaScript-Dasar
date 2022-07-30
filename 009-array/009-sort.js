
var angka = [1, 5, 2, 8, 3, 6, 4, 7];
console.log("\nArray awal :");
console.log(angka.join(", "));

// sort
angka.sort();
console.log("\nMethod sort :");
console.log(angka.join(", "));

var angka2 = [1, 5, 10, 8, 3, 25, 4, 7];
console.log("\nArray awal 2 :");
console.log(angka2.join(", "));

// sort
angka2.sort(function(a, b) {
    return a-b;
});
console.log("\nMethod sort 2 :");
console.log(angka2.join(", "));