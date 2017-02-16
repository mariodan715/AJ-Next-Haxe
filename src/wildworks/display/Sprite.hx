package wildworks.display;

//import flash.display.Sprite;

import createjs.easeljs.DisplayObject;

class Sprite
{
	private var stage:createjs.easeljs.Stage;

	public function new()
	{
		js.Browser.window.document.getElementById("openfl-content").remove();
		var canvas = js.Browser.window.document.createCanvasElement();
		canvas.width = 800;
		canvas.height = 600;
		var ctx = canvas.getContext2d();
		js.Browser.window.document.body.appendChild(canvas);
		this.stage = new createjs.easeljs.Stage(canvas);

		var animate = function() {
			createjs.easeljs.Ticker.addEventListener("tick", this.stage);
		};
		animate();
	}

	public function addChild(child:DisplayObject) {
		this.stage.addChild(child);
	}
}
