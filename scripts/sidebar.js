(function($){
	
/* Clic sur l'icône rajoute une classe au body */
	$('#header__icon').click(function(e){
		e.preventDefault();
		$('body').toggleClass('with--sidebar');
	});
	
})(jQuery);