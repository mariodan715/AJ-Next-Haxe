import wildworks.display.Loader;
import wildworks.display.Sprite;

class Main extends Sprite
{
	public function new()
	{
		super();
		trace("after super and before loader");
		Loader.loadJs("/assets/QuestParchmentPopup_Canvas.js", function(lib:Dynamic) {
			trace("lib loaded", lib);
			var child:Dynamic = null;
			untyped __js__('child = new lib.QuestParchmentPopUp_Canvas();');
			addChild(child);
		});
	}
}