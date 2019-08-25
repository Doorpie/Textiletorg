$(document).ready(function(){

    $('.main__slider').slick({
        prevArrow: '<div class="slider__prev"></div>',
        nextArrow: '<div class="slider__next"></div>',
        dots: true,
        dotsClass: 'slider-dots',
        mobileFirst: true
    });

    $('.leaders__slider').slick({
        prevArrow: '<div class="leaders-slider__prev"></div>',
        nextArrow: '<div class="leaders-slider__next"></div>',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
    });

    $('.news__slider').slick({
        prevArrow: '<div class="news-slider__prev"></div>',
        nextArrow: '<div class="news-slider__next"></div>',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
    });

    $('.discounts__slider').slick({
        prevArrow: '<div class="discounts-slider__prev"></div>',
        nextArrow: '<div class="discounts-slider__next"></div>',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
    });

    $('.city__select, .city__name').on('mousemove', function(){
        if (!$('.city__list').hasClass('city__list--show')){
            $('.city__list').addClass('city__list--show');
        } 
    });

  

    $(document).on('click', function(){
        if ($('.city__list').hasClass('city__list--show')){
            $('.city__list').removeClass('city__list--show');
        }
    });

    function btnMenu(selector){
        const menu = $(selector),
            btnClose = $('.aside-menu__close'),
            overlay = $('.aside-menu__overlay'),
            link = $('.aside-menu__link');

        menu.on('click', (e)=> {
            e.preventDefault();
            toggleMenu();
        });

       btnClose.on('click', (e)=> {
            e.preventDefault();
            toggleMenu();
        });

        link.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());

        function toggleMenu(){
            $('.aside-menu__overlay').toggleClass('aside-menu__overlay--active');
            $('.aside-menu__nav').toggleClass('aside-menu__nav--active');
        }
    }

    btnMenu('.menu__lines');
});