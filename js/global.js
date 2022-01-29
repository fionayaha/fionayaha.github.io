$(function(){
    var bodyClass = $('.header'),
        lastScrollY = 0;
    window.addEventListener('scroll', function(){
    var st = this.scrollY;
    if(st < 0) {
        return;
    }
    if( st <= lastScrollY) {
        bodyClass.removeClass('header_hideUp');
    }else{
        bodyClass.addClass('header_hideUp');
    }
    lastScrollY = st;
    });

});