/*!
 * jQuery ClassyLoader
 * www.class.pm
 *
 * Written by Marius Stanciu - Sergiu <marius@class.pm>
 * Licensed under the MIT license www.class.pm/LICENSE-MIT
 * Version 1.2.0
 *
 */

(function($) {
    $.fn.ClassyLoader = function(settings) {
        function radius(e) {
            return Math.PI / 180 * e;
        }
        var defaultSettings = {
            width: 200,
            height: 200,
            animate: true,
            displayOnLoad: true,
            percentage: 100,
            speed: 1,
            roundedLine: false,
            showRemaining: true,
            fontFamily: 'Helvetica',
            fontSize: '50px',
            showText: true,
            diameter: 80,
            fontColor: 'rgba(25, 25, 25, 0.6)',
            lineColor: 'rgba(55, 55, 55, 1)',
            remainingLineColor: 'rgba(55, 55, 55, 0.4)',
            lineWidth: 5,

            //My modification
            info_text: 'hello',
            info_font: 'Helvetica',
            info_font_size: '35px',
            info_font_color: 'rgba(125, 125, 125, 0.6)',


            remove_percentage: false,
            max_point: 1,
            current_point: 1,
            //------------------
            start: 'left'
        };
        if(settings.remove_percentage){
            console.log("hey hey heeeey!");
            settings.percentage = Math.trunc(settings.current_point/(settings.max_point/100));
        }
        settings = $.extend({
        }, defaultSettings, settings);
        var r = $(this);
        this.draw = function(percent) {
            if (typeof percent !== 'undefined') {
                settings.percentage = percent;
            }
            var ctx = r[0].getContext("2d");
            var hw = r.width() / 2;
            var hh = r.height() / 2;
            var u = 100;
            //(settings.remove_percantage){
            //    u = settings.max_point;
            //}
            var a = 0;
            var startPos = 0;
            var f = function(e) {
                var t = radius(360) / u;
                return t * e;
            };
            ctx.scale(1, 1);
            ctx.lineWidth = settings.lineWidth;
            ctx.strokeStyle = settings.lineColour;
            var l = function(s, u) {
                s = s || f(a);
                u = u || f(a + 1);
                ctx.clearRect(0, 0, r.width(), r.height());
                if (settings.showRemaining === true) {
                    ctx.beginPath();
                    ctx.strokeStyle = settings.remainingLineColor;
                    ctx.arc(hw, hh, settings.diameter, 0, 360);
                    ctx.stroke();
                    ctx.closePath();
                }
                ctx.strokeStyle = settings.lineColor;
                ctx.beginPath();
                if (settings.roundedLine === true) {
                    ctx.lineCap = 'round';
                }
                else {
                    ctx.lineCap = 'butt';
                }
                switch (settings.start) {
                    case 'top':
                        startPos = 1.5 * Math.PI;
                        break;
                    case 'bottom':
                        startPos = 0.5 * Math.PI;
                        break;
                    case 'right':
                        startPos = 1 * Math.PI;
                        break;
                    case 'left':
                    default:
                        startPos = 0;
                        break;
                }
                ctx.arc(hw, hh, settings.diameter, startPos, u + startPos);
                ctx.stroke();
                ctx.closePath();
                if (settings.showText === true) {
                    ctx.fillStyle = settings.fontColor;
                    ctx.font = settings.fontSize + " " + settings.fontFamily;
                    ctx.textAlign = "center";
                    //percantage font 
                    ctx.textBaseline = "top";
                    if(settings.remove_percentage){
                        ctx.fillText(settings.current_point + "", hw, hh); 
                    }
                    if(!settings.remove_percentage){
                        ctx.fillText(a + 1 + "", hw, hh);
                    }


                    ctx.fillStyle = settings.info_font_color;
                    ctx.font = settings.info_font_size + ' ' + settings.info_font;
                    ctx.textBaseline = 'bottom';
                    ctx.fillText(settings.info_text, hw, hh);

                }
            };
            setTimeout(function c() {
                l(f(a), f(a + 1));
                a += 1;
                if (a < settings.percentage) {
                    setTimeout(c, settings.speed);
                }
            }, settings.speed);
        };
        this.setPercent = function(percentage) {
            settings.percentage = percentage;
            return this;
        };
        this.getPercent = function() {
            return settings.percentage;
        };
        this.show = function() {
            var ctx = r[0].getContext("2d");
            var hw = r.width() / 2;
            var hh = r.height() / 2;
            ctx.scale(1, 1);
            ctx.lineWidth = settings.lineWidth;
            ctx.strokeStyle = settings.lineColour;
            ctx.clearRect(0, 0, r.width(), r.height());
            ctx.strokeStyle = settings.lineColor;
            ctx.beginPath();
            ctx.arc(hw, hh, settings.diameter, 0, radius(settings.percentage / 100 * 360));
            ctx.stroke();
            ctx.closePath();
            if (settings.showText === true) {
                ctx.fillStyle = settings.fontColor;
                ctx.font = settings.fontSize + ' ' + settings.font;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(settings.percentage + '%', hw, hh);
            }
            if (settings.showRemaining === true) {
                ctx.beginPath();
                ctx.strokeStyle = settings.remainingLineColor;
                ctx.arc(hw, hh, settings.diameter, 0, 360);
                ctx.stroke();
                ctx.closePath();
            }
        };
        this.__constructor = function() {
            $(this).attr('width', settings.width);
            $(this).attr('height', settings.height);
            if (settings.displayOnLoad === true) {
                if (settings.animate === true) {
                    this.draw();
                } else {
                    this.show();
                }
            }
            return this;
        };
        return this.__constructor();
    };
})(jQuery);

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
//var ctx = $('#myChart');
var sctx = $('#secondChart');
var ctx = document.getElementById('myChart').getContext("2d");
var sctx = document.getElementById('secondChart').getContext("2d");
var gradientFill = ctx.createLinearGradient(0, 500, 0, 100);
gradientFill.addColorStop(0, "rgba(198, 32, 186, 0.8");
gradientFill.addColorStop(1, "rgba(253, 179, 38, 0.8)");
var gradientFill2 = ctx.createLinearGradient(0, 500, 0, 100);
gradientFill2.addColorStop(0, "rgba(39, 126, 204, 0.8)");
gradientFill2.addColorStop(1, "rgba(0, 222, 255, 0.8)");



