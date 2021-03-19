var $nav = $('#header');
var $win = $(window);
var winH = $win.height(); // узнаем высоту окна.



jQuery(function($) {



$win.on("scroll", function () {
    if ($(this).scrollTop() > winH ) {
        $nav.addClass("menu-sticky");
    }
}).on("resize", function(){ // если меняется размер браузера
   winH = $(this).height(); // задаем новое значение
});

});

jQuery(function($) {

$win.on("scroll", function () {
    if ($(this).scrollTop() < 1 ) { //высота 1px до верха окна
        $nav.removeClass("menu-sticky");
    }
});


});









$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});