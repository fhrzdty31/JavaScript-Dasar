// membuat object

// literal
var siswa1 = {
    nama : 'Fahreza Ditya Alfandry',
    nomor : 082123456789,
    email : 'email@gmail.com',
    jurusan : 'Rekayasa Perangkat Lunak'
}

// function declaration
function creatSiswa(nama, nomor, email, jurusan) {
    var siswa = {};
    siswa.nama = nama;
    siswa.nomor = nomor;
    siswa.email = email;
    siswa.jurusan = jurusan;
    return siswa;
}
var siswa2 = creatSiswa(
    'Fahreza Ditya Alfandry',
    082123456789,
    'email@gmail.com',
    'Rekayasa Perangkat Lunak'
);

// constructor
function Siswa(nama, nomor, email, jurusan) {
    this.nama = nama;
    this.nomor = nomor;
    this.email = email;
    this.jurusan = jurusan;
}
var siswa3 = new Siswa(
    'Fahreza Ditya Alfandry',
    082123456789,
    'email@gmail.com',
    'Rekayasa Perangkat Lunak'
)

console.log("\nDengan Literal :");
console.log(siswa1);
console.log("\nDengan Function Declaration :");
console.log(siswa2);
console.log("\nDengan Constructor :");
console.log(siswa3);