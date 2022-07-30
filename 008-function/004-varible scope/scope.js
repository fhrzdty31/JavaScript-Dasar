// global scope / window scope (variable global)
var a = 10;

function tes() {
    // function scope (variable local)
    var a = 5;
    console.log(a);
}

function coba(a) {
    console.log(a);
}

coba(1);
tes();

console.log(a);