function randarr() {
    var a = 50;
    var arr = [];
    for (i = 0; i < 31; i++) {
        arr.push(a + Math.round(10 * Math.random()));
    }
    return arr;
}
console.log(randarr());
var set_data = function(arr, type) {
    let data = {
        labels: [],
        datasets: [{
            label: 'test',
            data: [],
            backgroundColor: 'rgba(84,166,222,1)'
        }]
    };
    if (type == 1) {
        for (i = 1; i <= 31 && i <= arr.length; i++) {
            data.datasets[0].data.push(arr[i - 1]);
            data.labels.push(i.toString());
        }
        console.log(data);
        return data;
    }

}

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '1', '1', '1', '1', '1', '1'],
        datasets: [{
                label: 'hello',
                data: [6, 7, 5, 6, 4, 7, 5],
                backgroundColor: gradientFill
            },
            {
                label: 'world',
                data: [5, 4, 5, 3, 4, 2, 5],
                backgroundColor: gradientFill2
            }
        ],

    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        }
    }

});
var secondChart = new Chart(sctx, {
    type: 'bar',
    /*  data: {
        labels: ["0", "1", "2", "3", "4","5","6","7","8"],
        datasets: [{
          label: 'hello',
          data: [115,1,140,100,40,10,40,25,20],
          backgroundColor: 'rgba(30,30,200,1)'
        }]
      },*/

    data: set_data(randarr(), 1),
    options: {
        hover: {
            backgroundColor: 'rgba(0,0,0,1)'
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false,
                    backdropColor: 'rgba(255,255,255,0)'
                }
            }],
            xAxes: [{
                barPercantage: 1.0,
                categoryPercentage: 0.8,
                gridLines: {
                    display: false
                },
                ticks: {
                    //display: false
                }
            }]
        }
    }
});
Chart.elements.Rectangle.prototype.draw = function() {
    
    var ctx = this._chart.ctx;
    var vm = this._view;
    var left, right, top, bottom, signX, signY, borderSkipped, radius;
    var borderWidth = vm.borderWidth;
    // Set Radius Here
    // If radius is large enough to cause drawing errors a max radius is imposed
    var cornerRadius = 10;

    if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top? 1: -1;
        borderSkipped = vm.borderSkipped || 'bottom';
    } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left? 1: -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
    }

    // Canvas doesn't allow us to stroke inside the width so we can
    // adjust the sizes to fit if we're setting a stroke on the line
    if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize? barSize: borderWidth;
        var halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
        var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
        var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
        }
    }

    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;

    // Corner points, from bottom-left to bottom-right clockwise
    // | 1 2 |
    // | 0 3 |
    var corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
    ];

    // Find first (starting) corner with fallback to 'bottom'
    var borders = ['bottom', 'left', 'top', 'right'];
    var startCorner = borders.indexOf(borderSkipped, 0);
    if (startCorner === -1) {
        startCorner = 0;
    }

    function cornerAt(index) {
        return corners[(startCorner + index) % 4];
    }

    // Draw rectangle from 'startCorner'
    var corner = cornerAt(0);
    ctx.moveTo(corner[0], corner[1]);

    for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        nextCornerId = i+1;
        if(nextCornerId == 4){
            nextCornerId = 0
        }

        nextCorner = cornerAt(nextCornerId);

        width = corners[2][0] - corners[1][0];
        height = corners[0][1] - corners[1][1];
        x = corners[1][0];
        y = corners[1][1];
        
        var radius = cornerRadius;
        
        // Fix radius being too large
        if(radius > height/2){
            radius = height/2;
        }if(radius > width/2){
            radius = width/2;
        }

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);

    }

    ctx.fill();
    if (borderWidth) {
        ctx.stroke();
    }
}; 
//bool variables
var main_menu_open = true;
var more_menu_open = true;
var menu_open = true;
//
var key_btn = 50;
	var main_btn = document.getElementById("main_menu_button");
	var main_menu = document.getElementById("main_menu");
	var main_menu_content = main_menu.children;

	var more_btn = document.getElementById("more_menu_button");
	var more_menu = document.getElementById("more_menu");
	var more_menu_content = more_menu.children;

	var lmenu_abs_button = document.getElementById("abs_menu_link");
	var lmenu_hide_button = document.getElementById("lmenu_hbtn");
	var menu = document.getElementsByClassName("lmenu")[0];



	//var main_icon = document.getElementsByClassName('key_btn')[0];


	var main_arrow = main_btn.childNodes[3];
	var more_arrow = more_btn.childNodes[3];

