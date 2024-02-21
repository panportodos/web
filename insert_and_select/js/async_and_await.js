async function fx1() { //promise를 리턴한다 //async는 resolve가 있다
    console.log("fx1 비동기 호출");
    //throw new Error(); //에러를 강제로 발생시킬 때 throw를 사용한다
    return 10;
}

function handleSubmitClick2() {
    fx1().then((result) => {
        console.log("then 호출");
        console.log(result);
    }).catch(()=>{
        console.log("오류 생성");
    });

    console.log("동기 실행");
    
}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num+"출력");
}

async function fx3() {
    let arg = 0;
    let fx1Result = await fx1(); //비동기를 동기로 바꿔준다 (다끝날때까지 기다려준다)
                                 //동기로 바뀜에 따라 프로미스를 리턴하던 함수가 리턴값을 바로 호출하게 된다
    arg = fx1Result;
    await fx2(arg); // await은 async함수에서만 쓸 수 있다
    // fx1().then((result)=>{
    //     arg = result;
    //     console.log(arg);
    //     fx2(arg);
    // });
}
function handleSubmitClick3() {
    fx3();
} 

function handleSubmitClick() {
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
        return new Promise()
    });
    
    p1.then(() => { //resolve 호출이 있을 때 동작한다
        console.log("p1 then 실행");
        return 10;

    }).then(()=> {
        console.log("세번째 then")
    }).catch(()=> { //reject 호출이 있을 때 동작한다
        console.log("오류");
    });

    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });

    console.log("동기 실행")
}
