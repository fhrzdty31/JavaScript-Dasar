// menambah isi array
var a = [];
a[0] = "Fahreza";
a[1] = 17;
a[2] = 'L';
console.log("\nMenambah isi Array :");
console.log(a);

// menghapus array
var b = ["Fahreza", 17, 'L'];
b[1] = undefined;
console.log("\nMenghapus isi Array :");
console.log(b);

// menampilkan array
var c = ["Fahreza", 17, 'L'];
console.log("\nMenampilkan isi Array :");
for (var i = 0; i < c.length; i++) {
    console.log(c[i]);
}