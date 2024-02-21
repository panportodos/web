const submitButton = document.querySelector(".input-submit");

// 이벤트 속성
submitButton.onclick = () => {
    const input = document.querySelector(".inputs");
    // alert(input.value);
    const dataList = document.querySelector(".data-list");

    dataList.innerHTML += `<li> ${input.value} </li>`;
}

