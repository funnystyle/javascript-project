var str = 'this is a list of items: cherries, Limes, oranges, apples.';

// console.log(str.indexOf(':'));

// console.log(str.substring(str.indexOf(':') + 1));

var splitted = str.substring(str.indexOf(':') + 1).split(',')

// 명령형 프로그래밍 Imperitive programming (p.29)
// for (var i = 0; i < splitted.length; i++) {
//   splitted[i] = splitted[i].trim().replace('.', '');
// }

// 함수형 프로그래밍 Functional programming (p.85)
// splitted.forEach(function(element, index, array) {
//   array[index] = element.trim().replace('.', '');
// });

// 함수형 프로그래밍 Functional programming (p.89)
var newArr = splitted.map(function(element) {
  return element.trim().replace('.', '');
});

console.log(newArr);

// var s = splitted.map(v => v.trim().replace('.', ''));
// console.log(s);

// 아래 데이터에서 [작성자, 제목, 조회수] 배열로 추출
var sample = '김순곤님(soongon@gmail.com)이 작성하신 "반갑습니다."글입니다.';

/* 내 해법
var author = sample.substring(0, sample.indexOf('님'));
var email = sample.substring(sample.indexOf('(') + 1, sample.indexOf(')'));
var dqStart = sample.indexOf('"') + 1;
var title = sample.substring(dqStart, sample.indexOf('"', dqStart));

// var title = sample.split('"')[1];
// var title = sample.substring(sample.indexOf('"') + 1, sample.lastIndexOf('"'));

console.log(author, email, title);

var array = [author, email, title];

console.log(array);

var throughMap = array.map(function(element) {
  return element.length;
});

console.log(throughMap);
*/

// 강사 해법
var datas = [];
datas.push(sample.substring(0, sample.indexOf('님')));
datas.push(sample.substring(sample.indexOf("(") + 1, sample.indexOf(')')));
datas.push(sample.substring(sample.indexOf('"') + 1, sample.lastIndexOf('"')));

console.log(datas);

// map 함수를 사용해서 다음과 같이 변경
// var throughMap = [3, 17, 6]

let newDatas = datas.map(function(element) {
  return element.length;
});

console.log(newDatas);

// 10보다 작은 것만 남기기
let filtered = newDatas.filter(function(element) {
  return element < 10;
})

console.log(filtered);
