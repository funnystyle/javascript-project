function doSomething() {
  console.log('do something');
}

var ret = doSomething(); // call(invoke) the function

console.log(ret);

var greet = sayHello();
console.log(greet);

// 함수 호이스팅 (hoist)
function sayHello() {
  return '안녕하세요';
}

var sayHello2 = function() {
  return '안녕하세요2';
};

var greet2 = sayHello2();
console.log(greet2);

function add(a, b) {
  return a + b;
}

var result = add(3);
console.log(result);

function test(a) {
  a();
}

test(function() {
  console.log('함수의 파라미터로 함수가 전달될 수 있어요');
});

// 덧셈함수
var adder = function(a, b) {
  return a + b;
};

// 뺄셈 함수
var subs = function(a, b) {
  return a - b;
}

var calculator = function(a, b, calcFunction) {
  return calcFunction(a, b);
};

var addResult = calculator(5, 3, adder);
var subResult = calculator(5, 3, subs);

console.log(addResult, subResult);


// ECMA5 문법 변수선언 var (함수 스코프)
// ECMA6 aka. ES2015 변수선언 let (블럭 스코프)
