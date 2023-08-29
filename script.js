// Ambil elemen-elemen yang diperlukan dari halaman HTML
const inputCelcius = document.getElementById('inputCelcius');
const outputFahrenheit = document.getElementById('outputFahrenheit');
const calculation = document.getElementById('calculation');

// Fungsi untuk mengonversi suhu dari Celcius ke Fahrenheit
function convert() {
    const celcius = parseFloat(inputCelcius.value);
    const fahrenheit = (celcius * 9/5) + 32;

    // Tampilkan hasil konversi pada input Fahrenheit
    outputFahrenheit.value = formatDecimal(fahrenheit, 2);

    // Tampilkan kalkulasi pada textarea calculation
    calculation.value="= (S°C * 9/5) + 32                                    = (" + celcius + "*9/5) + 32                                         = " + formatDecimal(fahrenheit, 2) + "°F";
}
// Fungsi untuk membalikkan konversi suhu
function reverse() {
    const fahrenheit = parseFloat(outputFahrenheit.value);
    const celcius = (fahrenheit - 32) * 5/9;

    // Tampilkan hasil konversi pada input Celcius
    inputCelcius.value = formatDecimal(celcius, 2);

    // Tampilkan kalkulasi pada textarea calculation
    calculation.value ="= (S°F - 32) * 5/9                                   = (" + fahrenheit + "-32) * 5/9                                     = " + formatDecimal(celcius, 2) + "°C";
}

// Fungsi untuk membatasi angka desimal sesuai dengan angka tertentu
function formatDecimal(number, decimalPlaces) {
    const factor = 10 ** decimalPlaces;
    return Math.round(number * factor) / factor;
}

// Fungsi untuk mereset input dan output
function reset() {
    inputCelcius.value = '';
    outputFahrenheit.value = '';
    calculation.value = '';
}
