const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup");
const popup_close = document.querySelector(".popup__close");
const popup_img = document.querySelector(".popup__img");
const arrow_left = document.querySelector(".popup__arrow--left");
const arrow_right = document.querySelector(".popup__arrow--right");

let currentImgIndex;

const showNextImg = () => {
  if (currentImgIndex === thumbnails.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  popup_img.src = thumbnails[currentImgIndex].src;
};

const showPreviousImg = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = thumbnails.length - 1;
  } else {
    currentImgIndex--;
  }
  popup_img.src = thumbnails[currentImgIndex].src;
};

const closePopup = () => {
  popup.classList.add("fade-out");
  setTimeout(() => {
    popup.classList.add("hidden");
    popup.classList.remove("fade-out");
  }, 300); 
};

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {
    popup.classList.remove("hidden");
    popup_img.src = e.target.src;
    currentImgIndex = index;
  });
});

popup_close.addEventListener("click", closePopup);

arrow_right.addEventListener("click", showNextImg);

arrow_left.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e) => {
  if (!popup.classList.contains("hidden")) {
    if (e.code === "ArrowRight") {
      showNextImg();
    }
    if (e.code === "ArrowLeft") {
      showPreviousImg();
    }
    if (e.code === "Escape") {
      closePopup();
    }
  }
});


popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        closePopup();
    }
});