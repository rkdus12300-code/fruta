// 사이드 메뉴
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


// 스크롤 방향에 따라 헤더 숨기기 / 보이기
const header = document.querySelector(".top");

let previousScrollPosition = window.scrollY;
const scrollThreshold = 8;

window.addEventListener("scroll", function () {
    const currentScrollPosition = window.scrollY;

    // 메뉴가 열려 있을 때는 헤더를 계속 보이게
    if (document.body.classList.contains("menu-active")) {
        header.classList.remove("header-hidden");
        previousScrollPosition = currentScrollPosition;
        return;
    }

    // 페이지 맨 위에서는 항상 헤더 표시
    if (currentScrollPosition <= 0) {
        header.classList.remove("header-hidden");
        previousScrollPosition = currentScrollPosition;
        return;
    }

    // 아주 작은 스크롤 움직임은 무시
    if (
        Math.abs(currentScrollPosition - previousScrollPosition) <
        scrollThreshold
    ) {
        return;
    }

    if (currentScrollPosition > previousScrollPosition) {
        // 아래로 스크롤하면 헤더 숨김
        header.classList.add("header-hidden");
    } else {
        // 위로 스크롤하면 헤더 표시
        header.classList.remove("header-hidden");
    }

    previousScrollPosition = currentScrollPosition;
});


// 탑버튼
const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});


// 메인 배너 사운드
const mainVideo = document.getElementById("mainVideo");
const soundButton = document.querySelector(".sound-btn");
const soundIcon = document.getElementById("soundIcon");

soundButton.addEventListener("click", function () {

    if (mainVideo.muted) {

        mainVideo.muted = false;
        mainVideo.volume = 1;

        soundIcon.src = "./images/sound_on.png";

    } else {

        mainVideo.muted = true;

        soundIcon.src = "./images/sound_off.png";

    }

});
