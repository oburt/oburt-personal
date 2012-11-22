$headerHintToBeVisible = 3;

$(document).ready( function() {
	$('#page0').load('page0.html');
	$('#page1').load('page1.html');
	$('#page2').load('page2.html');
	$('#page3').load('page3.html');
	$('#page4').load('page4.html');
	$('#page5').load('page5.html');
	$('#page6').load('page6.html');
	$('#page0').addClass('active').fadeIn();

	$('.header').hover(
		function() {
			$('.header-right').stop().animate({top:'0'}, function() {
				if($headerHintToBeVisible == 3) {
					$headerHintToBeVisible = 2;
				}
			});
		},
		function() {
			$('.header-right').stop().animate({top:'-68px'}, function() {
				if($headerHintToBeVisible == 2) {
					$('.header-hint').fadeOut();
					$headerHintToBeVisible == 1;
				}
			});
		}
	);

	$('.footer .btn').click(pageTurn);
	$('.footer .progtog').click(pageTurn);
	$('.header-right a').addClass('tk-futura-pt');
	$('.page').addClass('tk-museo-slab');
	$headerHint = $('.header-hint');

	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-36289813-1']);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
});

function pageTurn() {
	if($(this).hasClass('disabled')) {
		return false;
	}

	var currentPageNum = parseInt($('.page.active').attr('id').substring(4));
	var newPageNum = parseInt($(this).attr('href').substring(5));
	if(currentPageNum == newPageNum) {
		return false;
	}

	var $currentPage = $('#page'+currentPageNum);
	var $newPage = $('#page'+newPageNum);
	var $currentPageProgtog = $('.page'+currentPageNum+'-progtog');
	var $newPageProgtog = $('.page'+newPageNum+'-progtog');
	var $prevBtn = $('.prev.btn');
	var $nextBtn = $('.next.btn');

	$currentPage.removeClass('active').fadeOut(function(){
		$newPage.addClass('active').fadeIn();
	});

	$currentPageProgtog.removeClass('active');
	$newPageProgtog.addClass('active');
	if(!$newPageProgtog.hasClass('filled')) {
		$newPageProgtog.addClass('filled')
	}

	$prevBtn.attr('href','#page'+(newPageNum-1));
	$nextBtn.attr('href','#page'+(newPageNum+1));

	if(newPageNum == 0) {
		if(!$prevBtn.hasClass('disabled')) 
			$prevBtn.addClass('disabled').text('First Page');
		if($nextBtn.hasClass('disabled'))
			$nextBtn.removeClass('disabled').text('Next Page');
	} else if(newPageNum == 6) {
		if($prevBtn.hasClass('disabled'))
			$prevBtn.removeClass('disabled').text('Prev Page');
		if(!$nextBtn.hasClass('disabled'))
			$nextBtn.addClass('disabled').text('Last Page');
	} else {
		if($prevBtn.hasClass('disabled'))
			$prevBtn.removeClass('disabled').text('Prev Page');
		if($nextBtn.hasClass('disabled'))
			$nextBtn.removeClass('disabled').text('Next Page');
	}
	
}

function sendMailTo() {
	window.open('mailto:orionjburt@gmail.com?body='+encodeURI($('#oburt-email-body').val()));
}