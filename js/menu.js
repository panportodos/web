const menuButton = document.querySelector(".menu-button");
menuButton.onclick = () => {
    const sideBarLayout = document.querySelector(".side-bar-layout"); //객체를 들고온다
    sideBarLayout.classList.add("side-bar-show");
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.add("side-bar-container-show");
}

const closeButton = document.querySelector(".side-bar-close-button");

closeButton.onclick = () => {
    const sideBarLayout = document.querySelector(".side-bar-layout"); //선택자를 적어야하므로 .을 찍는다
    sideBarLayout.classList.remove("side-bar-show"); //class이름을 적어야하므로 .을 찍지 않는다
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.remove("side-bar-container-show");
    // sideBarContainer.style.backgroundColor = 'red'; //이렇게 할 순 있으나 인라인 에서 css가 바뀌기 때문에 클래스로 조정한다
}