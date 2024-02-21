//!중요하다!
function add(num1, num2) {
    console.log("num1: " + num1);
    console.log('num2: ${num2}'); // EL표현식 (expression language)
    return num1 + num2;
}

console.log(add(10,20));

let addFunction = add;
console.log(add);
console.log(addFunction(30,40));

let user = {
    username: "junil",
    password: "1234",
    // addFunction: add //함수를 변수에 넣을 수 있다
    addFunction: function add(a,b) {
        return a+b
    }
}

console.log(user.addFunction(10,20)); //변수에 함수가 들어간다



//7교시//
//익명함수
let sub = function sub(a,b) {
    return a - b;
}

let result1 = sub(10,5);
console.log(result1);
console.log(sub);

// 화살표함수 (람다식)
// let div = function (a,b) { //function을 (a,b) 뒤로 보내고 function 대신 화살표를 넣는다
//     return a / b;
// }
let div = (a,b) => {
    return a / b;
}

console.log(div(10,5));

div = (a,b) => a/b;
console.log(div(20 / 5));
console.log(div);