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
			$('.header-right').stop().animate({top:'0'});
		},
		function() {
			$('.header-right').stop().animate({top:'-72px'});
		}
	);

	$('.footer .btn').click(pageTurn);
	$('.footer .progtog').click(pageTurn);
	$('.header-right a').addClass('tk-futura-pt');
	$('.page').addClass('tk-museo-slab');
});

function pageTurn(e) {
	if($(this).hasClass('disabled')) {
		return false;
	}

	var currentPageNum = parseInt($('.page.active').attr('id').substring(4));
	var newPageNum = parseInt($(this).attr('href').substring(5));
	console.log('curr '+currentPageNum);
	console.log('new '+newPageNum);

	$('#page'+currentPageNum).removeClass('active').fadeOut();
	$('#page'+newPageNum).addClass('active').fadeIn();

	$('.page'+currentPageNum+'-progtog').removeClass('active');
	$('.page'+newPageNum+'-progtog').addClass('active');
	if(!$('.page'+newPageNum+'-progtog').hasClass('filled')) {
		$('.page'+newPageNum+'-progtog').addClass('filled')
	}
	
	var $prevBtn = $('.prev.btn');
	var $nextBtn = $('.next.btn');

	$prevBtn.attr('href','#page'+(newPageNum-1));
	$nextBtn.attr('href','#page'+(newPageNum+1));

	if(newPageNum == 0) {
		if(!$prevBtn.hasClass('disabled')) {
			$prevBtn.addClass('disabled')
		}
		if($nextBtn.hasClass('disabled')) {
			$nextBtn.removeClass('disabled')
		}
		$nextBtn.css({visibility:'visible'});
	} else if(newPageNum == 6) {
		if($prevBtn.hasClass('disabled')) {
			$prevBtn.removeClass('disabled')
		}
		if(!$nextBtn.hasClass('disabled')) {
			$nextBtn.addClass('disabled')
		}
	} else {
		if($prevBtn.hasClass('disabled')) {
			$prevBtn.removeClass('disabled')
		}
		if($nextBtn.hasClass('disabled')) {
			$nextBtn.removeClass('disabled')
		}
	}
	
}