var content = document.getElementById('content');
//content.classList.add('freecontent');
//content.classList.remove('freecontent');
//console.log(page);
main_btn.onclick = function(){
	console.log("hello");
	var a = main_menu_content[1];
	if(!main_menu_open){
		a.style.display = "block";
		a.classList.add('list_open');
		main_arrow.classList.add('rotated');
		if(a.classList.contains('list_closed')){
			a.classList.remove('list_closed');
			
		}
		main_menu_open = true;
	}
	else{
		a.classList.add('list_closed');
		if(a.classList.contains('list_open')){
			a.classList.remove('list_open');
			main_arrow.classList.remove('rotated');
		}
		main_menu_open = false;
	}
}


more_btn.onclick = function(){
	console.log("more hello");
	var a = more_menu_content[1];
	if(!more_menu_open){
		a.style.display = "block";
		a.classList.add('list_open_more');

		more_arrow.classList.add('rotated');
		if(a.classList.contains('list_closed')){
			a.classList.remove('list_closed');
			
		}
		more_menu_open = true;
	}
	else{
		a.classList.add('list_closed');
		
		if(a.classList.contains('list_open_more')){
			a.classList.remove('list_open_more');

			more_arrow.classList.remove('rotated');
		}
		more_menu_open = false;
	}
}

