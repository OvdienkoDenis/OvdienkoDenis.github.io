$(document).ready(function(){
	$(".menu-link").click(function(){
		$(".dropdown-menu").slideToggle('slow');
		$(this).toggleClass('open');    
		/*return false;*/
	});
/*	$("body").click(function(){
		$(".dropdown-menu").slideUp("slow");
		$(".menu-link").removeClass("open");
		return false;
	});
*/});