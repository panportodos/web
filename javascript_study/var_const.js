// 변수 var, let
// 상수 const

var num1 = 10;
var num2 = 20;

console.log(num1 + num2);

// 호이스팅: 메모리 참조 이전에 선언이 무조건 먼저 일어나는 현상
console.log(num1+num3); //NaN이 되는 이유 : 변수는 선언이 먼저 일어나고 그 다음에 값이 대입이 된다
var num3 = 30;
console.log(num3);
var num3 = "안녕";
console.log(num3);//두번 정의하는 건 불가능하지만 자바스크립트에서는 된다. => var 의 오류


//let은 호이스팅X
//let num4 = 10; //let은 중복 선언 불가능
let num4 = 20;
console.log(num4);

//상수
const num5 = 30;
num5 = 40;
console.log(num5);

// 결론 : 변수형 상관없이 상수는 const, 변수는 let을 쓴다