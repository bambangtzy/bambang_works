// biasa

// let s = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s)

// kotak

// function kotak(panjang) {
//   let hasil = "";
//   for (i = 0; i < panjang; i++) {
//     for (j = 0; j <= panjang; j++) {
//       hasil += "*";
//     }
//     hasil += "\n";
//   }
//   return hasil;
// }
// console.log(kotak());

// segitiga
// function segitiga(panjang) {
//   let hasil = "";
//   for (i = 0; i < panjang; i++) {
//     for (j = panjang; j > i; j--) {
//       hasil += "*";
//     }
//     hasil += "\n";
//   }
//   return hasil;
// }
// console.log(segitiga(10));

// segitiga sama kaki

// function segitiga3(panjang) {
//   let hasil = "";
//   for (let i = panjang; i > 0; i--) {
//     for (let j = 1; j <= panjang; j++) {
//       if (j >= i) {
//         hasil += "* ";
//       } else {
//         hasil += " ";
//       }
//     }
//     hasil += "\n";
//   }
//   return hasil;
// }
// console.log(segitiga3(10));

function segitiga4(panjang) {
  let hasil = "";
  for (let i = panjang; i > 0; i--) {
    for (let j = panjang; j > 0; j--) {
      if (j > i) {
        hasil += " ";
      } else {
        hasil += "* ";
      }
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitiga4(10));
