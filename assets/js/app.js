/*=========================================================================================
Project:      AM_RESUME
Version:      1.0
author:       Asma_muz
Sort:         Portfolio - Resume
==========================================================================*/

$(document).ready(function(){
    
    /*====== Colors Panel button =====*/
    $('.colors-panel-toggler').on('click', function(){
        $('.colors-panel').toggleClass('colors-panel-open');
    });
    
    //dark and light navigation 
     $('.colors-panel #nav li a').on('click', function(e)  {
         $(this).addClass('active').siblings().removeClass('active');
        var Lival = $(this).attr('href'); 
        $(Lival ).show().siblings().hide();
        e.preventDefault();
    });
    //colors themes panel
    var colorsLink = $('.colors-panel ul li');
    colorsLink.on('click', function(){
        var path = $(this).attr('data-value');
        
        $(this).addClass('active').siblings().removeClass('active')

        $('link[href*="themes"]').attr('href',path);
    });
    /*=================================================================================*/
    

    /*========= Left Side=======*/

    //left side show and hide on mobile and tablet
    $('.left-side-toggler').on('click', function(){
        $('.left-side').addClass('left-side-open');
    });
    $('.left-side-closer').on('click', function(){
        $('.left-side').removeClass('left-side-open');
    });
    /*====================================================================================*/


    /*======== Right Side ========*/

    //navbar active links
    $('.navbar-nav .nav-item').on('click', function(){
        $(this).find('a').addClass('active');
        $(this).siblings().find('a').removeClass('active');
    });

    //navbar toggle 
    $('.navbar-toggler').on('click', function(){
        $('.navbar-nav').addClass('navbar-nav-open');
        $('.navbar').css({'backgroundColor':'rgba(5,5,5,.9)', 'zIndex':'1003'})
        $('body').append('<div class="appended-div" style="position: fixed; top: 0; left: 0; bottom: 0; z-index: 1002; background-color: rgba(0,0,0,.8); height: 100%; width: 100%;"></div>')
    });
    $('.navbar-closer, .navbar-nav li').on('click', function(){
        $('.navbar-nav').removeClass('navbar-nav-open');
        $('.navbar').css({'backgroundColor':'', 'zIndex':'1000'})
        $('.appended-div').remove();
    });
    
    //toggle sections
     $('.toggle-container ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find('.toggle-body').slideToggle();
        $(this).siblings().find('.toggle-body').slideUp()
     });

    //navigation sections
    $('.navbar-nav li .nav-link').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        // Show/Hide Tabs
        $(currentAttrValue).fadeIn().siblings().fadeOut();
        e.preventDefault();
    });

    //About
    //progress bar
        $('.progress .progress-bar').css("width",
        function() {
                return $(this).attr("aria-valuenow") + "%";
            }
        )
    
    //Portfolio
    //init Isotope
		// filter items on button click
		$('#filters').on( 'click', 'a.filter', function(e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$('.portfolio-items').isotope({ filter: filterValue });
			
			// Set selected class to the active filter.
			var $this = $(this);
			if ( $this.parent().hasClass('active') ) {
			  return false;
			}
			var $optionSet = $this.parents('#filters');
			$optionSet.find('.active').removeClass('active');
			$this.parent().addClass('active');
		  
		});

    //popup init
    $('.caption .zoom').magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
            enabled: !0
        }
      });
      
    /*====================================================================================*/
     //Scroll to top button
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 10){
            $('.scroll-top').fadeIn();
        }
        else{
            $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').on('click', function(){
        $('body, html').animate({
            scrollTop : 0
        },800);
    });

    /*========================================================================================*/
     
    //wow init
    wow = new WOW(
        {
        boxClass:     'wow',      
        animateClass: 'animated',
        animationDuration: 3, 
        offset:       5,          
        mobile:       true,       
        live:         true        
      }
      )
      wow.init(); 
         

    //body easy scroll
    $('html, .left-side').niceScroll();
    

     // Animate loader off screen
    
    $('.loading').fadeOut('slow');
    
    
    
});