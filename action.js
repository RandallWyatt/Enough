$(function(){
	$('.error').hide();
	$('.button').on('click',function(){
		$('.error').hide();
		$('.error span').html("");
		if ($(this).val()=="add water") {
			water_height = $('.water_level').height();
			if (water_height>430) {
				$('.error').show();
				$('.error span').html('sorry you have reached the maximum, one gallon you cannot add more');
			}else{
				$('.water_level').animate({
					height: water_height+56
				},400)
			}	
		}else{
			water_height = $('.water_level').height();
			if (water_height<=0) {
				$('.error').show();
				$('.error span').html('sorry you have reached the least level, one gallon you cannot subtract more');
			}else{
				$('.water_level').animate({
					height: water_height-56
				},400)
			}
		}
	});
});