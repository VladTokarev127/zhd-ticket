$(function() {

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
	});

	$('[data-copy]').click(function(e) {
		e.preventDefault();
		$(this).addClass('is-active');
		setTimeout(() => {
			$(this).removeClass('is-active');
		}, 1000);
		let copyText = $(this).data('copy');
		navigator.clipboard.writeText(copyText);
	});

});
