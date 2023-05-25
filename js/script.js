function hitungLuas(){
    var sisi = (document.getElementById("sisi-luas")).value;
    var Luas = sisi*sisi;
    document.getElementById("output_luas").innerHTML = "L = S x S" + 
                                                     "<br/>"+"L = "+ sisi +" x "+ sisi +
                                                     "<br/>"+"L = "+Luas;
}

function resetLuas() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("output_luas").innerHTML = "";
}

function hitungKeliling(){
    var sisi = (document.getElementById("sisi-keliling")).value;
    var Keliling = 4*sisi;
    document.getElementById("output_keliling").innerHTML = "K = 4 x S" + 
                                                     "<br/>"+"K = "+"4 x "+ sisi +
                                                     "<br/>"+"K = "+Keliling;
}

function resetKeliling() {
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("output_keliling").innerHTML = "";
}