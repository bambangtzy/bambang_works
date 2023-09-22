// function tambah(a, b) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }

// hasil = kali(tambah(1, 3), tambah(4, 5));
// alert(hasil);

function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var coba = tambah(3, 4, 5, 2);
console.log(coba);
