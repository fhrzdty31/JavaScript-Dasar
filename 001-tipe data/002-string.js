//string
var a = "Fahreza";
var b = ' Ditya';
console.debug(a + b);
console.debug('Reza : "Haii..."');
console.debug("Jum'at");

//escape character
console.debug('Bulan "Ramadhan" banyak terdengar tadarus Al-Qur\'an');
console.debug("Bulan \"Ramadhan\" banyak terdengar tadarus Al-Qur'an");
console.debug('Hari ini hari\t: Rabu\nBesok hari\t\t: Kamis');
//unicode
console.debug('\u00A9  \u00AE  \u00B1  \u00B5  \u2122');
console.debug("\u00A9CopyRight by R324");

//perbandingan
console.info("\nPerbandingan string\t:");
var x = "Fahreza Ditya";
var y = "fahreza ditya";
var z = "fahreza ditya";
console.debug(x == y);
console.debug(y == z);

//length
console.info("\nLength\t:");
console.debug("Fahreza".length);
console.debug(x.length);