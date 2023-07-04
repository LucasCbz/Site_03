$(function(){
    $('nav a').click(function(){
        var href = $(this).attr(href);   
        var offSetTop = $(href).offSetTop().top;

        $('body,html').animate({'scrolltop':offSetTop});

        // return false;
    })
})