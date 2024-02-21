// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(()=>{
//      console.log(4);
//      setTimeout(() => { 
//         console.log(5);
//         },2000) 
//         }, 3000);

// new Promise((resolve, reject) => { //비동기. 실행은 하되 기다리긴 싫을 때
//     setTimeout(()=> {
//         console.log("1번");
//     }, 2000);
//     resolve("3번"); // 3번이 result로 들어가고 그 result가 then 에서 반환된다
// }).then((result) => {
//     console.log(result);
// });

// console.log("2번");


console.log("프로그램 시작");

const p = new Promise((resolve, reject) => { //promise의 정의 형태, 생성과 동시에 실행이 된다 resolve 후엔 then, reject후엔 catch(오류 처리)


console.log("여기서");
console.log("여기까지");
resolve();
});
p.then(()=> {
    console.log("3초 뒤에 출력");
});
console.log("여기가 먼저");