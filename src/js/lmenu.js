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