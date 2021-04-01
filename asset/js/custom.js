$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');


    $('.step2_page_select').on('click',function(){
        $('.step2_page_select').removeClass('active');
        $(this).toggleClass('active');
    })

    var j = jQuery; 
    var addInput = '#qty';
    var n = 5;
    j(addInput).html(n);
    j('#plus_btn').on('click', function(){
      j(addInput).html(++n);
    })
    j('#minus_btn').on('click', function(){
      if (n >= 1) {
        j(addInput).html(--n);
      } else {
      }
    });

    var addInput2 = '#qty2';
    var n = 7;
    j(addInput2).html(n);
    j('.plus_btn2').on('click', function(){
      j(addInput2).html(++n);
    })
    j('.minus_btn2').on('click', function(){
      if (n >= 1) {
        j(addInput2).html(--n);
      } else {
      }
    });
  $('select').niceSelect();

  $('.dashboard_card_slider_active').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    stagePadding: 80,
    smartSpeed: 1000,
    navText: ['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
    responsive:{
       0:{
          items:1,
          stagePadding: 40,
          nav: false,
          margin:10,
       },
       576:{
          items:1,
          stagePadding: 120,
       },
       768:{
          items:2
       },
       992:{
          items:2,
          margin:30,
       },
       1200:{
          items:3
       },
       1400:{
          items:4,
       }
    }
 })


    
});