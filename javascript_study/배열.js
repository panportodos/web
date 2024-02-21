//자바스크립트 배열은 자바의 ArrayList와 유사하다
let numbers1 = [];
let numbers2 = new Array();

numbers1.push(10); //add가 아니라 push
console.log(numbers1);
numbers1.push(20);
console.log(numbers1);
console.log(numbers1[0]);
numbers1[0] = 30;
console.log(numbers1);
numbers1[2] = 50;
console.log(numbers1);
console.log(numbers1[3]);

for(let i=0;i<10;i++) {
    console.log(numbers1[i]);  //index를 초과했다는 에러는 안뜬다
}

//향상된 포문
for(let num of numbers1) {
    console.log(num);
}
numbers1.forEach(n => console.log(n));