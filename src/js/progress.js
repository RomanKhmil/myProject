
//color of first progress bar
var  ctxpp = document.getElementById('loader').getContext("2d");

	var gradientFillp = ctxpp.createLinearGradient(0, 250,  0,100);
		gradientFillp.addColorStop(0, "rgba(83, 132, 176, 1)");
		gradientFillp.addColorStop(1, "rgba(88, 202, 74, 1)");


//color of second progress bar
let ctxx = document.getElementById('loaderr').getContext("2d") ;

	var gradientFilll = ctxx.createLinearGradient(0, 250,  0,100);

	gradientFilll.addColorStop(0, "rgba(254, 5, 135, 1)");
	gradientFilll.addColorStop(1, "rgba(255, 158, 8, 1)");
//color of third progress bar
let ctxxx = document.getElementById('loaderrr').getContext("2d");

	var gradientFillll = ctxxx.createLinearGradient(0, 250,  0,100);
		gradientFillll.addColorStop(0, "rgba(38, 126, 205, 1)");
		gradientFillll.addColorStop(1, "rgba(8, 201, 244, 1)");



$(document).ready(function() {
	$('#loader').ClassyLoader({

		width: 300,// width of the loader in pixels

		height: 300,// height of the loader in pixels

		animate:true,// whether to animate the loader or not

		displayOnLoad:true,

		percentage: 90,// percent of the value, between 0 and 100

		speed: 1,// miliseconds between animation cycles, lower value is faster

		roundedLine:true,// whether the line is rounded, in pixels

		showRemaining:true,// how the remaining percentage (100% - percentage)

		fontFamily:'Helvetica',// name of the font for the percentage

		fontSize:'50px',// size of the percentage font, in pixels

		showText:true,// whether to display the percentage text

		diameter: 120,// diameter of the circle, in pixels

		fontColor:'rgba(81,89,116,1)',// color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla

		lineColor:gradientFillp,// line color of the main circle

		remainingLineColor:'rgba(55, 55, 55, 0.1)',// line color of the remaining percentage (if showRemaining is true)

		lineWidth: 35,// the width of the circle line in pixels
		

		info_font: 'Helvetica',
		info_font_size: '25px',
		info_font_color: 'rgba(186,187,204,1)',
		remove_percentage: true,
		info_text: "Views",
		max_point: 6000,
		current_point: 4782
	});
	$('#loaderr').ClassyLoader({
		width: 300,// width of the loader in pixels

		height: 300,// height of the loader in pixels

		animate:true,// whether to animate the loader or not

		displayOnLoad:true,

		percentage: 80,// percent of the value, between 0 and 100

		speed: 1,// miliseconds between animation cycles, lower value is faster

		roundedLine:true,// whether the line is rounded, in pixels

		showRemaining:true,// how the remaining percentage (100% - percentage)

		fontFamily:'Helvetica',// name of the font for the percentage

		fontSize:'50px',// size of the percentage font, in pixels

		showText:true,// whether to display the percentage text

		diameter: 120,// diameter of the circle, in pixels

		//fontColor:'rgba(25, 25, 25, 0.6)',// color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla

		lineColor:gradientFilll,// line color of the main circle

		remainingLineColor:'rgba(55, 55, 55, 0.1)',// line color of the remaining percentage (if showRemaining is true)

		lineWidth: 35,// the width of the circle line in pixels
		info_text: "Users",
		fontColor:'rgba(81,89,116,1)',
		info_font: 'Helvetica',
		info_font_size: '25px',
		info_font_color: 'rgba(186,187,204,1)',
		remove_percentage: true,
		max_point: 2000,
		current_point: 1263
	});

	$('#loaderrr').ClassyLoader({

		width: 300,// width of the loader in pixels

		height: 300,// height of the loader in pixels

		animate:true,// whether to animate the loader or not

		displayOnLoad:true,

		percentage: 80,// percent of the value, between 0 and 100

		speed: 1,// miliseconds between animation cycles, lower value is faster

		roundedLine:true,// whether the line is rounded, in pixels

		showRemaining:true,// how the remaining percentage (100% - percentage)

		fontFamily:'Helvetica',// name of the font for the percentage

		fontSize:'50px',// size of the percentage font, in pixels

		showText:true,// whether to display the percentage text

		diameter: 120,// diameter of the circle, in pixels

		fontColor:'rgba(81,89,116,1)',// color of the font in the center of the loader, any CSS color would work, hex, rgb, rgba, hsl, hsla

		lineColor:gradientFillll,// line color of the main circle

		remainingLineColor:'rgba(55, 55, 55, 0.1)',// line color of the remaining percentage (if showRemaining is true)

		lineWidth: 35,// the width of the circle line in pixels
		info_text: "Purchases",

		//------
		info_font: 'Helvetica',
		info_font_size: '25px',
		info_font_color: 'rgba(186,187,204,1)',
		remove_percentage: true,
		max_point: 1000,
		current_point: 394

	});

});


//console.log($(".loader"));