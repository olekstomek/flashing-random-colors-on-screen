$(document).ready(function(){
  $(document).mousemove(function(event, red, green, blue){
		var red = $("#modalWindow #redValue").val();
		var green = $("#modalWindow #greenValue").val();
		var blue = $("#modalWindow #blueValue").val();
  
    rgb = [
        Math.round(Math.random() * red),
        Math.round(Math.random() * green),
        Math.round(Math.random() * blue)
    ];
    
    $(document.body).css('background','rgb('+rgb.join(',')+')');
	console.log('background','rgb('+rgb.join(',')+')');
  });
});

$(document).click(function(){
	$('#modalWindow').modal();
});

