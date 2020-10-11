$(document).ready(function () {
    var nowSlide = 0;
    $('.slide').each(function (index, element) {
        $('.slide').eq(index + nowSlide + 1).css("transform", "translate(100%)");
    });

    $('.next').click(function (e) { 
        e.preventDefault();
        $('.slide').eq(nowSlide + 1).css("transform", "translate(0)");
        $('.slide').eq(nowSlide).css("transform", "translate(-100%)");
        nowSlide++;
        console.log(nowSlide);

        if(nowSlide == $('.slides').children().length) {
            
            $('.slides').children().css("transform", "translate(100%)");
            $('.slide:first-child').css("transform", "translate(0)");

            nowSlide = 0;
        }

    });

    $('.prev').click(function (e) { 
        e.preventDefault();
        if(nowSlide == 0) {
            $('.slide:last-child').css("transform", "translate(0)");
            $('.slide:first-child').css("transform", "translate(-100%)");
            nowSlide = $('.slides').children().length;
        } else {
            
        }

        // $('.slide').eq(nowSlide).css("transform", "translate(0)");
        // $('.slide').eq(nowSlide - 1).css("transform", "translate(100%)");
        // nowSlide--;
        
        console.log(nowSlide);

        

    });
});