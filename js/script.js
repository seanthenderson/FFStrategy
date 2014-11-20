$(document).ready(function() {
	$animateSpeed = 700;
	$('.fa-home').click(function() {
		$('.card').animate({
			'height': '50vh',
			'width': '50%',
			'z-index': 3
		}, $animateSpeed, 'easeInOutQuart');
		$('.section-title').animate({'margin-top': '15%'});
	});
	$('.card').click(function() {
		$(this).animate({
			'height': '100vh',
			'width': '100%'
		}, $animateSpeed, 'easeInOutQuart');
		$(this).css({
			'z-index': 4
		});
		$(this).find('.section-title').animate({'margin-top': '3%'});
	});
	$('#card-one').click(function() {
		$(this).css({
			'top': 0,
			'left': 0
		});
	});
	$('#card-two').click(function() {
		$(this).css({
			'top': 0,
			'right': 0
		});
	});	
	$('#card-three').click(function() {
		$(this).css({
			'bottom': 0,
			'left': 0
		});
	});
	$('#card-four').click(function() {
		$(this).css({
			'bottom': 0,
			'right': 0
		});
	});
});