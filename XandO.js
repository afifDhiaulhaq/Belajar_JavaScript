var kata = "xoxo";

let jml1 = 0;
let jml2 = 0;

let j = 1;
for (let i = 0; i <= kata.length; i++) {
  if (kata[i] === "x") {
    jml1 += 1;
  } else if (kata[i] === "o") {
    jml2 += 1;
  }
}

console.log(`${jml1} & ${jml2}`);

if (jml1 === jml2) {
  console.log(true);
} else {
  console.log(false);
}
