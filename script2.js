function hitungLuas() {
    var sisi = parseFloat(document.getElementById("sisi-luas").value);
    var luas = sisi * sisi;
    document.getElementById("rumus-luas").innerHTML = "L = S x S";
    document.getElementById("perhitungan-luas").innerHTML = "L = " + sisi + " x " + sisi;
    document.getElementById("output-luas").innerHTML = "L = " + luas;

    console.log(luas);
}

function resetLuas() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("rumus-luas").innerHTML = "";
    document.getElementById("perhitungan-luas").innerHTML = "";
    document.getElementById("output-luas").innerHTML = "";
}

function hitungKeliling() {
    var sisi = parseFloat(document.getElementById("sisi-keliling").value);
    var keliling = 4 * sisi;
    document.getElementById("rumus-keliling").innerHTML = "K = 4 x S";
    document.getElementById("perhitungan-keliling").innerHTML = "K = " + 4 + " x " + sisi;
    document.getElementById("output-keliling").innerHTML = "K = " + keliling;

    console.log(keliling);
}

function resetKeliling() {
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("rumus-keliling").innerHTML = "";
    document.getElementById("perhitungan-keliling").innerHTML = "";
    document.getElementById("output-keliling").innerHTML = "";
}