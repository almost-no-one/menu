$(window).load(function(){function e(){$(".mobile_courusel").slick("unslick"),$(".mobile_courusel").slick(n())}function n(){$(".mobile_courusel").slick({infinite:!0,slidesToShow:3,dots:!1,arrows:!0,responsive:[{breakpoint:680,settings:{slidesToShow:1,autoplay:!0,autoplaySpeed:2e3}}]})}$(".cat_list li").hover(function(){var e=$(this).attr("src");$(".cat_prev_img").css("background-image","url("+e+")")},function(){}),$(".row_for_menu .menu_lv_1").clone().appendTo(".mobile_menu"),$(".mobile_menu li > div").remove(),$(".mobile_menu .perent").on("click",function(e){e.preventDefault();var n=$(this).index();$(".mobile_menu li").remove(),$(".row_for_menu .menu_lv_1:eq("+n+") .menu_lv_2").clone().appendTo(".mobile_menu")}),$(".menu_btn_prev").on("click",function(e){});var s=document.getElementById("fix_menu_wrapper"),o=s.getBoundingClientRect().bottom+window.pageYOffset;window.onscroll=function(){$(window).width()>900?s.classList.contains("fixed")&&window.pageYOffset<o?(s.classList.remove("fixed"),$(".menu_btn").hasClass("menu_btn_cls")&&$(".menu_btn").click(),$(window).width()>900&&$(".row_for_menu").css("display","block"),$(".row_for_menu").removeClass("row_for_menu_fixed"),$("header").removeClass("clam_head")):window.pageYOffset>o&&(s.classList.add("fixed"),$("header").addClass("clam_head"),$(".row_for_menu").addClass("row_for_menu_fixed"),$(".row_for_menu").css("display","none")):window.pageYOffset<50?$("#fix_menu_wrapper").removeClass("fixed"):$("#fix_menu_wrapper").addClass("fixed")},$(".menu_btn").click(function(){$(window).width()>900?$(".menu_btn").hasClass("menu_btn_cls")?($(".row_for_menu").removeClass("row_for_menu_fixed"),$(this).removeClass("menu_btn_cls"),$(".row_for_menu").css("display","none")):($(this).addClass("menu_btn_cls"),$(".row_for_menu").addClass("row_for_menu_fixed"),$(".row_for_menu").css("display","block")):$(".menu_btn").hasClass("menu_btn_cls")?($(this).removeClass("menu_btn_cls"),$("header").removeClass("header_for_menu"),$(".mobile_menu_wrapper").removeClass("show"),$(".menu_btn").removeClass("btn_menu_fix"),$("#fix_menu_wrapper").removeClass("mobile_fixed")):($(this).addClass("menu_btn_cls"),$(".menu_btn").addClass("btn_menu_fix"),$("header").addClass("header_for_menu"),$(".mobile_menu_wrapper").addClass("show"),$("#fix_menu_wrapper").addClass("mobile_fixed")),e()}),$(".full_menu").hover(function(){$(window).width()>900&&$(".header_menu").addClass("header_menu_large")},function(){$(".header_menu").removeClass("header_menu_large")});var _=1;$(".debug button").click(function(){0==_?($("head").append("<style>body .body_debug_bg{display: none;}</style>"),$(this).css("background-color","green"),_++):(_=0,$("head").append("<style>body .body_debug_bg{display: block;}</style>"),$(this).css("background-color","red"))}),n()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwibG9hZCIsInJlc2xpY2siLCJzbGljayIsImdldFNsaWRlclNldHRpbmdzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJkb3RzIiwiYXJyb3dzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImhvdmVyIiwiYXR0ciIsInRoaXMiLCJjc3MiLCJjbG9uZSIsImFwcGVuZFRvIiwicmVtb3ZlIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbmRleCIsImF2YXRhckVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXZhdGFyU291cmNlQm90dG9tIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwicGFnZVlPZmZzZXQiLCJvbnNjcm9sbCIsIndpZHRoIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJoYXNDbGFzcyIsImNsaWNrIiwicmVtb3ZlQ2xhc3MiLCJhZGQiLCJhZGRDbGFzcyIsImkiLCJhcHBlbmQiXSwibWFwcGluZ3MiOiJBQUlBQSxFQUFHQyxRQUFTQyxLQUFLLFdBZ0pqQixTQUFTQyxJQUNMSCxFQUFFLG9CQUFvQkksTUFBTSxXQUU1QkosRUFBRSxvQkFBb0JJLE1BQU1DLEtBR2hDLFNBQVNBLElBQ1RMLEVBQUUsb0JBQW9CSSxPQUNwQkUsVUFBVSxFQUNWQyxhQUFjLEVBQ2RDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxhQUVFQyxXQUFZLElBQ1pDLFVBQ0VMLGFBQWMsRUFDZE0sVUFBVSxFQUNWQyxjQUFlLFNBaEtuQmQsRUFBRSxnQkFBZ0JlLE1BQU0sV0FDdEIsSUFBSUMsRUFBS2hCLEVBQUVpQixNQUFNRCxLQUFLLE9BQ3RCaEIsRUFBRSxpQkFBaUJrQixJQUFJLG1CQUFvQixPQUFPRixFQUFLLE1BRXRELGNBY0xoQixFQUFFLDRCQUE0Qm1CLFFBQVFDLFNBQVMsZ0JBRS9DcEIsRUFBRSx5QkFBeUJxQixTQUczQnJCLEVBQUUsd0JBQXdCc0IsR0FBRyxRQUFTLFNBQVNDLEdBQzdDQSxFQUFFQyxpQkFDRixJQUFJQyxFQUFNekIsRUFBRWlCLE1BQU1RLFFBQ2xCekIsRUFBRSxtQkFBbUJxQixTQUNyQnJCLEVBQUUsK0JBQStCeUIsRUFBTSxnQkFBZ0JOLFFBQVFDLFNBQVMsa0JBUTFFcEIsRUFBRSxrQkFBa0JzQixHQUFHLFFBQVMsU0FBU0MsTUFXekMsSUFBSUcsRUFBYUMsU0FBU0MsZUFBZSxvQkFFckNDLEVBQXFCSCxFQUFXSSx3QkFBd0JDLE9BQVM5QixPQUFPK0IsWUFFNUUvQixPQUFPZ0MsU0FBVyxXQUNiakMsRUFBR0MsUUFBU2lDLFFBQVEsSUFDakJSLEVBQVdTLFVBQVVDLFNBQVMsVUFBWW5DLE9BQU8rQixZQUFjSCxHQUVqRUgsRUFBV1MsVUFBVWQsT0FBTyxTQUN6QnJCLEVBQUcsYUFBY3FDLFNBQVMsaUJBQzNCckMsRUFBRyxhQUFjc0MsUUFDaEJ0QyxFQUFHQyxRQUFTaUMsUUFBUSxLQUNyQmxDLEVBQUUsaUJBQWlCa0IsSUFBSSxVQUFXLFNBQ3BDbEIsRUFBRSxpQkFBaUJ1QyxZQUFZLHNCQUMvQnZDLEVBQUUsVUFBVXVDLFlBQVksY0FHZnRDLE9BQU8rQixZQUFjSCxJQUM5QkgsRUFBV1MsVUFBVUssSUFBSSxTQUN6QnhDLEVBQUUsVUFBVXlDLFNBQVMsYUFDckJ6QyxFQUFFLGlCQUFpQnlDLFNBQVMsc0JBQzVCekMsRUFBRSxpQkFBaUJrQixJQUFJLFVBQVcsU0FLaENqQixPQUFPK0IsWUFBYyxHQUN4QmhDLEVBQUUscUJBQXFCdUMsWUFBWSxTQU1wQ3ZDLEVBQUUscUJBQXFCeUMsU0FBUyxVQU1wQ3pDLEVBQUcsYUFBY3NDLE1BQU0sV0FFbEJ0QyxFQUFHQyxRQUFTaUMsUUFBUSxJQUNqQmxDLEVBQUcsYUFBY3FDLFNBQVMsaUJBTzdCckMsRUFBRSxpQkFBaUJ1QyxZQUFZLHNCQUMvQnZDLEVBQUVpQixNQUFNc0IsWUFBWSxnQkFDcEJ2QyxFQUFFLGlCQUFpQmtCLElBQUksVUFBVyxVQVJqQ2xCLEVBQUVpQixNQUFNd0IsU0FBUyxnQkFDakJ6QyxFQUFFLGlCQUFpQnlDLFNBQVMsc0JBQzVCekMsRUFBRSxpQkFBaUJrQixJQUFJLFVBQVcsVUFVakNsQixFQUFHLGFBQWNxQyxTQUFTLGlCQVE3QnJDLEVBQUVpQixNQUFNc0IsWUFBWSxnQkFDcEJ2QyxFQUFHLFVBQVd1QyxZQUFZLG1CQUMxQnZDLEVBQUUsd0JBQXdCdUMsWUFBWSxRQUN0Q3ZDLEVBQUcsYUFBY3VDLFlBQVksZ0JBQzdCdkMsRUFBRSxxQkFBcUJ1QyxZQUFZLGtCQVhsQ3ZDLEVBQUVpQixNQUFNd0IsU0FBUyxnQkFDakJ6QyxFQUFHLGFBQWN5QyxTQUFTLGdCQUMxQnpDLEVBQUcsVUFBV3lDLFNBQVMsbUJBQ3ZCekMsRUFBRSx3QkFBd0J5QyxTQUFTLFFBQ25DekMsRUFBRSxxQkFBcUJ5QyxTQUFTLGlCQVVyQ3RDLE1BR0FILEVBQUUsY0FBY2UsTUFBTSxXQUVqQmYsRUFBR0MsUUFBU2lDLFFBQVEsS0FDckJsQyxFQUFFLGdCQUFnQnlDLFNBQVMsc0JBRTVCLFdBQ0R6QyxFQUFFLGdCQUFnQnVDLFlBQVksdUJBR2hDLElBQUlHLEVBQUUsRUFDTjFDLEVBQUcsaUJBQWtCc0MsTUFBTSxXQUNwQixHQUFISSxHQUNEMUMsRUFBRSxRQUFRMkMsT0FBTyxzREFDakIzQyxFQUFFaUIsTUFBTUMsSUFBSSxtQkFBb0IsU0FDaEN3QixNQUdEQSxFQUFFLEVBQ0YxQyxFQUFFLFFBQVEyQyxPQUFPLHVEQUNqQjNDLEVBQUVpQixNQUFNQyxJQUFJLG1CQUFvQixVQVNsQ2IiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuJCggd2luZG93ICkubG9hZChmdW5jdGlvbigpIHsgIFxyXG5cclxuICAkKCcuY2F0X2xpc3QgbGknKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgIHZhciBhdHRyPSQodGhpcykuYXR0cignc3JjJylcclxuICAgICQoJy5jYXRfcHJldl9pbWcnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcrYXR0cisnKScpO1xyXG5cclxuICB9LCBmdW5jdGlvbigpIHtcclxuXHJcbiAgfSk7XHJcblxyXG4vLyAkKCcuaGVhZGVyX21lbnUgPiBsaScpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4vLyAgJCh0aGlzKS5hZGRDbGFzcygnbWVudV9ob3ZlcicpO1xyXG4vLyAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2NvbGxlY3QnKSkgICQoJy5oZWFkZXJfbWVudScpLmFkZENsYXNzKCdoZWFkZXJfbWVudV9sYXJnZScpOyBcclxuLy8gXHJcbi8vfSwgZnVuY3Rpb24oKSB7XHJcbi8vICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdtZW51X2hvdmVyJyk7XHJcbi8vICAkKCcuaGVhZGVyX21lbnUnKS5yZW1vdmVDbGFzcygnaGVhZGVyX21lbnVfbGFyZ2UnKTtcclxuLy99KTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kKFwiLnJvd19mb3JfbWVudSAubWVudV9sdl8xXCIpLmNsb25lKCkuYXBwZW5kVG8oXCIubW9iaWxlX21lbnVcIik7IFxyXG4vLyQoXCIubW9iaWxlX21lbnUgbGlcIikucmVtb3ZlQ2xhc3MoKTtcclxuJChcIi5tb2JpbGVfbWVudSBsaSA+IGRpdlwiKS5yZW1vdmUoKTtcclxuXHJcblxyXG4kKCcubW9iaWxlX21lbnUgLnBlcmVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICB2YXIgaW5kZXg9JCh0aGlzKS5pbmRleCgpO1xyXG4gICQoXCIubW9iaWxlX21lbnUgbGlcIikucmVtb3ZlKCk7XHJcbiAgJChcIi5yb3dfZm9yX21lbnUgLm1lbnVfbHZfMTplcShcIitpbmRleCtcIikgLm1lbnVfbHZfMlwiKS5jbG9uZSgpLmFwcGVuZFRvKFwiLm1vYmlsZV9tZW51XCIpO1xyXG4gXHJcbiAgIFxyXG4gIC8vaWYoJCh0aGlzKS5oYXNDbGFzcygnanV3ZWxlcnknKSl7ICAgICAgXHJcbiAgLy8gXHJcbiAgLy99XHJcbn0pO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiQoJy5tZW51X2J0bl9wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAvLyQoJy5tZW51X2J0bl9wcmV2JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAvLyQoJy5sb2dvX2ltYWdlX21vYmlsZScpLmFkZENsYXNzKCdzaG93Jyk7IFxyXG4gIC8vJCgnLmhlYWRlcl9tZW51JykucmVtb3ZlQ2xhc3MoJ3Zpc19oaWQnKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxudmFyIGF2YXRhckVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZml4X21lbnVfd3JhcHBlcicpO1xyXG5cclxudmFyIGF2YXRhclNvdXJjZUJvdHRvbSA9IGF2YXRhckVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYoJCggd2luZG93ICkud2lkdGgoKT45MDApe1xyXG4gICAgaWYgKGF2YXRhckVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXhlZCcpICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8IGF2YXRhclNvdXJjZUJvdHRvbSkge1xyXG5cclxuICAgICAgYXZhdGFyRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG4gICAgICBpZigkKCBcIi5tZW51X2J0blwiICkuaGFzQ2xhc3MoJ21lbnVfYnRuX2NscycpKVxyXG4gICAgICAgICQoIFwiLm1lbnVfYnRuXCIgKS5jbGljaygpO1xyXG4gICAgICBpZigkKCB3aW5kb3cgKS53aWR0aCgpPjkwMClcclxuICAgICAgICAkKCcucm93X2Zvcl9tZW51JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7IFxyXG4gICAgICAkKCcucm93X2Zvcl9tZW51JykucmVtb3ZlQ2xhc3MoJ3Jvd19mb3JfbWVudV9maXhlZCcpOyBcclxuICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2NsYW1faGVhZCcpOyBcclxuXHJcblxyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBhdmF0YXJTb3VyY2VCb3R0b20pIHtcclxuICAgICAgYXZhdGFyRWxlbS5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpOyBcclxuICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2NsYW1faGVhZCcpOyBcclxuICAgICAgJCgnLnJvd19mb3JfbWVudScpLmFkZENsYXNzKCdyb3dfZm9yX21lbnVfZml4ZWQnKTtcclxuICAgICAgJCgnLnJvd19mb3JfbWVudScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IDUwKSB7XHJcbiAgICAgJCgnI2ZpeF9tZW51X3dyYXBwZXInKS5yZW1vdmVDbGFzcygnZml4ZWQnKTsgXHJcbiAgICAgLy9pZigkKCBcIi5tZW51X2J0blwiICkuaGFzQ2xhc3MoJ21lbnVfYnRuX2NscycpKVxyXG4gICAgIC8vICQoIFwiLm1lbnVfYnRuXCIgKS5jbGljaygpO1xyXG5cclxuICB9IGVsc2V7XHJcblxyXG4gICAgJCgnI2ZpeF9tZW51X3dyYXBwZXInKS5hZGRDbGFzcygnZml4ZWQnKTsgXHJcbiAgfVxyXG59XHJcbn07XHJcblxyXG5cclxuJCggXCIubWVudV9idG5cIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cclxuICBpZigkKCB3aW5kb3cgKS53aWR0aCgpPjkwMCl7XHJcbiAgICBpZighJCggXCIubWVudV9idG5cIiApLmhhc0NsYXNzKCdtZW51X2J0bl9jbHMnKSl7IFxyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdtZW51X2J0bl9jbHMnKTtcclxuICAgICAgJCgnLnJvd19mb3JfbWVudScpLmFkZENsYXNzKCdyb3dfZm9yX21lbnVfZml4ZWQnKTtcclxuICAgICAgJCgnLnJvd19mb3JfbWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpOyBcclxuICAgIH1cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICQoJy5yb3dfZm9yX21lbnUnKS5yZW1vdmVDbGFzcygncm93X2Zvcl9tZW51X2ZpeGVkJyk7XHJcbiAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbWVudV9idG5fY2xzJyk7XHJcbiAgICAgJCgnLnJvd19mb3JfbWVudScpLmNzcygnZGlzcGxheScsICdub25lJyk7IFxyXG4gICB9XHJcbiB9XHJcbiBlbHNle1xyXG4gICBpZighJCggXCIubWVudV9idG5cIiApLmhhc0NsYXNzKCdtZW51X2J0bl9jbHMnKSl7IFxyXG4gICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnVfYnRuX2NscycpO1xyXG4gICAgICQoIFwiLm1lbnVfYnRuXCIgKS5hZGRDbGFzcygnYnRuX21lbnVfZml4Jyk7XHJcbiAgICAgJCggXCJoZWFkZXJcIiApLmFkZENsYXNzKCdoZWFkZXJfZm9yX21lbnUnKTtcclxuICAgICAkKCcubW9iaWxlX21lbnVfd3JhcHBlcicpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgJCgnI2ZpeF9tZW51X3dyYXBwZXInKS5hZGRDbGFzcygnbW9iaWxlX2ZpeGVkJyk7IFxyXG4gICB9XHJcbiAgIGVsc2V7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdtZW51X2J0bl9jbHMnKTtcclxuICAgICQoIFwiaGVhZGVyXCIgKS5yZW1vdmVDbGFzcygnaGVhZGVyX2Zvcl9tZW51Jyk7XHJcbiAgICAkKCcubW9iaWxlX21lbnVfd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAkKCBcIi5tZW51X2J0blwiICkucmVtb3ZlQ2xhc3MoJ2J0bl9tZW51X2ZpeCcpO1xyXG4gICAgJCgnI2ZpeF9tZW51X3dyYXBwZXInKS5yZW1vdmVDbGFzcygnbW9iaWxlX2ZpeGVkJyk7IFxyXG4gIH1cclxufVxyXG5yZXNsaWNrKCk7XHJcbn0pO1xyXG5cclxuJCgnLmZ1bGxfbWVudScpLmhvdmVyKGZ1bmN0aW9uKCkgeyBcclxuXHJcbiAgaWYoJCggd2luZG93ICkud2lkdGgoKT45MDApXHJcbiAgICAkKCcuaGVhZGVyX21lbnUnKS5hZGRDbGFzcygnaGVhZGVyX21lbnVfbGFyZ2UnKTsgXHJcblxyXG59LCBmdW5jdGlvbigpIHsgXHJcbiAgJCgnLmhlYWRlcl9tZW51JykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9tZW51X2xhcmdlJyk7XHJcbn0pO1xyXG5cclxudmFyIGk9MTsgXHJcbiQoIFwiLmRlYnVnIGJ1dHRvblwiICkuY2xpY2soZnVuY3Rpb24oKSB7IFxyXG4gaWYoaT09MCl7XHJcbiAgICQoJ2hlYWQnKS5hcHBlbmQoJzxzdHlsZT5ib2R5IC5ib2R5X2RlYnVnX2Jne2Rpc3BsYXk6IG5vbmU7fTwvc3R5bGU+Jyk7XHJcbiAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2dyZWVuJyk7XHJcbiAgIGkrKztcclxuIH1cclxuIGVsc2V7XHJcbiAgaT0wO1xyXG4gICQoJ2hlYWQnKS5hcHBlbmQoJzxzdHlsZT5ib2R5IC5ib2R5X2RlYnVnX2Jne2Rpc3BsYXk6IGJsb2NrO308L3N0eWxlPicpO1xyXG4gICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JlZCcpO1xyXG59IFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlc2xpY2soKXtcclxuICAgICQoJy5tb2JpbGVfY291cnVzZWwnKS5zbGljaygndW5zbGljaycpOyAvKiBPTkxZIHJlbW92ZSB0aGUgY2xhc3NlcyBhbmQgaGFuZGxlcnMgYWRkZWQgb24gaW5pdGlhbGl6ZSAqL1xyXG4gICAgLy8kKCcubXktbW9iaWxlX2NvdXJ1c2VsJykucmVtb3ZlKCk7IC8qIFJlbW92ZSBjdXJyZW50IHNsaWRlcyBlbGVtZW50cywgaW4gY2FzZSB0aGF0IHlvdSB3YW50IHRvIHNob3cgbmV3IHNsaWRlcy4gKi9cclxuICAgICQoJy5tb2JpbGVfY291cnVzZWwnKS5zbGljayhnZXRTbGlkZXJTZXR0aW5ncygpKTsgLyogSW5pdGlhbGl6ZSB0aGUgc2xpY2sgYWdhaW4gKi9cclxufVxyXG5nZXRTbGlkZXJTZXR0aW5ncygpO1xyXG5mdW5jdGlvbiBnZXRTbGlkZXJTZXR0aW5ncygpe1xyXG4kKCcubW9iaWxlX2NvdXJ1c2VsJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiB0cnVlLCBcclxuICBzbGlkZXNUb1Nob3c6IDMsIFxyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIGFycm93czogdHJ1ZSxcclxuICByZXNwb25zaXZlOiBbIFxyXG4gIHtcclxuICAgIGJyZWFrcG9pbnQ6IDY4MCxcclxuICAgIHNldHRpbmdzOiB7XHJcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICB9XHJcbiAgfVxyXG4gICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxyXG4gICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgICBdIFxyXG4gIH0pO1xyXG59XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG59KTsiXX0=
