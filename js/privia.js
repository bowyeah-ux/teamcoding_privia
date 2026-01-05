$(function () {
    $('.hamburgerbutton').click(function () {
        $('.searchpopup').hide()
        $('.hamburger').toggle()
    })

    $('.searchpopupbutton').click(function () {
        $('.hamburger').hide()
        $('.searchpopup').toggle()
    })
    $('.tabmenu li').click(function () {
        $('.tabmenu li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        $('.tabcontent > li').hide()
        $('.tabcontent > li').eq(idx).show()
    })
    $('.tabmenu li:first').trigger('click')
    $('.btn2 label').click(function () {
        $('.theme-section').css({
            background: 'url(../images/theme-section-osaka-bgimage.png) url(../images/theme-section-guam-bg.png'
        })

    })

    $(window).scroll(function () {
        let pageof = $('.hsearchbox').offset().top
        if ($(window).scrollTop() >= pageof) {

            $('.prheader').addClass('down')
        } else {

            $('.prheader').removeClass('down')
        }
    })

    $('.htapmenu >* ').click(function () {
        $('.htapmenu >*').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        $('.tab-content > *').hide()
        $('.tab-content > *').eq(idx).show()
    })

    $('.tmenu > div').click(function () {
        $('.tmenu > div').removeClass('on')
        $(this).addClass('on');
        
        let idx = $(this).index()
        $('.tcontent > *').hide()
        $('.tcontent > *').eq(idx).show()

    });


 
    let bg = ['../images/theme-section-osaka-bgimage.png', '../images/theme-section-guam-bg.png', '../images/theme-section-singapore-bg.png', '../images/theme-section-hanoi-bg.png', '../images/theme-section-mongol-bg.png']

 $('.theme-section .th-inner .th-btn li').click(function(){
    let idx = $(this).index()

    $('.theme-section').css({
        'background': `url(${bg[idx]}) no-repeat center/cover`
    })
 })

 $(window).scroll(function () {
        
        if ($(window).scrollTop() >= 300) {
        
            $('.fixedwrap').fadeIn()
        }else {
        
            $('.fixedwrap').fadeOut()
        }

    })

    
    $('.fixedwrap').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop : 0
        },700)
    })

 

})

