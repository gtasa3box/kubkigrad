
$('.btn_catalog').click(function(){
    $('.btn_catalog').toggleClass("active");
    $('.catalog-popup').toggleClass("active");
    $('.shadow-block').toggleClass("active");
});


// catalog-drop-elems
$(".catalog-popup__nav-elem").hover(function(){
    $('.catalog-popup__nav-elem').removeClass('active');
    $(this).addClass("active");
    $('.catalog-popup__nav-child-block').removeClass('active');
    $($(this).data("target")).addClass("active");
});

