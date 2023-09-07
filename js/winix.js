$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        let st = $('.header').hasClass('on');
        console.log(st);
        if (sct > 0 || !st) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });


    $('.gnb ul>li:last-child').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on');
        $('.menu_all').addClass('on');
    });

    $('.menu_all .btn_m').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on')
        $('.menu_all').toggleClass('on')
    });


    $('.main_slide').slick({
        autoplay: true,
        autopalySpeed: 5000,
        speed: 200,
        pauseOnHover: false,
        fade: true,
        arrows: false,
        dots: true,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });


    $('.event_slide').slick({
        autoplay: true,
        autopalySpeed: 5000,
        speed: 200,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });


    $('.main_event .arrows .left').on('click', function () {
        $('.event_slide').slick('slickPrev')
    })
    $('.main_event .arrows .right').on('click', function () {
        $('.event_slide').slick('slickNext')
    });



    $('.tab_left').slick({
        autoplay: true,
        autopalySpeed: 5000,
        speed: 200,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });




    $('.tab_right li').on('mouseenter', function (event) {
        event.preventDefault();
        let idx = ($(this).index()) //0,1,2

        $('.tab_left').slick('slickGoTo', idx)

    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 2000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    })

    $('.mopen').on('click', function () {
        let st = $('.header').hasClass('on');
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on');
        $('.header').toggleClass('ox');
    });

})
