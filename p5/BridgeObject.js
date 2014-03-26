window.addEventListener("load",init,false);

var canvas, stage, exportRoot;
var counted=false;
var count =0; 
var wSound, rSound, cSound;
var pt;

function init() {
	
	canvas = document.getElementById("canvas");
	rSound = document.getElementById("right");
	wSound = document.getElementById("wrong");
	cSound = document.getElementById("click");
	
	exportRoot = new lib.Bridge();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	
	//----------- header -------------------------
	headers = document.getElementById("canvas1");
	title =  new lib.header();
	var titleStage = new createjs.Stage(headers);
	titleStage.addChild(title);
    titleStage.update();
	createjs.Ticker.addListener(titleStage);

	// ------- add Background  ---------
    container = new createjs.Container();
	stage.addChild(container);
	
	var content = new createjs.DOMElement("bg");
	container.addChild(content);
	///////
	
	exportRoot.rtry.visible = false;
	stage.update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addListener(stage);
	
	for(var i=1;i<5;i++)
	{
		exportRoot["tans"+i].onPress = myDown;
		exportRoot["tans"+i].name = i;
		exportRoot["tans"+i].xpos = exportRoot["tans"+i].x;
		exportRoot["tans"+i].ypos = exportRoot["tans"+i].y;
		
	}
	
	rSound.addEventListener('play', function() {rSound.currentTime = 0;}, false);
	wSound.addEventListener('play', function() {wSound.currentTime = 0;}, false);
	cSound.addEventListener('play', function() {cSound.currentTime = 0;}, false);
}

function myDown(e){
	
		counted=false;
	
	    e.target.disX=stage.mouseX - e.target.x;
		e.target.disY=stage.mouseY - e.target.y;
		
		e.onMouseMove=function(e1)
	    {
		
		e1.target.x=e1.stageX - e1.target.disX;
		e1.target.y=e1.stageY - e1.target.disY;
		
	    } 
	
		e.onMouseUp = function(e2)
		{
			if(e2.target.name == 1 || e2.target.name == 2)
			{
			pt = exportRoot["ans"+e2.target.name].globalToLocal(e2.target.x, e2.target.y);
			
			if(exportRoot["tans"+e2.target.name].hitTest(pt.x,pt.y))
			{
				e2.target.onPress = null;
				
				e2.target.gotoAndStop(1);
				e2.target.x= e2.target.xpos;
				e2.target.y= e2.target.ypos;
				//using if to ensure yhat count will incremented once
				if(!counted)
				{
					rSound.pause();
					rSound.play();
					
					counted=true;
					
					count++;
					if(count == 2)
					{
						nxt();
					}
				}
			}
			else
			{
				wSound.pause();
				wSound.play();
		createjs.Tween.get(e2.target,{override:true}).to({y:e2.target.ypos ,x:e2.target.xpos},1000,createjs.Ease.elasticInOut);
			}
			}
			else
			{
				wSound.pause();
				wSound.play();
		createjs.Tween.get(e2.target,{override:true}).to({y:e2.target.ypos ,x:e2.target.xpos},1000,createjs.Ease.elasticInOut);
			}
		}
		
}

function nxt()
{
	exportRoot.rtry.visible=true;
	exportRoot.rtry.onClick = rtryfun;
}

function rtryfun(e)
{
	cSound.pause();
	cSound.play();
	
	counted=false;
	count =0;
	init();
}