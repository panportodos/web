index = 0;
num = 0;

const addBoxButton = document.querySelector(".add-box-button");



addBoxButton.onclick = () => {
    const boxContainer1 = document.querySelector(".box-container1");
    const boxContainer2 = document.querySelector(".box-container2");
    boxContainer1.innerHTML += `<div class="box"></div>`;



    const boxList = document.querySelectorAll(".box");
    boxList[num].classList.add("white-box");
    num ++;

    for (let box of boxList) {
    box.onclick = () => {
        let isBlueBox = box.classList.contains("blue-box");
        let isRedBox = box.classList.contains("red-box");
        let isWhiteBox = box.classList.contains("white-box");

        if (isWhiteBox == true) {
            box.classList.remove("white-box");
            box.classList.add("blue-box");
        }
        if (isBlueBox == true) {
            box.classList.remove("blue-box");
            box.classList.add("red-box");
        }
        if (isRedBox == true) {
            box.classList.remove("red-box");
            box.classList.add("white-box");
            boxContainer1.removeChild(box);
            boxContainer2.appendChild(box);
        }
        index ++;
    }

}

}