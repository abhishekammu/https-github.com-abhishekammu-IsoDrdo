// Global Variables

var todaysDate='1',todaysMonth='1',todaysYear=2017,visibleMonthYear,visibleYearNum,visibleMonthNum;
var globalholiday=new Array();
var eleForDate;
var cal;
var defaultOnClickFunction=function(){
	go("./PasswordModule/firstnew.jsp?a=perdashboard");
};
var isDateDisabled=function(date,month,year){
	return false;
}

function gid(id){
	return document.getElementById(id);
}

//setting all required html for calendar onLoad
$(document).ready(
function loadCalendarHTML(e){
	var html_to_insert="<div id='calendarspace' style='display: none;position: absolute;z-index:1;'><table style='border-collapse:collapse' ><tr><td onclick='prevMonth()' class='clickable'>Prev</td><td colspan='5' style='background:#C2F9B5;color:#175607' id='monthyear'></td><td onclick='nextMonth()' class='clickable'>Next</td></tr><tr><td style='background:#B4EEF1;color:navy'>SU</td><td style='background:#B4EEF1;color:navy'>MO</td><td style='background:#B4EEF1;color:navy'>TU</td><td style='background:#B4EEF1;color:navy'>WE</td><td style='background:#B4EEF1;color:navy'>TH</td><td style='background:#B4EEF1;color:navy'>FR</td><td style='background:#B4EEF1;color:navy'>SA</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table></div>";
	var mouse='<span id="mouse" style="background: rgb(50, 0, 100) none repeat scroll 0% 0%; font-size: 80%; color: white; border: 1px solid black; padding: 2px; border-radius: 0px; position: absolute; z-index: 3; left: 570px; top: 133px;display: none; "></span>';
	if(gid('calendarspace')==null)
		document.body.insertAdjacentHTML('afterbegin',html_to_insert);
	if(gid('mouse')==null)
		document.body.insertAdjacentHTML('afterbegin',mouse);
	cal = gid('calendarspace');
});



//functions by prem
function getAbsolutePos(el)  {

	var r = { x: el.offsetLeft, y: el.offsetTop };

	if (el.offsetParent) {

		var tmp = getAbsolutePos(el.offsetParent);

		r.x += tmp.x;

		r.y += tmp.y;

	}

	return r;

}

function showAt(calendarspace,x, y) {

	var s = calendarspace.style;

	s.left = x + "px";

	s.top = y + "px";

	showCal();

}

function showAtElement (calendarspace,el) {

	var p = getAbsolutePos(el);

	showAt(calendarspace,p.x, p.y + el.offsetHeight);

}
function hideCal(){
	cal.style.display='none';
}
function showCal(){
	cal.style.display='';
}
function hideCalendar(eve){
	var el = eve.target;
	
	for (; el != null && el != cal; el = el.parentNode);
	if(el==null){
		hideCal();
	}
}
var dateSelectionCallBackFun=null;
var selectionFormat = 'DATE';
function selectDateWithDrdlCalWithCallBack(eleId,callBackfun){
	selectionFormat = 'DATE';
	dateSelectionCallBackFun=callBackfun;
	selectDateWithDrdlCalMain(eleId,null);
}
function selectDateWithDrdlCalWithCallBack(eleId,isDateDisabledFun,callBackfun){
	selectionFormat = 'DATE';
	dateSelectionCallBackFun=callBackfun;
	selectDateWithDrdlCalMain(eleId,isDateDisabledFun);
}
function selectDateWithDrdlCal(eleId){
	selectionFormat = 'DATE';
	selectDateWithDrdlCalMain(eleId,null);
}
function selectMonthWithDrdlCal(eleId){
	selectionFormat = 'MONTH';
	selectDateWithDrdlCalMain(eleId,null);
}
function selectDateWithDrdlCal(eleId,isDateDisabledFun){
	selectionFormat = 'DATE';
	selectDateWithDrdlCalMain(eleId,isDateDisabledFun);
}
function selectDateWithDrdlCalMain(eleId,isDateDisabledFun){
	eleForDate=gid(eleId);
	if(!eleForDate){
		alert('Element not found to select date.');
		return;
	}
		
		defaultOnClickFunction=function(e){
			if(selectionFormat=='MONTH')
				eleForDate.value=visibleMonthYear;
			else
				eleForDate.value=e.target.innerHTML+'-'+visibleMonthYear;

			hideCal();
			if(dateSelectionCallBackFun){
				dateSelectionCallBackFun(parseInt(e.target.innerHTML),visibleMonthNum,visibleYearNum);
			}
		};

		if(isDateDisabledFun)
			isDateDisabled = isDateDisabledFun;

		eleForDate.value='';
		showCalendar();
	var calendarspace = $('#calendarspace')[0];
	showAtElement(calendarspace,eleForDate);
	//setting closing event function
	document.addEventListener("mousedown",hideCalendar,true);
}

