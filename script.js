$(document).ready(function(){
	var red;
	var green;
	var blue;
  $(document).mousemove(function(event){
		red = $("#modalWindow #redValue").val();
		green = $("#modalWindow #greenValue").val();
		blue = $("#modalWindow #blueValue").val();
  
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
	$("#modalWindow").modal();
	$(".color-picker").spectrum({
		showInput: true,
		showInitial: true,
		className: "full-spectrum",
		preferredFormat: "rgb",
		change: function(color) {
			red = color.toRgb().r;
			green = color.toRgb().g;
			blue = color.toRgb().b;
			$("#modalWindow #redValue").val(red);
			$("#modalWindow #greenValue").val(green);
			$("#modalWindow #blueValue").val(blue);
		}
	});

});

