
// Mouse Hover Code
document.captureEvents(Event.MOUSEMOVE);
document.onmousemove= function mouseLoc(e){
	
	gid("mouse").style.left= (e.pageX-30)+"px";
	gid("mouse").style.top= (e.pageY+25)+"px";
	try{
	screensaverfunction();}catch(e){}
};


function hideTip(){
	$("#mouse").hide();
};

function showTip(s)
{
	$("#mouse").show();
	gid("mouse").innerHTML="<font size=2><b>"+s.toUpperCase()+"</b></font>";
}