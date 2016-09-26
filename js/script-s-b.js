$(document).ready(function(){
			$(".social-buttons a").hover(function() {
				$(this).next("em").animate({opacity: "show", top: "-75"}, "slow");
			}, function() {
				$(this).next("em").animate({opacity: "hide", top: "-105"}, "fast");
			});
		});