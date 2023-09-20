import 'magnific-popup';
import 'slick-carousel';

jQuery( document ).ready(function($) {
    $('.mfp-iframe').magnificPopup()
    $('.mfp-inline').magnificPopup()  

      $('#music-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        prevArrow:"<button class='slick-prev' aria-label='Previous'><i class='fas fa-chevron-left'></i></button>",
        nextArrow:"<button class='slick-next' aria-label='next'><i class='fas fa-chevron-right'></i></button>",
        responsive:[
            {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
            }
        ] 
    });

    $('#merch-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        prevArrow:"<button class='slick-prev' aria-label='Previous'><i class='fas fa-chevron-left'></i></button>",
        nextArrow:"<button class='slick-next' aria-label='next'><i class='fas fa-chevron-right'></i></button>",
        responsive:[
            {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
            }
        ]
    });

    setTimeout(function(){
      $('.bit-button').html('More Info')
      $('.bit-button').attr('href', $('.bit-button').attr('href').split('?')[0]) 
    }, 50)

    function debounce(func){
        var timer;
        return function(event){
          if(timer) clearTimeout(timer);
          timer = setTimeout(func,100,event);
        };
      }

      window.addEventListener("resize",debounce(function(e){
        setTimeout(function(){
            $('.bit-button').html('More Info')
            $('.bit-button').attr('href', $('.bit-button').attr('href').split('?')[0]) 
          }, 50)
      }));
   
});