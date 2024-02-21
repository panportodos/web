function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };
    console.log(data);
    const jsonData = JSON.stringify(data); // 객체 -> json
    console.log(jsonData);
    // const dataObj = JSON.parse(jsonData); // json -> 객체
    // console.log(dataObj);
    // //이걸 받을수있는 서블릿을 만들어줘야

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    };

    fetch("http://localhost:8080/insert_and_select1/data/addition", option)
    .then((response) => {
        response.json()
        .then((json) => {
         console.log(json.data); //비동기 : 처리 다되면 알려줘
        });
    });
    console.log("test"); //위보다 얘가 더 빠르게 처리됨
}

// //프로미스
// fetch("http://localhost:8080/insert_and_select1/data/addition", option)
// .then((response) => {
// .then((json) => {
// 	console.log(json);
// 	console.log("test");
// })
// }). catch((error)=>{
//     console.log("프로미스 에러")
// });

//async, await
try{
    const response = await fetch("http://localhost:8080/insert_and_select1/data/addition", option)

    if(!response.ok) {
        throw await response.json();
    }
    const json = await response.json();
    console.log(json);
    console.log("test");
} catch(error) {
    alert(error.errorMessage);
    console.log("에러 처리");
    console.log(error);
}