
var angka = [1, 5, 10, 8, 3, 25, 4, 7]
console.log("\nArray awal :");
console.log(angka.join(", "));

// filter
var angka2 = angka.filter(function(e) {
    return e >  5;
})
console.log("\nMethod filter :");
console.log(angka2.join(", "));

// find
var angka3 = angka.find(function(e) {
    return e > 1;
});
console.log("\nMethod find :");
console.log(angka3);