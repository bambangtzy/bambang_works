var tanya = true;
while (tanya) {
  // menagkap pilihan player
  var p = prompt("pilih :  \n gajah , manusia , semut");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "manusia";
  } else {
    comp = "semut";
  }
  // menentukan rules
  var hasil = "";
  if (p == comp) {
    hasil = "hasilnya seri !";
  } else if (p == "gajah") {
    //   if ((comp = "manusia")) {
    //     hasil = "kamu menang";
    //   } else {
    //     hasil = "kamu kalah";
    //   }
    hasil = comp == "manusia" ? "MENANG!" : "KALAH!";
  } else if (p == "manusia") {
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "manusia" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "pake matanya ya baby";
  }
  // tampilkan hasilnya
  alert("kamu memilih " + p + " dan komputer memilih " + comp + " maka hasilnya " + hasil);

  tanya = confirm("lagi?");
}
alert("thanks yaa canda aja hhe");
