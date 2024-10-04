$(document).ready(function () {
  $(".slick-slider").slick({
    dots: true, // Hiển thị dots
    infinite: true, // Vòng lặp
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Tự động chuyển slide
    autoplaySpeed: 3000, // Tốc độ tự động chuyển 3 giây
    nextArrow:
      '<button type="button" class="slick-next"><img class="ml-6" src="./src/image/icon/ArrowShort_Right.svg" alt="Next" /></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img style="margin-left: -16px" src="./src/image/icon/ArrowShort_Left.svg" alt="Previous" /></button>',
  });
});
