const headerBtn = document.querySelector('.header__btn');
const headBtnSun = document.querySelector(".header__btn-sun");
const headBtnMoon = document.querySelector(".header__btn-moon");
// const heroTitle = document.querySelector('.hero_title')

headerBtn.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    headBtnSun.classList.toggle('sun')
    headBtnMoon.classList.toggle('moon')
    // heroTitle.classList.toggle('dark')
});
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
