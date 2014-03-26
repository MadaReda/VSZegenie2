window.addEventListener("load",init,false);

var canvas, stage, exportRoot;
var container,containerSky,containerCastel;
var lastclicked=1;
var currentpoint,lastpoint,oldx,oldy,newx,newy;
var newline;
var counter=0;
var lineArr = new Array();
var rSound, fSound, gSound;

function init() {
	canvas = document.getElementById("canvas");
	
	gSound=document.getElementById("gEffort");
	rSound=document.getElementById("true");
	fSound=document.getElementById("false");
	
	exportRoot = new lib.shohorMeladeya();
	stage = new createjs.Stage(canvas);
	//exportRoot.x=15;
	stage.addChild(exportRoot);
	
	//----------- header -------------------------
	var headers = document.getElementById("canvas1");
	var title = new lib.header();
	var titleStage=new createjs.Stage(headers);
	
	titleStage.addChild(title);
    titleStage.update();
	createjs.Ticker.addListener(titleStage);
	/////////////
	// ------- add Background image  ---------
    container = new createjs.Container();
	stage.addChild(container);
	
	var content = new createjs.DOMElement("bg");
	container.addChild(content);
	////
	// ------- add Background image  ---------
    containerSky = new createjs.Container();
	stage.addChild(containerSky);
	
	containerSky.x=10;
	containerSky.y=170;
	
	var contentSky = new createjs.DOMElement("sky");
	containerSky.addChild(contentSky);
	////
	// ------- add Background image  ---------
    containerCastel = new createjs.Container();
	stage.addChild(containerCastel);
	
	//containerCastel.x=15;
	containerCastel.y=230;
	
	var contentCastel = new createjs.DOMElement("castel");
	containerCastel.addChild(contentCastel);
	///////
	
	exportRoot.rtry_win.visible = false;
	exportRoot.rtry_btn.visible = false;
	containerCastel.visible = false;
	////
	stage.update();
	
	for(var i=1;i<13;i++)
	{
		exportRoot["m_"+i].onClick=setpoint;
		exportRoot["m_"+i].id=i;
	}

	createjs.Ticker.setFPS(50);
	//createjs.Ticker.addListener(stage);
	
	fSound.addEventListener('play', function() {fSound.currentTime = 0;}, false);
    rSound.addEventListener('play', function() {rSound.currentTime = 0;}, false);
    gSound.addEventListener('play', function() {gSound.currentTime = 0;}, false);
}

function setpoint(e)
{
	//alert("m_"+e.target.id);
	
	currentpoint=e.target.id;
	if(currentpoint!=1)
	{
		lastpoint=currentpoint-1;
		if(lastclicked==lastpoint)
		{
			rSound.pause();
			rSound.play();
			
			linedraw(currentpoint,lastpoint);
			lastclicked=currentpoint;
			counter++;
		}
		else
		{
			fSound.pause();
			fSound.play();
		}
		
		
	}
	
	if(counter == 11)
	{
		setTimeout(shwimg,500);
	}
	
}
function linedraw(currentpoint,lastpoint)
{
	newx=exportRoot["p_"+currentpoint].x;
	newy=exportRoot["p_"+currentpoint].y;
	
	oldx=exportRoot["p_"+lastpoint].x;
	oldy=exportRoot["p_"+lastpoint].y;
	
	newline = new createjs.Shape();
	newline.graphics.beginStroke("#0647B3");
	newline.graphics.setStrokeStyle(5,1,1);
	newline.graphics.moveTo(oldx,oldy);
	newline.graphics.lineTo(newx,newy);
	
	stage.addChildAt(newline,0);
	
	lineArr.push(newline);
	
	stage.update();
}

function shwimg()
{
	gSound.pause();
	gSound.play();
	//alert("jj");
	
	createjs.Tween.get(containerCastel)
         .wait(500)
         .to({alpha:1, visible:true}, 500).call(shwreset);
		 //alert("jj");
		
	stage.update();
	
}
function shwreset()
{
	for(var i=0;i<lineArr.length;i++)
	{
		lineArr[i].visible=false;
	}
	
	exportRoot.rtry_win.visible = true;
	exportRoot.rtry_btn.visible = true;
	
	stage.update();
	exportRoot.rtry_btn.onClick=resetfun;
}
function resetfun(e)
{
	exportRoot.rtry_win.visible = false;
	exportRoot.rtry_btn.visible = false;
	containerCastel.visible=false;
	lineArr = [];
	counter=0;
	lastclicked=1;
	
	stage.update();
}