lmenu_hide_button.onclick = function () {
	console.log("menu bye");
	var a = menu;
	if(!menu_open){
		if(a.classList.contains('lmenu_closed')){
		a.classList.remove('lmenu_closed')
		}
		lmenu_abs_button.style.display = "none";
		menu_open = true;
	}

	else{
		content.classList.add('freecontent');
		a.classList.add("lmenu_closed");
		lmenu_abs_button.style.display = "block";
		menu_open = false;
	}
}

lmenu_abs_button.onclick = function () {
	console.log("menu hello");
	var a = menu;
	if(!menu_open){
		if(a.classList.contains('lmenu_closed')){
		content.classList.remove('freecontent');
		a.classList.remove('lmenu_closed')
		//menu.classList.remove('')
		}
		lmenu_abs_button.style.display = "none";
		menu_open = true;
	}

	else{

		content.classList.add('freecontent');
		a.classList.add("lmenu_closed");
		lmenu_abs_button.style.display = "block";
		
		menu_open = false;
	}
}
//collapse_content
let op_content = {
	project_activity : '.pa > div > div > .open_close',
	involved_team : '.it_ma > div > .mdc-layout-grid__cell--span-4  > div > .mdc-layout-grid__cell--span-4 > .open_close',
	mangers_activity : '.it_ma > div > .mdc-layout-grid__cell--span-8  > div > .mdc-layout-grid__cell--span-2 > .open_close',
	visits : '.vs_me > div > .mdc-layout-grid__cell--span-8 > div > .mdc-layout-grid__cell--span-4 > .open_close',
	messages : '.vs_me > div > .mdc-layout-grid__cell--span-4 > div > .mdc-layout-grid__cell--span-4 > .open_close',
	implementation :'.im_ca > div > .mdc-layout-grid__cell--span-5 >  div > .mdc-layout-grid__cell--span-4 > .open_close',
	client_activity :'.im_ca > div > .mdc-layout-grid__cell--span-7 >  div > .mdc-layout-grid__cell--span-4 > .open_close',
	mail :'.mail > div > div > div > .mdc-layout-grid__cell--span-2 > .open_close'
};
let op_container_close = {
	project_activity : '.pa',
	involved_team : '.it_ma > div > .mdc-layout-grid__cell--span-4',
	mangers_activity : '.it_ma > div > .mdc-layout-grid__cell--span-8',
	visits : '.vs_me > div > .mdc-layout-grid__cell--span-8',
	messages : '.vs_me > div > .mdc-layout-grid__cell--span-4',
	implementation :'.im_ca > div > .mdc-layout-grid__cell--span-5',
	client_activity :'.im_ca > div > .mdc-layout-grid__cell--span-7',
	mail :'.mail '
}
let op_container_collapse = {
	project_activity : '.pa > .collapse_content',
	involved_team : '.it_ma > div > .mdc-layout-grid__cell--span-4 > .collapse_content',
	mangers_activity : '.it_ma > div > .mdc-layout-grid__cell--span-8 > .collapse_content',
	visits : '.vs_me > div > .mdc-layout-grid__cell--span-8 > .collapse_content',
	messages : '.vs_me > div > .mdc-layout-grid__cell--span-4 > .collapse_content',
	implementation :'.im_ca > div > .mdc-layout-grid__cell--span-5 > .collapse_content',
	client_activity :'.im_ca > div > .mdc-layout-grid__cell--span-7 > .collapse_content',
	mail :'.mail> div > div > .collapse_content'
};
let project_activity = {
	close:$(op_content.project_activity + ' > .icon-close'), 
	collapse:$(op_content.project_activity +'> .icon-collapse')
};
let involved_team = {
	close:$(op_content.involved_team + ' > .icon-close'), 
	collapse:$(op_content.involved_team +'> .icon-collapse')
};
let mangers_activity = {
	close:$(op_content.mangers_activity + ' > .icon-close'), 
	collapse:$(op_content.mangers_activity +'> .icon-collapse')
};
let visits = {
	close:$(op_content.visits + ' > .icon-close'), 
	collapse:$(op_content.visits +'> .icon-collapse')
};
let messages = {
	close:$(op_content.messages + ' > .icon-close'), 
	collapse:$(op_content.messages +'> .icon-collapse')
};
let implementation = {
	close:$(op_content.implementation + ' > .icon-close'), 
	collapse:$(op_content.implementation +'> .icon-collapse')
};
let client_activity = {
	close:$(op_content.client_activity + ' > .icon-close'), 
	collapse:$(op_content.client_activity +'> .icon-collapse')
};
let mail = {
	close:$(op_content.mail + ' > .icon-close'), 
	collapse:$(op_content.mail +'> .icon-collapse')
};

