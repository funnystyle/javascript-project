var favoriteColors = [
  'red', 'blue', 'pink', 'black', 'orange', 'green'
];

console.log(favoriteColors[3]);

favoriteColors['author'] = 'kim';

console.log(favoriteColors['author']);
console.log(favoriteColors);

for (var i = 0; i < favoriteColors.length; i++) {
  console.log(favoriteColors[i]);
}

for (var i in favoriteColors) {
  console.log(favoriteColors[i]);
}

/*
console.log(favoriteColors);
favoriteColors.push('white');
console.log(favoriteColors);

for (var i = 0; i < favoriteColors.length; i++) {
  console.log(favoriteColors[i]);
}

console.log(favoriteColors.length);
favoriteColors.length = 9;
console.log(favoriteColors);
//favoriteColors.length = 4;
//console.log(favoriteColors);
//favoriteColors.length = 7; // 원복

for (var i = 0; i < favoriteColors.length; i++) {
  console.log(favoriteColors[i]);
}

for (var i in favoriteColors) {
  console.log(favoriteColors[i]);
}
*/
