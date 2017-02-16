package wildworks.display;
class Loader
{
	public static function loadJs(file:String, cb:Dynamic->Void):Void
	{
		var script = js.Browser.document.createScriptElement();

		script.onload = function() {
			cb(untyped lib);
		};

		script.src = file;
		js.Browser.document.body.appendChild(script);
	}
}
