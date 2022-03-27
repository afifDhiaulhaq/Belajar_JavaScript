let detik = 88;
let menit = 0;
let sisa;

if (detik > 60) {
  menit += 1;
  sisa = detik % 60;
} else {
  menit = 0;
  sisa = detik;
}

console.log(`${menit}:${sisa}`);
