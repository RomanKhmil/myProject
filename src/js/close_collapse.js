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
let project_activity = $('.pa > div > div > .open_close');
let involved_team = $('.it_ma > div > .mdc-layout-grid__cell--span-4  > div > .mdc-layout-grid__cell--span-4 > .open_close');
let mangers_activity = $('.it_ma > div > .mdc-layout-grid__cell--span-8  > div > .mdc-layout-grid__cell--span-2 > .open_close');
let visits = $('.vs_me > div > .mdc-layout-grid__cell--span-8 > div > .mdc-layout-grid__cell--span-4 > .open_close');
let messages = $('.vs_me > div > .mdc-layout-grid__cell--span-4 > div > .mdc-layout-grid__cell--span-4 > .open_close');
let implementation = $('.im_ca > div > .mdc-layout-grid__cell--span-5 >  div > .mdc-layout-grid__cell--span-4 > .open_close');
let client_activity = $('.im_ca > div > .mdc-layout-grid__cell--span-7 >  div > .mdc-layout-grid__cell--span-4 > .open_close');
let mail = $('.mail > div > div > div > .mdc-layout-grid__cell--span-2 > .open_close');
//need more open_close containers
function hide() {
	console.log('hide');
	
}


mail.on('click' , function(){
	hide();
});
client_activity.on('click', function(){
	hide();
});
implementation.on('click', function(){
	hide();
});
messages.on('click', function(){
	hide();
});
visits.on('click', function(){
	hide();
});
mangers_activity.on('click' ,function(){
	hide();
})
involved_team.on('click', function(){
	hide();
});
project_activity.on('click', function(){
	hide();
});