function setBlock(row,col,color,tip,id)
{
	var hol = document.createElement("div");
	gid("calendarspace").appendChild(hol);
	hol.id=id;
	hol.style.position="absolute";
	hol.style.width="14.28%";
	hol.style.height="12.5%";
	hol.style.left=""+(14.28*col)+"%";
	hol.style.top=""+(12.5*row)+"%";
	hol.style.opacity="0.25";
	hol.style.background=color;
	hol.onmouseenter=function(){showTip(tip);};
	hol.onmouseleave=function(){hideTip();};
	
	
}


function getBlock(date,monthname,year)
{
	var monthnum = getMonthNumber(monthname);
	var d = new Date(year,monthnum,01);
	
	var col = ((date-1)+d.getDay()) % 7;
	var row = 2 + parseInt(((date-1)+d.getDay()) / 7);
	
	return row+"##"+col;
	
}


function getFirstBlock(monthnum,year)
{
	
	var d = new Date(year,monthnum,01);
	var col = (d.getDay()) % 7;	
	return col;
	
}

function setToday()
{	var tod = document.createElement("div");
	gid("calendarspace").appendChild(tod);
		
		
	gid("today").style.display="block";
}

function removeToday()
{
	gid("today").style.display="none";
}


function getMonthNumber(s)
{
	var array=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
	var retval;
	
	for (var t=0;t<array.length;t++)
		{
			if (s==array[t])
				{	retval=t;
					break;
				}
		}
	
	return retval;
}

function getMonthName(s)
{
	var array=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
	return array[s];
}


function nextMonth()
{
	var c=gid("monthyear").innerHTML;
	var t=c.split("-");
	var monthnum = getMonthNumber($.trim(t[0]).toLowerCase());
	var year = parseInt($.trim(t[1]));
	if (monthnum==11)
		{monthnum=-1;
		year=parseInt(year)+1;
		}
	setMonthCalendar(monthnum+1,year);
}

function prevMonth()
{
	var c=gid("monthyear").innerHTML;
	var t=c.split("-");
	var monthnum = getMonthNumber($.trim(t[0]).toLowerCase());
	var year = parseInt($.trim(t[1]));
	if (monthnum==0)
		{monthnum=12;
		year=parseInt(year)-1;
		}
	setMonthCalendar(monthnum-1,year);
}

function getMonthDayNumber(monthnum,year)
{
	return new Date(year,monthnum+1,0).getDate();
}

