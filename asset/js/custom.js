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


    
});