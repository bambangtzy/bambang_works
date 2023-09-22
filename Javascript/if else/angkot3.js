let jmlAngkot = 10;
let angkotBeroperasi = 1;
let noAngkot = 1;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot no. " + noAngkot + " berfungsi dengan baik");
  } else {
    console.log("Angkot no. " + noAngkot + " tidak berfungsi");
  }
}
let angka = prompt("silahkan masukan angka");
if (angka % 2 == 0) {
  alert(angka + "adalah bilangan genap");
} else if (angka % 2 == 1) {
  alert(angka + "adalah bilangan ganjil");
} else {
  alert(angka + "bukan angka anjing pikir pake otak");
}

alert("thanks");