function showCalendar() // Shows Calendar with todays date
{
	var x = new XMLHttpRequest();
	x.onreadystatechange=function()
	  {
	  if (x.readyState==4 && x.status==200)
	    {
		  var p=x.responseText;
		  // Do here whatever needed
		  var res = $.trim(p.substring(p.indexOf("<body>")+6, p.indexOf("</body>")));
		  var d = res.split("###");		
		   var f = d[1].split("-");
		  
		  // gid("datetext").innerHTML=""+f[3]+", "+f[0]+" "+f[1]+" "+f[2];
		  var num = getMonthNumber(f[1].toLowerCase());
		  todaysDate=f[0];
		  todaysMonth=num;
		  todaysYear=f[2];
		 
		  setMonthCalendar(num,f[2]);
		  
		   
	    }
	  }
	x.open("GET","dateTimeForNew1.jsp",true);
	x.send();
	

}
function setMonthCalendar(monthnum,year)
{
	// Clearing Earlier Calendar
	for (var y=0;y<42;y++)
		{	var e= $("#calendarspace > table > tbody >tr >td")[10 + y];
			e.innerHTML="";
			e.style.background='white';
			e.style.color='black';
			e.className="clickable";
			e.onmouseenter="";
			e.onmouseleave="";
			e.onclick=defaultOnClickFunction;
			e.style.textDecoration="";
	   		e.style.cursor="";
		}
	
	
	var holidayList = getHolidays(monthnum,year);
	
	var mname= getMonthName(monthnum).toUpperCase();
	visibleMonthYear=getMonthName(monthnum)+"-"+ year;
	visibleYearNum=year;
	visibleMonthNum=monthnum;
   gid("monthyear").innerHTML=mname+" - "+ year;
   
   var numdays =getMonthDayNumber(monthnum,year);
   var firstblock = getFirstBlock(monthnum,year);
   
   for(var i=0;i<numdays;i++)
	   {var tofill = 10 + i + firstblock;
	   	var e = $("#calendarspace > table > tbody >tr >td")[tofill];	
	   
	   	//e.onclick=onclick=function(){go("./PasswordModule/firstnew.jsp?a=perdashboard");};
	   			
	   	var holiday=holidayList[i+1];
	   	var colorDefined=false;
	   		if (holiday!=null && holiday!="")
	   			{
		   			e.style.background="#FFCACA";
		   			e.style.color="red";
		   			e.innerHTML=i+1;
		   			colorDefined=true;
		   			globalholiday[(i+1)]=holiday;
		   			//console.log("Globalholiday found on "+ (parseInt(i)+1) +" set as "+ holiday);
		   			
		   			e.onmouseenter=function(){showTip(globalholiday[this.innerHTML]);};
		   			
		   			//e.onmouseenter=showTip("DUSSEHRRA");
					e.onmouseleave=function(){hideTip();};
	   			}
	   	
	   		else if(i+1 != todaysDate || monthnum!=todaysMonth || year!=todaysYear)
	   			{	
	   				e.innerHTML=i+1;
	   				colorDefined=true;
	   				if ((tofill-3)%7==0) // Sunday
	   					e.style.background="#F4C6C6";
	   				else if ((tofill-3)%7==6) // Saturday
	   					e.style.background='#FFFFD2';
	   				else
	   					colorDefined=false;
	   		
	   			
	   			}
	   		else // Today
	   			{
	   				colorDefined=true;
		   			e.style.background="#DFC8EA";
		   			e.style.color="brown";
		   			e.innerHTML=i+1;
		   			e.id='id_'+(i+1);
		   			e.onmouseenter=function(){showTip('TODAY');};
					e.onmouseleave=function(){hideTip();};
	   			}

	   			var num=parseInt(e.innerHTML);
	   			if(num<10){
	   				//e.innerHTML="0"+num;//appends 0 for 1st to 9th day of month in display
	   			}

	   			if(isDateDisabled(num,getMonthName(monthnum),year)){
	   				console.log(colorDefined);
	   				if(!colorDefined){
	   					e.style.background="#D9D9D9";
		   				e.style.color="#6E6E6E";
		   			}
	   				e.style.textDecoration="line-through";
	   				e.style.cursor="not-allowed";
	   				e.onclick=function(){alert('This Date is Disabled');};
	   				e.className=e.className.replace('clickable','');
	   			}
	   }
	   //console.log('globalholiday:-'+globalholiday);
}

function getHolidays(monthnum,year)
{	var retval = new Array();
	/*var h= new XMLHttpRequest();
	var res="";
	var from = "01-"+getMonthName(monthnum)+"-"+year;
	var to = getMonthDayNumber(monthnum,year)+"-"+getMonthName(monthnum)+"-"+year;
	var address="CalSupport/getHolidays.jsp?from="+from+"&to="+to;
	
	h.onreadystatechange=function(){
		if (this.readyState == 4 && this.status == 200) {
	
			//Do here everything//
		var p= this.responseText;
		res = $.trim(p.substring(p.indexOf("<body>")+6, p.indexOf("</body>")));
		
		var arr =res.split("##");
		
		for (var x=0;x<arr.length-1;x++)
			{
				retval[parseInt(arr[x].split("*")[0])] = arr[x].split("*")[1];
			}
		
			
		}
	}
	
	
	h.open("GET", address, false);
	h.send();*/
	return retval;
	
}