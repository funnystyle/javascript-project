var obj = {};

obj.title = '제목입니다';
obj['content'] = '오늘은 날씨가 좀 쌀쌀하네요';
obj.author = '이순신';
obj.views = 10;
obj.comments = ['조아요', '이순신장순 나빠요', '날씨 좀 덥지않아요'];

console.log(obj);

var obj2 = {
  title: '자바스크립트 문법',
  content: '생각보다 만만치 않네요.',
  author: '박찬호',
  views: 25,
  comments: ['조아요', '자바스크립트 알면 쉬워요', '박찬호씨 요즘 머해요?']
};
obj2.likes = 5;

console.log(obj2);

console.log(obj2.content);
console.log(obj2.comments[2]);
