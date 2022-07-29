//logika
console.info("\nPerbandingan\t:");
var x = 5;
console.debug(x > 10);//false
console.debug(x < 10);//true
console.debug(!(x > 10));//true
console.debug(!(x < 10));//false
console.debug((x < 10) && (x > 10));//false
console.debug((x > 10) && (x > 10));//false
console.debug((x < 10) && (x < 10));//true
console.debug((x < 10) || (x > 10));//true
console.debug((x > 10) || (x > 10));//false
console.debug((x < 10) || (x < 10));//true

//string
console.info("\nString\t:");
var a = "apple";
var b = "pen";
console.debug(a + b);
console.debug(a + " " + b);
console.debug(10 + 10);
console.debug(10 + "10");
console.debug("10" + 10);
console.debug(10 + 10 + "10");
console.debug("10" + 10 + 10);

// unary (membutuhkan 1 operand)
//typeof
console.info("\nTypeof\t:");
console.debug(typeof("a"));
console.debug(typeof(10));
console.debug(typeof(true));

/// ternary (memutuhkan 3 operand)
//kondisional
console.info("\nKondisional\t:")
var i = 10
var a = (i % 2 == 0) ? "genap" : "ganjil";
console.debug(a);
var a = (i < 5) ? "benar" : "salah";
console.debug(a);