
  (function ($) {
  
  "use strict";
  const TABLET_WIDTH = 768;

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
      const scrollTop = 10;
      
      $(window).scroll(function() {
        const currentScrollTop = $(this).scrollTop();

        const isMobile = window.innerWidth <= TABLET_WIDTH; // Check if the screen is mobile-sized
        
        if (!isMobile) {
            // Check if scrolling down
            if (currentScrollTop > scrollTop) {
                $('#brand-image').css({ width: '60px', height: '60px' });
            } else {
                $('#brand-image').css({ width: '148px', height: '148px' });
            }
        } else {
            // On mobile, ensure the image stays small
            $('#brand-image').css({ width: '60px', height: '60px' });
        }
        
        // Update scrollTop for the next scroll event
        scrollTop = currentScrollTop;
    });
  });

  })(window.jQuery);


