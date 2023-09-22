let ray = ["barat", "utara", "timur", "selatan"];
// ray[1] = undefined;
// ray[4] = "barat daya";

// for (let i = 0; i < ray.length; i++) {
//   console.log(ray[i]);
// }

// join
// console.log(ray.join(" | "));

// push pop (akhir)
ray.push("barat daya", "barat laut");
ray.pop(4);

// unshift shift (awal)
ray.unshift("tenggara", "timur laut");
ray.shift(0);
console.log(ray.join(" | "));
