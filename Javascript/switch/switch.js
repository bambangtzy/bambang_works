let item = prompt(" input dahareun / inumeun anu : /n (hayam, sapi ,susu ,mantang , asin , sambal , nasgor, mi");

switch (item) {
  case "hayam":
  case "sapi":
  case "susu":
  case "mantang":
    alert("dahareun kolot");
    break;
  case "asin":
  case "sambal":
  case "nasgor":
  case "mi":
    alert("dahareun butut");
    break;
  default:
    alert("-1 map");
    break;
}
