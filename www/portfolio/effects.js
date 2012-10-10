previousScheme = 'cover-scheme';
currentScheme = 'cover-scheme';

$(document).ready( function() {
	$('#ultiworld').load('ultiworld.html');
	$('#fondu').load('fondu.html');
	$('#brandhim').load('brandhim.html');
	$('#nyu').load('nyu.html');
	$('.header-bar').click(tabToggle);
	$('.header-bar a').click(function(e) {
		e.stopPropagation();
	});
	$('.nav-bar a').click(tabToggle);
	$('.ultiworld-blurbs a').click(function(e) {
		$('#ultiworldCarousel .active').removeClass('active');
		console.log($(this).attr('href'));
		$().addClass('active');
	});
});

function tabToggle (e) {
	var tabTarget = $(this).attr('href');
	var schemeTarget = tabTarget.replace('#','') + '-scheme';
	var $tabToToggleOn = $(tabTarget);
	var $tabToToggleOff = $('.tab-pane.active');
	if ($tabToToggleOn.is($tabToToggleOff)) {
		return false;
	};
	var $toggleToTurnOff = $('.toggle.active');
	var $toggleToTurnOn = $(tabTarget+'-toggle');
	var $divToBorder = $('.tab-content');
	$divToBorder.removeClass(currentScheme);
	$divToBorder.addClass(schemeTarget);
	previousScheme = schemeTarget;
	currentScheme = schemeTarget;
	$tabToToggleOff.fadeOut(400, function () {
		$toggleToTurnOff.removeClass('active');
		$tabToToggleOff.removeClass('active');
		$toggleToTurnOn.addClass('active');
		$tabToToggleOn.addClass('active');
		$tabToToggleOn.fadeIn(400);
	});
}

function ultiworldSwitch(href) {
	$active = $('#ultiworldCarousel .active');
	if($active.attr('id') == href) {
		return false;
	} else {
		$('#ultiworldCarousel .active').removeClass('active');
		$(href+'').addClass('active');
	}
}