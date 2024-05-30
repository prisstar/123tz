document.querySelectorAll(".slider").forEach((n, i) => {
  window[`slider${i + 1}`] = new Swiper(n, {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    slidesPerView: 4.5,
    slidesOffsetBefore: -850,
    loop: true,
  });
});
bindSwipers(slider1, slider2);
