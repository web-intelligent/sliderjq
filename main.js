$(document).ready(function () {
    var nowSlide = 0;
    var defaultColor = "cccccc";
    $('.slide').each(function (index, element) {
        $('.slide').eq(index + nowSlide + 1).css("transform", "translate(100%)");
    });

    $('.next').click(function (e) { 
        e.preventDefault();
        $('.slider').css("background", "#" + nowSlide*2 + nowSlide*3 + nowSlide*2 );
        if (nowSlide == $('.slides').children().length - 1) {
            
            $('.slides').children().css("transform", "translate(100%)");
            $('.slide:first-child').css("transform", "translate(0)");
            nowSlide = 0;
        } else {
            $('.slide').eq(nowSlide + 1).css("transform", "translate(0)");
            $('.slide').eq(nowSlide).css("transform", "translate(100%)");
            nowSlide++;
            console.log(nowSlide);
        }
        console.log(nowSlide);

        

    });

    $('.prev').click(function (e) { 
        e.preventDefault();
        $('.slider').css("background", "#" + nowSlide * 0 + nowSlide * 1 + nowSlide * 2);
        if(nowSlide == 0) {
            $('.slide:last-child').css("transform", "translate(0)");
            $('.slide:first-child').css("transform", "translate(100%)");
            nowSlide = $('.slides').children().length - 1;
        } else {
            $('.slide').eq(nowSlide).css("transform", "translate(100%)");
            $('.slide').eq(nowSlide - 1).css("transform", "translate(0)");
            nowSlide--;
            console.log(nowSlide);
        }
        if (nowSlide == 0) {
            $('.slide').each(function (index, element) {
                $('.slide').eq(index + nowSlide + 1).css("transform", "translate(100%)");
            });
        }
    });
});