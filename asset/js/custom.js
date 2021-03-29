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
  
  //Set default value to n (n = 1)
  j(addInput).val(n);

  //On click add 1 to n
  j('#plus_btn').on('click', function(){
    j(addInput).val(++n);
  })

  j('#minus_btn').on('click', function(){
    //If n is bigger or equal to 1 subtract 1 from n
    if (n >= 1) {
      j(addInput).val(--n);
    } else {
      //Otherwise do nothing
    }
  });


    
});