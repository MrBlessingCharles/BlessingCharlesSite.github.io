 $(document).ready(function(){
    //hero SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:10,
        items :1,
        nav: false,
        smartSpeed : 1500,
        nav:true,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:false,
        navText : ['PREC','SUIV'],
        dots : false,
        responsive:{
            0:{
              nav : false
            },
            768:{
                nav : true  
            }
        }
    })

    //projet-slider
    $('#projet-slider').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        smartSpeed : 2000,
        nav:true,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:false,
        dots : false,
        navText :['PREC','SUIV'],
        margin:24,
        responsive:{
            0:{
               items:1,
               margin:0,
               nav: false
            },
            768:{  
               items:2
            },
            1000:{
               items:2,
               center: true,
               dots : true
            }
        }
    })

    //reviews-slider
    $('#reviews-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
    })
 })