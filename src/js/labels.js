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
