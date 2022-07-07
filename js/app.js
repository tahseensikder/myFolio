//preloader
$(window).on('load',function(){
    $('.preloader').fadeOut(1000)
})
$(function(){
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 300){
         $('#backToTop').fadeIn(1000);
        }
        else {
         $('#backToTop').fadeOut(1000);
        }
    })
    $('#backToTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0,
        },1000)
    })
    $('a').on('click',function(){
        if (this.hash !== ''){
            var hash = this.hash
            $('html,body').animate({
             scrollTop:$(hash).offset().top,
         },1000)
        }
    })
    //Fixed Nav Bar
   $(window).on('scroll',function(){
    if ($(window).scrollTop()>$('#nav_bar').height()){
        $('#nav_bar').addClass('menu_animate')
    }
    else {
        $('#nav_bar').removeClass('menu_animate')
    }
   })
   //Slider
   $('.banner_slider').slick({
    prevArrow:'<i class="slider_icon fas fa-angle-left"></i>',
    nextArrow:'<i class="slider_icon fas fa-angle-right"></i>',
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: true,
    dotsClass: 'banner_slider_dots'
    })
    //AOS Slider
    AOS.init();
    //Venobox 
new VenoBox({
        selector: ".popupLink",
        spinner: "grid",
});
})