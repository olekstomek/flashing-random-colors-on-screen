$(document).ready(function(){
	var redStart = 0;
	var redEnd = 255;
	var greenStart = 0;
	var greenEnd = 255;
	var blueStart = 0;
	var blueEnd = 255;
		
	$( '#automateChangeBackground' ).change(function(){
		var agreed = $(this).is( ':checked' );
		if(agreed === true) { 
			var rateOfChanges = $( '#rateOfChanges' ).val(); //miliseconds
			var timeDuration = $( '#timeDuration' ).val(); //seconds
			if (typeof rateOfChanges !== 'undefined' || typeof timeDuration !== 'undefined') {
			$( '.spinner-grow' ).show();
				var counterChanges = (timeDuration * 1000) / rateOfChanges;
					for (i = 0; i < counterChanges; i++) {
					doSetTimeout(i, rateOfChanges);
					}
				}
			} else {
				$( '.spinner-grow' ).hide();
			}
	});
				
	function doSetTimeout(delay, periodicity) {
		setTimeout(function() {
			  rgb = [
        Math.round(Math.random() * (redEnd - redStart) + redStart),
        Math.round(Math.random() * (greenEnd - greenStart) + greenStart),
        Math.round(Math.random() * (blueEnd - blueStart) + blueStart)
		]
		$(document.body).css('background','rgb('+rgb.join(',')+')');
		console.log('automate background','rgb('+rgb.join(',')+')');}, delay * periodicity);
	};
		 
  $(document).mousemove(function(event){
    rgb = [
        Math.round(Math.random() * (redEnd - redStart) + redStart),
        Math.round(Math.random() * (greenEnd - greenStart) + greenStart),
        Math.round(Math.random() * (blueEnd - blueStart) + blueStart)
    ];
    
    $(document.body).css('background','rgb('+rgb.join(',')+')');
	console.log('background','rgb('+rgb.join(',')+')');
  });
  
  $( '#default-values' ).click(function(event, ui) {
	redStart = 0;
	redEnd = 255;
	greenStart = 0;
	greenEnd = 255;
	blueStart = 0;
	blueEnd = 255;
	$( '#slider-red' ).find( '.ui-slider-handle:first' ).text(redStart);
	$( '#slider-red' ).find( '.ui-slider-handle:last' ).text(redEnd);	
	$( '#slider-green' ).find( '.ui-slider-handle:first' ).text(greenStart);
	$( '#slider-green' ).find( '.ui-slider-handle:last' ).text(greenEnd);	
	$( '#slider-blue' ).find( '.ui-slider-handle:first' ).text(blueStart);
	$( '#slider-blue' ).find( '.ui-slider-handle:last' ).text(blueEnd);
  });
  
  $(document).click(function(){
		$( '#modalWindow' ).modal();
		$( '#slider-red' ).slider({
			animate:'slow',
			orientation: 'horizontal',
			range:true,
			min: 0,
			max: 255,
			values: [ redStart, redEnd ],
			slide: function( event, ui ) {
				redStart = ( ui.values[ 0 ] );
				redEnd = ( ui.values[ 1 ] );
				$( '#slider-red' ).find( '.ui-slider-handle:first' ).text(redStart);
				$( '#slider-red' ).find( '.ui-slider-handle:last' ).text(redEnd);
				if (redStart === redEnd) {
					$( 'p:first' ).html( "<span class='warning'>Red: The red color is unchanged</span>" );
				} else if (redStart !== redEnd) {
					$( 'p:first' ).html( '<span>Red: </span>' );
				}
			}
		});	
		$( '#slider-green' ).slider({
			animate:'slow',
			orientation: 'horizontal',
			range:true,
			min: 0,
			max: 255,
			values: [ greenStart, greenEnd ],
			slide: function( event, ui ) {
				greenStart = ( ui.values[ 0 ] );
				greenEnd = ( ui.values[ 1 ] );
				$( '#slider-green' ).find( '.ui-slider-handle:first' ).text(greenStart);
				$( '#slider-green' ).find( '.ui-slider-handle:last' ).text(greenEnd);
				if (greenStart === greenEnd) {
					$( 'p:eq(1)' ).html( "<span class='warning'>Green: The green color is unchanged</span>" );
				} else if (greenStart !== greenEnd) {
					$( 'p:eq(1)' ).html( "<span>Green: </span>" );
				}
			}
		});	
		$( '#slider-blue' ).slider({
			animate:'slow',
			orientation: 'horizontal',
			range:true,
			min: 0,
			max: 255,
			values: [ blueStart, blueEnd ],
			slide: function( event, ui ) {
				blueStart = ( ui.values[ 0 ] );
				blueEnd = ( ui.values[ 1 ] );
				$( '#slider-blue' ).find( '.ui-slider-handle:first' ).text(blueStart);
				$( '#slider-blue' ).find( '.ui-slider-handle:last' ).text(blueEnd);
				if (blueStart === blueEnd) {
					$( 'p:last' ).html( "<span class='warning'>Blue: The blue color is unchanged</span>" );
				} else if (blueStart !== blueEnd) {
					$( 'p:last' ).html( "<span>Blue: </span>" );
				}
			}
		});
	});
});