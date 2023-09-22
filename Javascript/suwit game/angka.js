let tanya = true;
while (tanya) {
  //pemilihan random computer
  let comp = Math.floor(Math.random() * 13) + 1;
  console.log(comp);
  // menentukan input player
  let player = parseInt(prompt("Silakan masukan angka 1 - 13 \n(Anda memiliki 5 Kesempatan) \nTebak Kesempatan ke-1 :"));

  // alur game
  let hasil = "";
  for (var chance = 5; chance >= 1; chance--) {
    if (player == comp) {
      hasil = "BENAR!";
      alert("anda menebak angka " + comp + "\n hasil tebakan anda " + hasil);
      break;
    } else if (player != comp && chance > 4) {
      hasil = player < comp ? "terlalu rendah" : "terlalu tinggi";
      player = parseInt(prompt("Angka tebakan anda " + hasil + "\nTebak Kesempatan ke-2 : "));
    } else if (player != comp && chance > 3) {
      hasil = player < comp ? "terlalu rendah" : "terlalu tinggi";
      player = parseInt(prompt("Angka tebakan anda " + hasil + "\nTebak Kesempatan ke-3 : "));
    } else if (player != comp && chance > 2) {
      hasil = player < comp ? "terlalu rendah" : "terlalu tinggi";
      player = parseInt(prompt("Angka tebakan anda " + hasil + "\nTebak Kesempatan ke-4 : "));
    } else if (player != comp && chance > 1) {
      hasil = player < comp ? "terlalu rendah" : "terlalu tinggi";
      player = parseInt(prompt("Angka tebakan anda " + hasil + "\nTebak Kesempatan ke-5 : "));
    } else if (player != comp && chance == 1) {
      hasil = "salah";
      alert("tebakan anda " + hasil + "\n kesempatan anda habis \n nomor yg benar adalah  " + comp);
    }
  }
  tanya = confirm("lagi?");
}
alert("thanks");

// let lagi = true;
// while (lagi) {
//   // comp
//   let comp = Math.round(Math.random() * 9) + 1;
//   console.log(comp);
//   // player input
//   let p = parseInt(prompt("Silakan masukan angka 1 - 10 \n(Anda memiliki 3 Kesempatan) \nTebak Kesempatan ke-1 :"));
//   // alur games
//   let hasil = "";
//   for (var chance = 3; chance >= 1; chance--) {
//     if (p == comp) {
//       hasil = "BENAR!";
//       alert("Anda menebak angka " + comp + "\nTebakan anda " + hasil);
//       break;
//     } else if (p != comp && chance > 2) {
//       hasil = p < comp ? "Angka terlalu Rendah" : "Angka terlalu Tinggi";
//       p = parseInt(prompt("Angka tebakan anda " + hasil + "\nTebak Kesempatan ke-2 : "));
//     } else if (p != comp && chance > 1) {
//       hasil = p < comp ? "Angka terlalu Rendah" : "Angka terlalu Tinggi";
//       p = parseInt(prompt("Angka tebakan anda " + hasil + "\nTebak Kesempatan ke-3 : "));
//     } else if (p != comp && chance == 1) {
//       hasil = "SALAH!";
//       alert("Angka tebakan anda " + hasil + "\nKesempatan anda sudah habis! \nNomor yang benar adalah : " + comp);
//     }
//   }

//   lagi = confirm("Coba bermain lagi?");
// }
// alert("Terimakasi Telah bermain");
