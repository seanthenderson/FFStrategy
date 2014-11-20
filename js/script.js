$(document).ready(function() {
	$animateSpeed = 700;
	$('.fa-times').click(function() {
		$('.card').animate({
			'height': '50vh',
			'width': '50%',
			'z-index': 3
		}, $animateSpeed, 'easeInOutQuart');
		$('.section-title').animate({'margin-top': '11%'});
		$('.section-title i').delay(300).fadeIn(700);
		$(this).fadeOut(400);
		$('.player-card').animate({
			'opacity': 0, 
			'height': 0,
			'width': 0
		}, 300);
		$('.player-card-or').animate({'opacity': 0}, 300);
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
		$(this).find('i').fadeOut(500);
		$('.fa-times').fadeIn(700);
	});
	$('#card-one').click(function() {
		$(this).css({
			'top': 0,
			'left': 0
		});
		$('.player-card').delay(500).animate({
			'opacity': 1,
			'height': '300px',
			'width': '300px'
		}, 800);
		$('.player-card-or').delay(1000).animate({'opacity': 1}, 500);
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