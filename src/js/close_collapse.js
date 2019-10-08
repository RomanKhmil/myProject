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