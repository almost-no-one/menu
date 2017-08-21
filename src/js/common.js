
$( window ).resize(function() {
  //alert($( window ).width());
 if($('header').width()>900){
  if($( ".menu_btn" ).hasClass('menu_btn_cls'))
  $('.menu_btn').click();
   
 } 
});
//---------------------------------------------------------
//--------------------------------------------------------- 
$( window ).load(function() {  

  var menu_lv=1;
  var menu_lv_1=0;
  var menu_lv_2=0;

  $('.cat_list li').hover(function() {
    var attr=$(this).attr('src')
    $('.cat_prev_img').css('background-image', 'url('+attr+')');

  }, function() {

  });
//-------------------------------------------------------


function show_lv_1(){
  menu_lv=1;
  $(".mobile_menu li, .mobile_menu ul").remove();
  $(".row_for_menu .menu_lv_1").clone().appendTo(".mobile_menu"); 

  $(".mobile_menu li > div").remove();
  $('.mobile_des').css('display', 'none');
  //----
  $('.logo_image_mobile').css('display', 'block');
  $('.menu_btn_prev').css('display', 'none');
  $('.menu_btn_prev').css('display', 'none');
  $('.mobile_menu').removeClass('lv_2');
}
show_lv_1();

$('.mobile_menu_wrapper').on('click', '.mobile_menu .lv_2_perent', function(e) {
  var index=$(this).index();
  
  menu_lv=3;
  menu_lv_2=index;
 // $('.mobile_des').text($(this+'>a').text());
 $('.mobile_des').text($(this).children('a').text());
 e.preventDefault();  
 $('.mobile_menu').removeClass('lv_2');
 $(".mobile_menu li").remove();
 $(".row_for_menu .menu_lv_1:eq("+menu_lv_1+") .menu_lv_2:eq("+menu_lv_2+")  .menu_lv_3").clone().appendTo(".mobile_menu");

  //alert($(".row_for_menu .menu_lv_1:eq("+menu_lv_1+")  .menu_lv_3").html());

});

$('.mobile_menu_wrapper').on('click', '.mobile_menu .perent', function(e) {
  var index=$(this).index();
  
  menu_lv=2;
  menu_lv_1=index;
  
 // alert(menu_lv+' '+menu_lv_1);

 $('.logo_image_mobile').css('display', 'none');
 $('.menu_btn_prev').css('display', 'block');
 $('.mobile_menu').addClass('lv_2');
 $('.mobile_des').text($(this).children('a').text());
 $('.mobile_des').css('display', 'block');
 e.preventDefault();  

 $(".mobile_menu li").remove();
 $(".row_for_menu .menu_lv_1:eq("+menu_lv_1+") .menu_lv_2").clone().appendTo(".mobile_menu");


});
//--------------------------------------------------------
$('.menu_btn_prev').on('click', function(e) {

  if(menu_lv==2){

    show_lv_1();
  }
  if(menu_lv==3){
   menu_lv=2;
   $('.mobile_des').text($(".row_for_menu .menu_lv_1:eq("+menu_lv_1+") > a").text());
   //alert($(".row_for_menu .menu_lv_1:eq("+menu_lv_1+") > a").text());
   $(".mobile_menu li, .mobile_menu ul").remove();
   $('.mobile_menu').addClass('lv_2');
   $(".row_for_menu .menu_lv_1:eq("+menu_lv_1+") .menu_lv_2").clone().appendTo(".mobile_menu");

 }  
});


var avatarElem = document.getElementById('fix_menu_wrapper');

var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
  if($( window ).width()>900){
    if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {

      avatarElem.classList.remove('fixed');
      $('.row_for_menu').removeClass('row_for_menu_fixed'); 
      $('header').removeClass('clam_head'); 
      if($( ".menu_btn" ).hasClass('menu_btn_cls')){
        $( ".menu_btn" ).click();
        $('.row_for_menu').css('display', 'block'); 
      }
      //if($( window ).width()>900)
      $('.row_for_menu').removeClass('row_for_menu_fixed');
        $('.row_for_menu').css('display', 'block'); 
      
    } else if (window.pageYOffset > avatarSourceBottom) {
      avatarElem.classList.add('fixed'); 
      $('header').addClass('clam_head'); 
      $('.row_for_menu').addClass('row_for_menu_fixed');
     
        if(!$(".menu_btn").hasClass('menu_btn_cls'))
          $('.row_for_menu').css('display', 'none');

      }
    }
    else{

      if (window.pageYOffset < 50) {
       $('#fix_menu_wrapper').removeClass('fixed'); 
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

$('.header_menu > li ').hover(function() { 
  $('.header_menu').addClass('header_menu_1');
}, function() { 
  $('.header_menu').removeClass('header_menu_1');
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
