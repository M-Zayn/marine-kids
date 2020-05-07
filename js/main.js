
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  new WOW().init();
  
  
$(function() {


  
  
  // $('a[data-scroll]').on("click",function (e){
  //   e.preventDefault();    
    
  //   $("html, body").animate({
  //     scrollTop: $($(this).attr("data-scroll")).offset().top
  //   }, 1000);
  // });


  $(".new-arrival .selector .select li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });


  $('.selector .select a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $(".new-arrival .selector .select li a").on("shown.bs.tab", function(e) {
    let $owl = $(".new-arrival .tab-content .owl-carousel");
    $owl.trigger("refresh.owl.carousel");
  });


    
  
    
    $('.header .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:1,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      },
      navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    });


    $('.cats .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:30,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      },
      navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    });


    $('.new-arrival .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:30,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      },
      navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    });

    // if ($(window).width() < 992) {
    //   $(".category .cat:nth-of-type(1), .category .cat:nth-of-type(2), .category .cat:nth-of-type(3), .category .cat:nth-of-type(4), .category .cat:nth-of-type(5), .category .cat:nth-of-type(6)").wrapAll("<div class='owl-carousel'></div>");
    //   $('.category .owl-carousel').owlCarousel({
    //     rtl: document.dir == 'rtl' ? true : false,
    //     autoplay:true,
    //     loop:true,
    //     margin:0,
    //     dots:true,
    //     nav:true,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:6
    //         }
    //     },
    //     navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    //   });
    // } else {

    // }
    
    


    
    
  

  // menu - search




    $(".nav-bar .icons .search-icon").on("click", function () {
      $(".search-container").fadeIn();
      $('html, body').css("overflow-y", "hidden");
    });
    $(".search-container, .search-container .close").on("click", function () {
      $(".search-container").fadeOut();
      $('html, body').css("overflow-y", "visible");

    });
    $(".search").on("click", function(e) {
      e.stopPropagation();
    });



    




    $(".nav-bar .icons .menu-icon").on("click", function () {
      $(".fixed-menu").fadeIn();
      $(".fixed-menu .menu").addClass("show");
      $(".fixed-menu .main-list").addClass("show");
      $('html, body').css("overflow-y", "hidden");
    });
    $(".fixed-menu, .fixed-menu .menu-header .close").on("click", function () {
      $(".fixed-menu").fadeOut();
      $(".fixed-menu .menu").removeClass("show");
      $(".fixed-menu .main-list").removeClass("show");
      $('html, body').css("overflow-y", "visible");
    });
    $(".fixed-menu .menu").on("click", function(e) {
      e.stopPropagation();
    });



    $(".fixed-menu .main-list .slide").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
      });
    $(".fixed-menu .sub-list .slide-two").on("click", function(e) {
      e.stopPropagation();
    });
    $(".fixed-menu .sub-list .slide-two").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
    });


     if ($(window).width() < 992) {
       $(".footer .list-header").on("click", function() {
         $(this).toggleClass("active");
         $(this).siblings("ul").slideToggle();
       });
     
      } else {
        
      }

    

  
});