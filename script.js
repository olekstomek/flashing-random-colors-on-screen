$(document).ready(function(){
	var redStart = 0;
	var redEnd = 255;
	var greenStart = 0;
	var greenEnd = 255;
	var blueStart = 0;
	var blueEnd = 255;
		
  $(document).mousemove(function(event){
    rgb = [
        Math.round(Math.random() * (redEnd - redStart) + redStart),
        Math.round(Math.random() * (greenEnd - greenStart) + greenStart),
        Math.round(Math.random() * (blueEnd - blueStart) + blueStart)
    ];
    
    $(document.body).css('background','rgb('+rgb.join(',')+')');
	console.log('background','rgb('+rgb.join(',')+')');
  });
  
  $(document).click(function(){
		$( " #modalWindow " ).modal();
		$( " #slider-red " ).slider({
			animate:"slow",
			orientation: "horizontal",
			range:true,
			min: 0,
			max: 255,
			values: [ redStart, redEnd ],
			slide: function( event, ui ) {
				redStart = ( ui.values[ 0 ] );
				redEnd = ( ui.values[ 1 ] );
				$("#slider-red").find(".ui-slider-handle:first").text(redStart);
				$("#slider-red").find(".ui-slider-handle:last").text(redEnd);
			}
		});	
		$( " #slider-green " ).slider({
			animate:"slow",
			orientation: "horizontal",
			range:true,
			min: 0,
			max: 255,
			values: [ greenStart, greenEnd ],
			slide: function( event, ui ) {
				greenStart = ( ui.values[ 0 ] );
				greenEnd = ( ui.values[ 1 ] );
				$("#slider-green").find(".ui-slider-handle:first").text(greenStart);
				$("#slider-green").find(".ui-slider-handle:last").text(greenEnd);
			}
		});	
		$( " #slider-blue " ).slider({
			animate:"slow",
			orientation: "horizontal",
			range:true,
			min: 0,
			max: 255,
			values: [ blueStart, blueEnd ],
			slide: function( event, ui ) {
				blueStart = ( ui.values[ 0 ] );
				blueEnd = ( ui.values[ 1 ] );
				$("#slider-blue").find(".ui-slider-handle:first").text(blueStart);
				$("#slider-blue").find(".ui-slider-handle:last").text(blueEnd);
			}
		});
	});
});



