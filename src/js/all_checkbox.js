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