//need more open_close containers
function hide(element) {
	console.log('hide');
	if($(element).is(":hidden")){
		$(element).show();
	}
	else{

	$(element).hide();
	}
}
function collapse(element){
	console.log('collapse');

}





//Collapse
	mail.collapse.on('click' , function(){
		hide(op_container_collapse.mail);
	});
	client_activity.collapse.on('click', function(){
		hide(op_container_collapse.client_activity);
	});
	implementation.collapse.on('click', function(){
		hide(op_container_collapse.implementation);
	});
	messages.collapse.on('click', function(){
		hide(op_container_collapse.messages);
	});
	visits.collapse.on('click', function(){
		hide(op_container_collapse.visits);
	});
	mangers_activity.collapse.on('click' ,function(){
		hide(op_container_collapse.mangers_activity);
	})
	involved_team.collapse.on('click', function(){
		hide(op_container_collapse.involved_team);
	});
	project_activity.collapse.on('click', function(){
		hide(op_container_collapse.project_activity);
	});
//Close
	mail.close.on('click' , function(){
		hide(op_container_close.mail);
	});
	client_activity.close.on('click', function(){
		hide(op_container_close.client_activity);
	});
	implementation.close.on('click', function(){
		hide(op_container_close.implementation);
	});
	messages.close.on('click', function(){
		hide(op_container_close.messages);
	});
	visits.close.on('click', function(){
		hide(op_container_close.visits);
	});
	mangers_activity.close.on('click' ,function(){
		hide(op_container_close.mangers_activity);
	})
	involved_team.close.on('click', function(){
		hide(op_container_close.involved_team);
	});
	project_activity.close.on('click', function(){
		hide(op_container_close.project_activity);
	});
let mail_labels = $('#mail_labels');
function mail_labels_close() {
	console.log("mail_labels");
	var label_list = document.getElementById('label_list');
	//console.log(label_list);
	if(label_list.classList.contains('zero-height'))
	{
		label_list.classList.remove('zero-height');
	}
	else {
		label_list.classList.add('zero-height');
	}
}
mail_labels.on('click' ,function(){
	mail_labels_close();
});

var mail_checkbox_all = false;
var all_checkbox = $('.mail_select_input');

function checkAll() {
	let mail_select_input = $('.mail_select_input');
	if(mail_checkbox_all){
		//uncheck all
		console.log('uncheck');
		mail_checkbox_all = false;
		return;
	}
	else {
		//check all
		console.log('check');
		mail_checkbox_all = true;
		return;
	}
}


all_checkbox.on('click', function () {
	checkAll();
});