$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if(scroll >= 100) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});


setTimeout(function() {
    $('body').addClass('loader-active');
}, 200);
  
setTimeout(function() {
    $('body').removeClass('loader-active');
    $('body').addClass('loader-disable');
}, 1700);