let num = 4;
let hasil = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num - i; j++) {
    hasil += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    hasil += "x";
  }
  hasil += "\n";
}

console.log(hasil);
