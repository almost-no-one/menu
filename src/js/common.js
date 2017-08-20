

//---------------------------------------------------------
//--------------------------------------------------------- 
$( window ).load(function() {  

  $('.cat_list li').hover(function() {
    var attr=$(this).attr('src')
    $('.cat_prev_img').css('background-image', 'url('+attr+')');

  }, function() {

  });

// $('.header_menu > li').hover(function() {
//  $(this).addClass('menu_hover');
//  if ($(this).hasClass('collect'))  $('.header_menu').addClass('header_menu_large'); 
// 
//}, function() {
//  $(this).removeClass('menu_hover');
//  $('.header_menu').removeClass('header_menu_large');
//});

//$('.perent').on('click', function(e) {
//  e.preventDefault();  
//  $('.menu_btn_prev').addClass('show');
//  $('.logo_image_mobile').removeClass('show'); 
//  if($(this).hasClass('about')){      
//    $('.header_menu').addClass('vis_hid');
//  }
//  if($(this).hasClass('juwelery')){      
//    $('.header_menu').addClass('vis_hid');
//    $('.menu_lv_2').addClass('vis_vis');
//  }
//});

$('.menu_btn_prev').on('click', function(e) {

  //$('.menu_btn_prev').removeClass('show');
  //$('.logo_image_mobile').addClass('show'); 
  //$('.header_menu').removeClass('vis_hid');

});

$(".menu_lv_1").appendTo(".mobile_menu");

var avatarElem = document.getElementById('fix_menu_wrapper');

var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
  if($( window ).width()>900){
    if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {

      avatarElem.classList.remove('fixed');
      if($( ".menu_btn" ).hasClass('menu_btn_cls'))
        $( ".menu_btn" ).click();
      if($( window ).width()>900)
        $('.row_for_menu').css('display', 'block'); 
      $('.row_for_menu').removeClass('row_for_menu_fixed'); 
      $('header').removeClass('clam_head'); 


    } else if (window.pageYOffset > avatarSourceBottom) {
      avatarElem.classList.add('fixed'); 
      $('header').addClass('clam_head'); 
      $('.row_for_menu').addClass('row_for_menu_fixed');
      $('.row_for_menu').css('display', 'none');
    }
  }
  else{

    if (window.pageYOffset < 50) {
     $('#fix_menu_wrapper').removeClass('fixed'); 
     //if($( ".menu_btn" ).hasClass('menu_btn_cls'))
     // $( ".menu_btn" ).click();

  } else{

    $('#fix_menu_wrapper').addClass('fixed'); 
  }
}
};


$( ".menu_btn" ).click(function() {

  if($( window ).width()>900){
    if(!$( ".menu_btn" ).hasClass('menu_btn_cls')){ 
      $(this).addClass('menu_btn_cls');
      $('.row_for_menu').addClass('row_for_menu_fixed');
      $('.row_for_menu').css('display', 'block'); 
    }
    else{

     $('.row_for_menu').removeClass('row_for_menu_fixed');
     $(this).removeClass('menu_btn_cls');
     $('.row_for_menu').css('display', 'none'); 
   }
 }
 else{
   if(!$( ".menu_btn" ).hasClass('menu_btn_cls')){ 
     $(this).addClass('menu_btn_cls');
     $( ".menu_btn" ).addClass('btn_menu_fix');
     $( "header" ).addClass('header_for_menu');
     $('.mobile_menu_wrapper').addClass('show');
     $('#fix_menu_wrapper').addClass('mobile_fixed'); 
   }
   else{
    $(this).removeClass('menu_btn_cls');
    $( "header" ).removeClass('header_for_menu');
    $('.mobile_menu_wrapper').removeClass('show');
    $( ".menu_btn" ).removeClass('btn_menu_fix');
    $('#fix_menu_wrapper').removeClass('mobile_fixed'); 
  }
}
reslick();
});

$('.full_menu').hover(function() { 

  if($( window ).width()>900)
    $('.header_menu').addClass('header_menu_large'); 

}, function() { 
  $('.header_menu').removeClass('header_menu_large');
});

var i=1; 
$( ".debug button" ).click(function() { 
 if(i==0){
   $('head').append('<style>body .body_debug_bg{display: none;}</style>');
   $(this).css('background-color', 'green');
   i++;
 }
 else{
  i=0;
  $('head').append('<style>body .body_debug_bg{display: block;}</style>');
  $(this).css('background-color', 'red');
} 
});

function reslick(){
    $('.mobile_courusel').slick('unslick'); /* ONLY remove the classes and handlers added on initialize */
    //$('.my-mobile_courusel').remove(); /* Remove current slides elements, in case that you want to show new slides. */
    $('.mobile_courusel').slick(getSliderSettings()); /* Initialize the slick again */
}
getSliderSettings();
function getSliderSettings(){
$('.mobile_courusel').slick({
  infinite: true, 
  slidesToShow: 3, 
  dots: false,
  arrows: true,
  responsive: [ 
  {
    breakpoint: 680,
    settings: {
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    }
  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ] 
  });
}

  //------------------------------------

});
