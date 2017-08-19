

//---------------------------------------------------------
//--------------------------------------------------------- 
$( window ).load(function() {  



// $('.header_menu > li').hover(function() {
//  $(this).addClass('menu_hover');
//  if ($(this).hasClass('collect'))  $('.header_menu').addClass('header_menu_large'); 
// 
//}, function() {
//  $(this).removeClass('menu_hover');
//  $('.header_menu').removeClass('header_menu_large');
//});

$('.perent').on('click', function(e) {
  e.preventDefault();  
  $('.menu_btn_prev').addClass('show');
  $('.logo_image_mobile').removeClass('show'); 
  if($(this).hasClass('about')){      
    $('.header_menu').addClass('vis_hid');
  }
  if($(this).hasClass('juwelery')){      
    $('.header_menu').addClass('vis_hid');
    $('.menu_lv_2').addClass('vis_vis');
  }
});

$('.menu_btn_prev').on('click', function(e) {

  $('.menu_btn_prev').removeClass('show');
  $('.logo_image_mobile').addClass('show'); 
  $('.header_menu').removeClass('vis_hid');

});

var avatarElem = document.getElementById('fix_menu');

var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
  if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
    avatarElem.classList.remove('fixed');
    $('.row_for_menu').removeClass('row_for_menu_fixed');
    $('.menu_btn').removeClass('menu_btn_cls');
    $('.header_contact').removeClass('show');
    $('.logo_image_mobile').removeClass('show');
    $('.logo_image_mobile').removeClass('show');
  } else if (window.pageYOffset > avatarSourceBottom) {
    avatarElem.classList.add('fixed');
  }
};


$('.cat_list li').hover(function() {
  var attr=$(this).attr('src')
  $('.cat_prev_img').css('background-image', 'url('+attr+')');

}, function() {

});


$( ".menu_btn" ).click(function() {
  if(!$( ".menu_btn" ).hasClass('menu_btn_cls')){

    $('.logo_image_mobile').addClass('show');
    $('.header_contact').addClass('show');
    $('.row_for_menu').addClass('row_for_menu_fixed');
    $(this).addClass('menu_btn_cls');
    
  }
  else{
   $('.header_contact').removeClass('show');
   $('.row_for_menu').removeClass('row_for_menu_fixed');
   $(this).removeClass('menu_btn_cls');
   $('.menu_btn_prev').removeClass('show');
   $('.logo_image_mobile').addClass('show'); 
   $('.header_menu').removeClass('vis_hid');
 }
});



$('.full_menu').hover(function() { 

  if($( window ).width()>1200)
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


  //------------------------------------

});
