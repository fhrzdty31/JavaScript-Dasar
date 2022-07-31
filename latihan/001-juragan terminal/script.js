var penumpang = [];
console.log(penumpang);

var addPenumpang = function(nama, penumpang) {
    if(penumpang.length == 0) {
        penumpang.push(nama);
        return penumpang;
    } else {
        for(var i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == undefined) {
                penumpang[i] = nama;
                return penumpang;
            } else if( i == (penumpang.length - 1)) {
                penumpang.push(nama);
                return penumpang;
            } else if(penumpang[i] == nama) {
                console.log(nama +" sudah ada didalam bus");
                return penumpang;
            }
        }
    }
};

var deletePenumpang = function(nama, penumpang) {
    if( penumpang.length == 0) {
        console.log("Bus masih Kosong");
        return penumpang;
    } else {
        for(var i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == nama) {
                penumpang[i] = undefined;
                return penumpang;
            } else if(i == (penumpang.length - 1)) {
                console.log(nama +" tidak ada di dalam bus");
                return penumpang;
            }
        }
    }
};