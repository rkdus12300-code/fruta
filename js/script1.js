// ===============================
// 사이드 메뉴
// ===============================

const menuOpenButton = document.querySelector(".menu-open");
const menuCloseButton = document.querySelector(".menu-close");
const menuDim = document.querySelector(".menu-dim");
const sideMenu = document.querySelector(".side-menu");
const sideMenuLinks = document.querySelectorAll(".side-nav a");

function openSideMenu() {
    document.body.classList.add("menu-active");
    sideMenu.setAttribute("aria-hidden", "false");
}

function closeSideMenu() {
    document.body.classList.remove("menu-active");

    if (sideMenu.contains(document.activeElement)) {
        menuOpenButton.focus();
    }

    sideMenu.setAttribute("aria-hidden", "true");
}

menuOpenButton.addEventListener("click", openSideMenu);
menuCloseButton.addEventListener("click", closeSideMenu);
menuDim.addEventListener("click", closeSideMenu);

sideMenuLinks.forEach(function (link) {
    link.addEventListener("click", closeSideMenu);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeSideMenu();
    }
});


// ===============================
// 스크롤 방향에 따라 헤더 숨기기 / 보이기
// ===============================

const header = document.querySelector(".top");

let previousScrollPosition = window.scrollY;
const scrollThreshold = 8;

window.addEventListener("scroll", function () {

    const currentScrollPosition = window.scrollY;

    if (document.body.classList.contains("menu-active")) {
        header.classList.remove("header-hidden");
        previousScrollPosition = currentScrollPosition;
        return;
    }

    if (currentScrollPosition <= 0) {
        header.classList.remove("header-hidden");
        previousScrollPosition = currentScrollPosition;
        return;
    }

    if (
        Math.abs(currentScrollPosition - previousScrollPosition) <
        scrollThreshold
    ) {
        return;
    }

    if (currentScrollPosition > previousScrollPosition) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }

    previousScrollPosition = currentScrollPosition;
});


// ===============================
// 탑버튼
// ===============================

const topButton = document.querySelector(".top_btn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});