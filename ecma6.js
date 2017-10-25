// function add(a = 0, b = 0) {
//   return a + b;
// }

// const add = function(a = 0, b = 0) {
//   return a + b;
// }

// Fat Arrow function
const add = (a = 0, b = 0) => a + b;

const res = add(3, 4);
const res2 = add(3);

console.log(res2);

// create data without model
const article1 = {
  title: '제목1',
  content: '오늘 날씨가 좋네요',
  author: '박찬호',
  views: 20
};

console.log(article1);

// create data with model(class)
class Article {
  constructor(title, content, author, views) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.views = views;
  }
}

const article2 = new Article('제목2', '내일도 맑겠죠?', '박세리', 12);

console.log(article2);

// for ~ in vs. for ~ of
const aArray = ['red', 'blue', 'white', 'black'];
aArray.length = 2;
aArray.length = 4;

for (var i = 0, len = aArray.length; i < len; i++) {
  console.log(aArray[i]);
}

for (var i in aArray) {
  console.log(aArray[i]);
}

for (var item of aArray) {
  console.log(item);
}

// back tick string (``)
const name = '김순곤', addr = '서울';
const es5string = name + ' 님의 주소는 ' + addr + ' 입니다.';
const es6string = `${name} 님의 주소는 ${addr} 입니다.`;

// object literal
const myObj = {
  title: '제목1',
  content: '오늘 날씨가 좋네요',
  author: '박찬호',
  views: 20,
  showViews: function () {
    // blah blah
  },
  setAuthor() { // function 생략 가능
    console.log('setAuthor 함수');
  }
};

myObj.setAuthor();
