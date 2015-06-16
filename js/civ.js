var main = function() {
	$('.banner').click(function(){
			$(this).next().slideToggle("fast");
	});
	$('.search input').keyup(function(){
		var $search = $(this).val().toLowerCase();
		console.log("search for: "+$search);
		$('.desc').hide();
		$('.banner .civname').each(function(){
			$(this).parent().show();
			if ($search==='') {
				$(this).parent().show();
			}else if($(this).text().toLowerCase().search($search) >= 0||$(this).next().next().text().toLowerCase().search($search) >= 0) {
			} else {
				$(this).parent().hide();
			}
		});
	});
	$('.random button').click(function(){
		var $numCivs = $('.banner').length;
		var random = Math.floor(Math.random()*($numCivs));
		$('.desc').hide();
		$('.banner').hide();
		console.log(random+": random civ is "+ $('.banner .civname').eq(random).text());
		$('.banner').eq(random).show();
		
	});
};

$(document).ready(main);

var civApp = angular.module("civApp",[]);

//Notes: add a checkbox system or something that sorts leaders by their traits (unique building, tile improvement, or unit, etc) and the eras those traits become available. add notes and content for favored victory conditions and some sort functions for those and other features