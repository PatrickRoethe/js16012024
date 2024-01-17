// slider.js

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let slideIndex = 0;

  function showSlides() {
    if (slideIndex === -1) {
      slideIndex = slider.children.length - 1;
    } else if (slideIndex === slider.children.length) {
      slideIndex = 0;
    }

    const translationValue = -slideIndex * 100 + "%";
    slider.style.transform = `translateX(${translationValue})`;
  }

  // Optional: You can use setInterval to automatically advance slides
  // setInterval(() => {
  //     slideIndex++;
  //     showSlides();
  // }, 3000);

  // Optional: Add event listeners for navigation buttons
  // document.querySelector('.next-btn').addEventListener('click', () => {
  //     slideIndex++;
  //     showSlides();
  // });

  // document.querySelector('.prev-btn').addEventListener('click', () => {
  //     slideIndex--;
  //     showSlides();
  // });
});
