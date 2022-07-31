function Bus(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.addPenumpang = function(nama) {
        if(this.penumpang.length == 0) {
            this.penumpang.push(nama);
            return this.penumpang;
        } else {
            for(var i = 0; i < this.penumpang.length; i++) {
                if(this.penumpang[i] == undefined) {
                    this.penumpang[i] = nama;
                    return this.penumpang;
                } else if(i == (this.penumpang.length - 1)) {
                    this.penumpang.push(nama);
                    return this.penumpang;
                } else if(this.penumpang[i] == nama) {
                    console.log(nama +" sudah ada didalam bus");
                return this.penumpang;
                }
            }
        }
    }
    this.deletePenumpang = function(nama, bayar) {
        if(this.penumpang.length == 0) {
            console.log("Bus masih kosong");
        } else {
            for(var i = 0; i < this.penumpang.length; i++) {
                if(this.penumpang[i] == nama) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                } else if(i == (this.penumpang.length - 1)) {
                    console.log(nama +" tidak ada di dalam bus");
                    return this.penumpang;
                }
            }
        }
    }
}

var bus1 = new Bus('Fahreza', ['Kediri', "Patria"], [], 0);
var bus2 = new Bus('Ditya', ['Patria', "Arjosari"], [], 0);
var bus3 = new Bus('Alfandry', ['Arjosari', "Kediri"], [], 0);