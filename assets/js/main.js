$(".center").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay:true,
    speed: 300,
    responsive: [
        {
          breakpoint: 1520,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1110,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});
$('.billboard-single-slider').slick({
  slidesToScroll: 1,
  autoplay:true,
  infinite: true,
  speed: 300,
});

$(document).on('click','.ham-input', function(){
    $('.mt-header__menu--list').toggleClass('active');
});