// catalog-btn
$('#catalog-btn').click(function(){
    $(this).toggleClass("active");
    $('.catalog-popup').toggleClass("active");
    $('.shadow-block').toggleClass("active");
});

$('.shadow-block').click(function(){
    $('#catalog-btn').toggleClass("active");
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

//sort-btn
$(".catalog__btn").click(function(){
    $($(this).data("target")).toggleClass("active");
});

//check-sort
$(".catalog__sort-check").click(function(){
    $('.catalog__sort-check').removeClass('active');
    $(this).addClass("active");
});

//fixed header
$(function() {
    var header = $(".header");
    var headerFantom = $(".header__fantom");
    var catalogPopup = $(".catalog-popup");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
  
        if (scroll >= 300) {
            header.addClass("fixed");
            headerFantom.addClass("active");
            catalogPopup.addClass("fix-head");
        } else {
            header.removeClass("fixed");
            headerFantom.removeClass("active");
            catalogPopup.removeClass("fix-head");
        }
    });
});

//fixed-basket
$(".fixed-basket__icon").click(function(){
    $(this).toggleClass("active");
    $('.fixed-basket__body').toggleClass("active");
    $('.shadow-block').toggleClass("active2");
    $('body').toggleClass("hidden");
});