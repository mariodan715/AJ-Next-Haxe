package ;

import openfl.display.MovieClip;
import openfl.display.Sprite;
import openfl.errors.Error;

class Achievement {

    public var invId(get, never):Int;
    public var baseImageMediaId(get, never):Int;
    public var iconMediaId(get, never):Int;
    public var name(get, never):String;
    public var descr(get, never):String;
    public var mediaText(get, never):String;
    public var image(get, never):Sprite;
    public var type(get, never):Int;
    public var defId(get, never):Int;
    public var userVarId(get, never):Int;

    public static var GEMS_EARNED:Int = 1;
    public static var GEMS_SPENT:Int = 2;

    public static var SHOP_DEN_ITEM:Int = 3;
    public static var SHOP_ACCESSORY:Int = 4;

    public static var MAIL_SEND:Int = 38;
    public static var MAIL_GIFT:Int = 39;

    public static var BUDDY_ADDED:Int = 40;
    public static var MEMBER_NEW:Int = 66;
    public static var HOLIDAY_BANNER:Int = 409;

    public static var BASE_MEDAL_ID:Int = 289;
    public static var BASE_RIBBON_ID:Int = 290;
    public static var BASE_TROPHY_ID:Int = 291;

    private var _invId:Int;
    private var _baseImageMediaId:Int;
    private var _iconMediaId:Int;
    private var _name:String;
    private var _descr:String;
    private var _mediaText:String;
    private var _nameId:Int;
    private var _descId:Int;
    private var _type:Int;
    private var _defId:Int;
    private var _userVarId:Int;

    private var _baseImage:Sprite;
    private var _baseImageHelper:MediaHelper;
    private var _icon:Sprite;
    private var _iconHelper:MediaHelper;

    private var _baseImageReceived:Bool;
    private var _iconReceived:Bool;
    private var _shouldUseFullScale:Bool;

    private var _scalePercent:Float = 1;
    private var _xPos:Float = 0;
    private var _yPos:Float = 0;

    public function new() {
    }

    public function init(initInvId:Int, initDefId:Int, initShouldUseFullScale:Bool = false):Void
    {
        _invId = initInvId;
        _defId = initDefId;
        var currDef:Dynamic = AchievementManager.getAchievementDef(_defId);
        if( currDef != null )
        {
            _userVarId = currDef.userVarRef;
            _baseImageMediaId = currDef.baseMediaRef;
            _iconMediaId = currDef.iconMediaRef;
            _nameId = currDef.titleStrRef;
            _name = LocalizationManager.translateIdOnly(_nameId);
            _mediaText = currDef.extraText;
            if( _mediaText != "" )
            {
                var splitMediaText:Array<Dynamic> = _mediaText.split(",");
                if( splitMediaText.length > 1 )
                    _mediaText = Utility.convertNumberToString(Std.parseInt(splitMediaText.join("")));
            }

            _descId = currDef.descStrRef;
            _descr = LocalizationManager.translateIdOnly(_descId);
            _type = currDef.type;
            _shouldUseFullScale = initShouldUseFullScale;

            _baseImage = new Sprite();
            _baseImageHelper = new MediaHelper();
            _baseImageHelper.init(_baseImageMediaId, baseImageReceived);

            _icon = new Sprite();
            _iconHelper = new MediaHelper();
            _iconHelper.init(_iconMediaId, iconReceived);
        }
        else
            throw new Error("Could not find achievement def");
    }

    public function destroy():Void
    {
        if( _iconHelper != null )
            _iconHelper.destroy();

        if( _baseImageHelper != null )
            _baseImageHelper.destroy();
    }

    public function clone():Achievement
    {
        var a:Achievement;
        a = new Achievement();
        a.init(_invId, _defId, _shouldUseFullScale);
        return a;
    }

    public function setScale(scalePercent:Float):Void
    {
        _scalePercent = scalePercent;

        if( _iconReceived && _baseImageReceived )
        {
            _baseImage.scaleX = _scalePercent;
            _baseImage.scaleY = _scalePercent;
        }
    }

