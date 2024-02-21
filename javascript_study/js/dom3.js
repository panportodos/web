let index = 1;
const submitButton = document.querySelector(".append-button"); //버튼을 먼저 가져와야 쓸 수 있다

// 이벤트 속성
submitButton.onclick = () => {
    const textInputs = document.querySelectorAll(".text-inputs");
    const dataTableBody = document.querySelector(".data-table-body");

    dataTableBody.innerHTML +=`
        <tr>
            <td>${index}</td>
            <td>${textInputs[0].value}</td>
            <td>${textInputs[1].value}</td>
            <td>${textInputs[2].value}</td>
        </tr>
    `;
    index++;

    for(let input of textInputs) {
        input.value = "";
    }
}