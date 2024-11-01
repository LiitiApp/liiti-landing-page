
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
    
    $(document).ready(function() {
      let lastScrollTop = 0;
      
      $(window).scroll(function() {
          let currentScrollTop = $(this).scrollTop();
          
          // Check if scrolling down
          if (currentScrollTop > lastScrollTop) {
              $('#brand-image').removeClass('navbar-brand-image-big');
          } else {
              $('#brand-image').addClass('navbar-brand-image-big');
          }          
      });
  });

  })(window.jQuery);


