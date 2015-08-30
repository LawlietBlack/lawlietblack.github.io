$(document).ready(function(){
	$('.app').hide();
	$('#app-select').change(function(){
		$('.app').hide();
		if ($('#app-select').val() === "Dice Rolling") {
			$('dice.app').show();
		} else if($('#app-select').val() === "To Do List") {
			$('todo.app').show();
		} else if($('#app-select').val() === "Drawing App") {
			$('drawing.app').show();
		} else if($('#app-select').val() === "Flickr Search") {
			$('flickr.app').show();
		};
	});
});