    public function setPosition(xPos:Float, yPos:Float):Void
    {
        _xPos = xPos;
        _yPos = yPos;

        if( _iconReceived && _baseImageReceived )
        {
            _baseImage.x = -_baseImage.width * _xPos;
            _baseImage.y = -_baseImage.height * _yPos;
        }
    }

    //
    // Media Helper Callbacks
    //
    private function baseImageReceived(img:Dynamic):Void
    {
        if( img != null )
        {
            img = img.getChildAt(0);
            _baseImage.addChild(img);

            // If we already have the icon, add it to the iconWindow of baseImage
            if( _iconReceived )
            {
                img.itemBlock.addChild(_icon);
                allImagesLoaded();
            }
            if( _mediaText == "" )
                img.num.visible = false
            else
            {
                img.num.txt.text = _mediaText;

                var width:Float = img.num.txt.textWidth;

                if( width > 15 )
                {
                    if( width > 25 )
                        img.num.gotoAndStop(3)
                    else
                        img.num.gotoAndStop(2);
                }
            }

            _baseImageHelper.destroy();
            _baseImageHelper = null;
            _baseImageReceived = true;
        }
    }

    private function iconReceived(img:MovieClip):Void
    {
        if( img != null )
        {
            _icon.addChild(img);

            // If we have baseImage already, add the icon to baseImage
            if( _baseImageReceived )
            {
                Reflect.field(_baseImage.getChildAt(0),"itemBlock").addChild(_icon);
                allImagesLoaded();
            }

            _iconHelper.destroy();
            _iconHelper = null;
            _iconReceived = true;
        }
    }

    private function allImagesLoaded():Void
    {
        var scale:Float = 0.9;

        if( _shouldUseFullScale )
            scale = 1;

        _baseImage.scaleX = scale * _scalePercent;
        _baseImage.scaleY = scale * _scalePercent;

        _baseImage.x = -_baseImage.width * _xPos;
        _baseImage.y = -_baseImage.height * _yPos;
    }

    //
    // Getters
    //
    private function get_invId():Int
    {
        return _invId;
    }

    private function get_baseImageMediaId():Int
    {
        return _baseImageMediaId;
    }

    private function get_iconMediaId():Int
    {
        return _iconMediaId;
    }

    private function get_name():String
    {
        return _name;
    }

    private function get_descr():String
    {
        return _descr;
    }

    private function get_mediaText():String
    {
        return _mediaText;
    }

    private function get_image():Sprite
    {
        return _baseImage;
    }

    private function get_type():Int
    {
        return _type;
    }

    private function get_defId():Int
    {
        return _defId;
    }

    private function get_userVarId():Int
    {
        return _userVarId;
    }
}

class MediaHelper {
    public function new(){

    }

    public function destroy():Void{

    }

    public function init(x:Int, y:Bool):Void{

    }
}

class LocalizationManager{
    public function new(){

    }

    public function destroy():Void{

    }

    @:access(Achievement)
    static private function translateIdOnly(nId:Int):Int
    {
       var nInt = nId;
        return a;
    }
}

class Utility{

    public function new(){

    }

    public function destroy():Void{

    }

    @:access(Achievement)
    static private function convertNumberToString(nId:Int):String
    {
        var strToConvert;
        //add a string for nId to strToConvert
        return strToConvert;
    }
}



class AchievementManager{
    public function new(){

    }

    public function destroy():Void{

    }

    @:access(Achievement)
    static private function getAchievementDef(z:Int):Dynamic
    {
        var d = new AchievementDef(1, 2, 3, "test", 5, 6, 7); // for testinig
        return d;
    }
}

class AchievementDef{
    public var userVarRef:Int;
    public var baseMediaRef:Int;
    public var iconMediaRef:Int;
    public var extraText:String;
    public var titleStrRef:Int;
    public var descStrRef:Int;
    public var type:Int;

    public function new(a:Int, b:Int, c:Int, d:String, e:Int, f:Int, g:Int){
        this.userVarRef = a;
        this.baseMediaRef = b;
        this.iconMediaRef = c;
        this.extraText = d;
        this.titleStrRef = e;
        this.descStrRef = f;
        this.type = g;
    }
    public function destroy():Void{

    }

}
