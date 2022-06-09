const slider = document.querySelector('.charge-list');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});


$(document).ready(function () {
  /* 常見問題 */
  $('.faq-title').click(function (e) {
    e.preventDefault();
    $(this).find('h3').toggleClass('active');
    $(this).find('.plus').toggleClass('d-none');
    $(this).find('.minus').toggleClass('d-none');
    $(this).siblings('.faq-content').slideToggle();
    $(this).parent().siblings().find('h3').removeClass('active');
    $(this).parent().siblings().find('.minus').addClass('d-none');
    $(this).parent().siblings().find('.plus').removeClass('d-none');
    $(this).parent().siblings().find('.faq-content').slideUp();
  })

  /* go top */
  $('.gotop').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500)
  })

  /* 方案人數切換 */
  $('.charge-list li').click(function (e) {
    e.preventDefault();
    $(this).find('a').addClass('active');
    $(this).siblings().find('a').removeClass('active');
    $('.counts-number').text(e.target.dataset.price);
    $('.charge-btn-content').text(`${e.target.dataset.price}位`);
  })
})