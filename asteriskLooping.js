var x = "";

// soal 1

for (let i = 0; i < 5; i++) {
  x += "*";
  x += "\n";
}
console.log(x);

// // soal 2

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= 5; j++) {
    x += "*";
  }
  x += "\n";
}
console.log(x);

// // soal 3

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    x += "*";
  }
  x += "\n";
}
console.log(x);

// soal 4

for (var i = 5; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    x += "*";
  }
  x += "\n";
}
console.log(x);
