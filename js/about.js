$(function(){

    // append sections
    var html = '';
    var times = 1;
    var i = 0;
    for(var k = 1;k <= times; k++) {
        $('.section_about').each(function(index) {
            var item = $(this);
            item.attr('class', 'section_about');
            html = html + item.get(0).outerHTML;
        })
    }
    $('.container_about').html(html);
    var f = 0;
    var sectionHeight = 500;
    var top = $('.fixed')[0].getBoundingClientRect().top - 47 + 200;
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop() + top;
        var newF = Math.floor(scrollTop/sectionHeight);
        if (newF !== f) {
            f = newF;
            $('.fixed').attr('class', 'fixed f' + newF);
        }
    });
});