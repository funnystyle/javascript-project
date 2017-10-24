
console.log('hello world');

// 숫자 타입 number
var a = 5;
var b = 3.14;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

// 문자 타입 string
var c = 'hello'; // good
var d = "world"; // bad

console.log(typeof c);
// 불린 타입 boolean
var e = true;
var f = false;

console.log(typeof e);

// undefined..
var g;
console.log(g);
console.log(typeof g);

// html 에 데이터를 표현
var data = 'hello world!';
document.write(data);

// 1부터 100사이의 3의 배수 출력
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) console.log(i);
}

// 2중 for 문 사용 구구단 출력
for (var i = 2; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    console.log(i + ' * ' + j + ' = ' + i * j);
    // console.log(i, "*", j, "=", i * j);
  }
}

// if 문의 평가식은 참 또는 거짓만 와야 함
// undefined 는 거짓으로 평가됨
// 숫자는 0은 거짓 나머지는 참으로 평가됨
// 문자열은 '' (빈문자열) 거짓, 나머지는 모두 참
// 배열에서 [] (빈배열)이던 아니던 모든 배열은 참

var z = null;
console.log(typeof z);

if (z) {
  console.log('if 평가식이 참이므로 문장이 수행됩니다.');
} else {
  console.log('if 평가식이 거짓입니다.');
}
