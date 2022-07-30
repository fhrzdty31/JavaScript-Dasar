// this

// literal
console.log("\nDengan Literal :");
var hallo1 = {};
hallo1.halo = function() {
    console.log(this);
};
hallo1.halo(); // this mengembalikan object yang bersangkutan


// function declaration
console.log("\nDengan Function Declaration :");
function hallo2() {
    console.log(this);
}
this.hallo2(); // this mengembalikan object global


// constructor
console.log("\nDengan Constructor :");
function Hallo() {
    console.log(this);
}
var hallo3 = new Hallo() // this mengembalikan object yang baru dibuat