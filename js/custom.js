$(document).ready(function () {
    /*====================== js for sticky and mobile menu ====================== */
    var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
    $(".main_page").css('min-height', min_height + 'px');
    $(window).resize(function () {
        var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
        $(".main_page").css('min-height', min_height + 'px');
    });

    $(window).scroll(function(){
        var navHeight = $('#custom-header').height();
        var sticky = $('#custom-header');
        if ($(window).scrollTop() > 0) {
            sticky.addClass("sticky")
            $('#dashboard-page').css('padding-top',navHeight+"px");
        } else {
            sticky.removeClass("sticky");
            $('#dashboard-page').css('padding-top',0);
        }
    });
    $('.jb_front_nav_close button').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    
    var $owl = $('#banner-slider');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index );
    });
    
    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 2,
      nav:true,
      dots:false,
      responsive:{
        0:{
            items:1,        
        },
        600:{
            items:1,         
        },
        1000:{
            items:2,           
        }
    }
    });
    
    $(document).on('click', '.owl-item>div', function() {  
      var $speed = 300;  // in ms
      $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
    });






    var $owl = $('#filter-slider');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index );
    });
    
    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 8,
      nav:true,
      margin:20,
      slideSpeed: 1500,
      responsive:{
        0:{
            items:4,        
        },
        600:{
            items:5,         
        },
        1000:{
            items:8,           
        }
    }
    });
    
    $(document).on('click', '.owl-item>div', function() {  
      var $speed = 300;  // in ms
      $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
    });    
    /*====================== js for scrollTop ====================== */
    
   // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        var _href = $(this).attr('href');
    // Make sure this.hash has a value before overriding default behavior
    if (_href !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        $('html, body').animate({
        scrollTop: $(_href).offset().top
        }, 800, function(){
        });
    } // End if
    });


    $(document).on('click','.filter-btn', function(){
        $('.filter').toggleClass('filter-in');
    });   


    
    AOS.init({
        duration: 1200,
        })
    
});/*====================== all js end ====================== */

