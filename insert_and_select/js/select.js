async function handleSearchClick() { //클릭했을 때 fetch로 요청 날려라
    try {
        const response = await fetch("http://localhost:8080/insert_and_select/data/list"); //option 안넣는 이유 : 넣어줄 옵션도 없고 기본값이 get요청이기 때문
        if(!response.ok) { 
            throw await response.json();
        }

        const responseData = await response.json();

        const studentList = document.querySelector(".student-list");
        for(let student of responseData.data) {
            studentList.innerHTML += `
            <li>studentId: ${student.studentId} / name: ${student.name} / age: ${student.name} </li>`;
        }
        console.log(responseData.data);

    } catch(error) { //요청이 제대로 갔으면 캐치가 안뜰거고 제대로 안가면 캐치로 콘솔이 뜰거다
        console.log(error);
    }
}