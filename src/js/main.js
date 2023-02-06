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
	})

});
