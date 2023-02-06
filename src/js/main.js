$(function() {

	$('[data-open-prices]').click(function(e) {
		e.preventDefault();
		$(this).find('span').toggle();
		$('.railway__table-price-btn').trigger('click');
	})

	$('.railway__table-price-btn').click(function(e) {
		e.preventDefault();
		let ths = $(this);
		ths.toggleClass('is-active');
		ths.prev().slideToggle(300);
		if(ths.is('.is-active')) {
			ths.find('.railway__table-price-text_show').hide();
			ths.find('.railway__table-price-text_hide').show();
		} else {
			ths.find('.railway__table-price-text_show').show();
			ths.find('.railway__table-price-text_hide').hide();
		}
	});

	$('[data-show-map]').click(function(e) {
		e.preventDefault();
		$('[data-map]').slideToggle(300);
		$(this).find('span').toggle();
	});

	$('[data-copy]').click(function(e) {
		e.preventDefault();
		$(this).addClass('is-active');
		$(this).find('span:last-child').show();
		$(this).find('span:first-child').hide();
		setTimeout(() => {
			$(this).find('span:last-child').hide();
			$(this).find('span:first-child').show();
			$(this).removeClass('is-active');
		}, 2500);
		let copyText = $(this).data('copy');
		let $temp = $('<input>');
		$('body').append($temp);
		$temp.val(copyText).select();
		document.execCommand('copy');
		$temp.remove();
	});

});
