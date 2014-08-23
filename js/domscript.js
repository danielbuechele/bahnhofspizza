$(function(){

	//$(".fancybox").fancybox();
	//$("#menu").sticky({topSpacing:0});
	//$("a").smoothScroll();
	
	if (!Modernizr.svg) {
	   $("img[src$='.svg']").each (function () {
	       $(this).attr('src', $(this).attr('src').replace(/\.svg$/, '.png'));
	   });
	}
	
});