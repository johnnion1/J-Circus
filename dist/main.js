/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const cacheDom = (function () {
  const goRightButton = document.querySelector(".rightButton");
  const goLeftButton = document.querySelector(".leftButton");
  const activateButton = document.querySelector(".middleButton");

  const imgBoxList = document.querySelectorAll(".imgBox");
  const pictureItem = document.querySelector(".pictureItem");
  const picFront = document.querySelector(".picFront");
  const pictureFrame = document.querySelector(".pictureFrame");
  return {
    goLeftButton,
    goRightButton,
    activateButton,
    imgBoxList,
    pictureItem,
    picFront,
    pictureFrame,
  };
})();

cacheDom.picFront.addEventListener("click", () => {
  if (!cacheDom.pictureItem.classList.contains("spin")) {
    cacheDom.pictureItem.classList.toggle("spin");
    console.log(cacheDom.pictureItem);
  } /* else cacheDom.pictureItem.classList.remove("spin") */
  setTimeout(() => {
    cacheDom.pictureItem.classList.remove("spin");
  }, 5000);
}); /* 
      cacheDom.pictureItem.addEventListener("hover", () => {
        cacheDom.pictureItem.classList.toggle(".spin");
        setTimeout(() => {
          cacheDom.pictureItem.classList.toggle(".spin");
        }, 4000);
      }); */

console.log(cacheDom);
let counter = 0;
let isActive = false;
function nextSlide() {
  if (!isActive) {
    return;
  }
  console.log(cacheDom.imgBoxList[counter]);
  if (!cacheDom.imgBoxList[counter].classList.contains("nonfocus")) {
    cacheDom.imgBoxList[counter].classList.toggle("nonfocus");
  }
  if (counter + 1 > cacheDom.imgBoxList.length - 1) {
    counter = 0;
    cacheDom.imgBoxList[counter].classList.toggle("nonfocus");

    return;
  }
  cacheDom.imgBoxList[++counter].classList.toggle("nonfocus");
  setTimeout(() => {
    window.focus();
  }, 1000);
}

function prevSlide() {
  if (!isActive) {
    return;
  }
  if (!cacheDom.imgBoxList[counter].classList.contains("nonfocus")) {
    cacheDom.imgBoxList[counter].classList.toggle("nonfocus");
  }
  if (counter - 1 < 0) {
    counter = cacheDom.imgBoxList.length - 1;
    cacheDom.imgBoxList[counter].classList.toggle("nonfocus");

    return;
  }
  cacheDom.imgBoxList[--counter].classList.toggle("nonfocus");

  window.focus();
}
cacheDom.goRightButton.addEventListener("click", nextSlide);
cacheDom.goLeftButton.addEventListener("click", prevSlide);

cacheDom.activateButton.addEventListener("click", () => {
  if (!isActive) {
    cacheDom.imgBoxList[counter].classList.toggle("nonfocus");
    cacheDom.activateButton.classList.toggle("activated");
    isActive = true;
  } else if (isActive) {
    cacheDom.imgBoxList[counter].classList.toggle("nonfocus");
    counter = 0;
    cacheDom.activateButton.classList.toggle("activated");
    isActive = false;
  }
  console.log(Number(counter));
});

/******/ })()
;
//# sourceMappingURL=main.js.map