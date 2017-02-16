var lib, images, createjs, ss;
(function (lib, img, cjs, ss)
{
    // stage content:
    (lib.QuestParchmentPopUp_Canvas = function(mode,startPosition,loop)
    {
        this.initialize(mode,startPosition,loop,{});

        // flash0.ai
        this.instance = new lib.popupCont();
        this.instance.parent = this;
        this.instance.setTransform(450,275);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(745.5,431.9,310.8,231.9);

    (lib.popupCont = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // okBtn
        this.okBtn = new lib.okBtnCont();
        this.okBtn.parent = this;
        this.okBtn.setTransform(0.1,18.5,0.813,0.813);
        this.okBtn.gray.visible = false;

        this.timeline.addTween(cjs.Tween.get(this.okBtn).wait(1));

        // // contOnly
        // this.contOnlyBtn = new lib.cont_btnCont();
        // this.contOnlyBtn.parent = this;
        // this.contOnlyBtn.setTransform(0,25.6);

        // this.timeline.addTween(cjs.Tween.get(this.contOnlyBtn).wait(1));

        // // yes/no
        // this.noBtn = new lib.no_btnCont();
        // this.noBtn.parent = this;
        // this.noBtn.setTransform(60.9,25.6);

        // this.yesBtn = new lib.yes_btnCont();
        // this.yesBtn.parent = this;
        // this.yesBtn.setTransform(-60.8,25.6);

        // this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.yesBtn},{t:this.noBtn}]}).wait(1));

        // // cont/exit
        // this.exitBtn = new lib.exit_btnCont();
        // this.exitBtn.parent = this;
        // this.exitBtn.setTransform(60.9,25.6);

        // this.contBtn = new lib.cont_btnCont();
        // this.contBtn.parent = this;
        // this.contBtn.setTransform(-60.8,25.6);

        // this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.contBtn},{t:this.exitBtn}]}).wait(1));

        // input txt
        this.txt = new cjs.Text("This is a test to see how it works.", "18px 'Arial'", "#714925");
        this.txt.name = "txt";
        this.txt.textAlign = "center";
        this.txt.lineHeight = 22;
        this.txt.lineWidth = 232;
        this.txt.parent = this;
        this.txt.setTransform(0,-54.3,0.967,1);

        this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

        // parchment
        this.ba = new lib.parchmentCont();
        this.ba.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.ba).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-154.5,-118.1,310.8,231.9);

    (lib.okBtnCont = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // mouse
        this.mouse = new lib.okBtn_mouseCont();
        this.mouse.parent = this;
        this.mouse.setTransform(0,26.9);

        this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));
        this.mouseChildren = false;

//        this.pixiMovieClip.on('mousedown', function(evt){
//            evt.currentTarget.smc.mouse.alpha = 0;
//            evt.currentTarget.smc.down.alpha = 1;
//        });
//
//        this.pixiMovieClip.on('mouseup', function(event){
//            event.currentTarget.smc.mouse.alpha = 1;
//            event.currentTarget.smc.down.alpha = 0;
//        });
//
//				this.pixiMovieClip.interactive = true;

        // gray
        this.gray = new lib.okBtn_gray();
        this.gray.parent = this;
        this.gray.setTransform(0,26.9);

        this.timeline.addTween(cjs.Tween.get(this.gray).wait(1));

        // down
        this.down = new lib.okBtn_down();
        this.down.parent = this;
        this.down.setTransform(0,26.9);

        this.timeline.addTween(cjs.Tween.get(this.down).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.5,0,85,82.4);

    (lib.okBtn_mouseCont = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_1 = function() {
            this.stop();
        }

        // timeline functions:
        this.frame_2 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_1).wait(2).call(this.frame_2).wait(1));

        // mouse
        this.mouse = new lib.okBtn_mouse();
        this.mouse.parent = this;
        this.mouse.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.mouse).to({alpha:1},2).wait(1));

        //up
        this.up = new lib.okBtn_up();
        this.up.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.up).wait(3));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.5,-26.8,85,82.4);

    (lib.okBtn_mouse = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.txt = new cjs.Text("Test", "32px 'Arial'", "#00A6CF");
        this.txt.name = "txt";
        this.txt.textAlign = "center";
        this.txt.lineHeight = 36;
        this.txt.lineWidth = 76;
        this.txt.parent = this;
        this.txt.setTransform(0,-18);

        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0.898)"],[0.541,0.549,1],0,24.4,0,-24.3).s().p("AibDzQhlAAhIhHQhHhHAAhlQAAhkBHhHQBIhHBlAAIE3AAQBlAABHBHQBIBHAABkQAABlhIBHQhHBHhlAAg");

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#59C6D1").s().p("Ah/DIQhTAAg6g7Qg7g6AAhTQAAhRA7g7QA6g6BTgBID/AAQBTABA6A6QA7A7AABRQAABTg7A6Qg6A7hTAAgAkFiFQg4A4AABNQAABOA4A3QA4A4BOABID/AAQBOgBA4g4QA4g3AAhOQAAhNg4g4Qg3g4hPAAIj/AAQhOAAg4A4g");
        this.shape_1.setTransform(0,0,1.219,1.219);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#479BBA").s().p("Ah/DcQhbAAhAhBQhBhBAAhaQAAhaBBhAQBAhABbgBID/AAQBbABBABAQBBBAAABaQAABahBBBQhABBhbAAgAkMiMQg7A7AABRQAABTA7A6QA6A7BTAAID/AAQBTAAA6g7QA7g6AAhTQAAhRg7g7Qg6g6hTgBIj/AAQhTABg6A6g");
        this.shape_2.setTransform(0,0,1.219,1.219);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#7DFFFF","#3BCDF9"],[0,0.498],0,24.4,0,-24.3).s().p("AibDzQhlAAhIhHQhHhHAAhlQAAhkBHhHQBIhHBlAAIE3AAQBlAABHBHQBIBHAABkQAABlhIBHQhHBHhlAAg");
        this.timeline.addTween(cjs.Tween
          .get({})
          .to({
            state: [
              {t:this.shape_3},
              {t:this.shape_2},
              {t:this.shape_1},
              {t:this.shape},
              {t:this.txt}
            ]
          }).wait(1));
          
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.5,-26.8,85,82.4);

    (lib.okBtn_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.txt = new cjs.Text("Test", "32px 'Arial'", "#0063B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 36;
	this.txt.lineWidth = 81;
	this.txt.parent = this;
	this.txt.setTransform(0,-18);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// btn
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0.898)"],[0.541,0.549,1],0,24.4,0,-24.4).s().p("AibDzQhlAAhIhHQhHhHAAhlQAAhkBHhHQBIhHBlAAIE3AAQBlAABHBHQBIBHAABkQAABlhIBHQhHBHhlAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#59C6D1").s().p("Ah/DIQhTAAg6g7Qg7g6AAhTQAAhRA7g7QA6g6BTgBID/AAQBTABA6A6QA7A7AABRQAABTg7A6Qg6A7hTAAgAkFiFQg4A4AABNQAABOA4A3QA4A4BOABID/AAQBOgBA4g4QA4g3AAhOQAAhNg4g4Qg3g4hPAAIj/AAQhOAAg4A4g");
	this.shape_1.setTransform(0,0,1.219,1.219);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#407D9E").s().p("AibEMQhvAAhPhPQhOhOAAhvQAAhtBOhPQBPhPBvAAIE3AAQBvAABOBPQBPBPAABtQAABvhPBOQhOBPhvAAgAlIirQhHBHAABkQAABlBHBHQBIBHBlAAIE3AAQBlAABHhHQBIhHAAhlQAAhkhIhHQhHhHhlAAIk3AAQhlAAhIBHg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#65F1FE","#368FF0"],[0,0.498],0,24.4,0,-24.4).s().p("AibDzQhlAAhIhHQhHhHAAhlQAAhkBHhHQBIhHBlAAIE3AAQBlAABHBHQBIBHAABkQAABlhIBHQhHBHhlAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-26.8,85,82.4);

(lib.okBtn_gray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.txt = new cjs.Text("Test", "32px 'Arial'", "#464646");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 36;
	this.txt.lineWidth = 81;
	this.txt.parent = this;
	this.txt.setTransform(0,-18);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// btn
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8B0B3").s().p("AibDzQhlAAhIhHQhHhHAAhlQAAhkBHhHQBIhHBlAAIE3AAQBlAABHBHQBIBHAABkQAABlhIBHQhHBHhlAAgAk/iiQhEBEAABeQAABfBEBEQBEBEBgAAIE3AAQBgAABEhEQBEhEAAhfQAAhehEhEQhEhEhgAAIk3AAQhgAAhEBEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C5757").s().p("AibEMQhvAAhPhPQhOhOAAhvQAAhtBOhPQBPhPBvAAIE3AAQBvAABOBPQBPBPAABtQAABvhPBOQhOBPhvAAgAlIirQhHBHAABkQAABlBHBHQBIBHBlAAIE3AAQBlAABHhHQBIhHAAhlQAAhkhIhHQhHhHhlAAIk3AAQhlAAhIBHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#949A9D").s().p("AibDzQhlAAhIhHQhHhHAAhlQAAhkBHhHQBIhHBlAAIE3AAQBlAABHBHQBIBHAABkQAABlhIBHQhHBHhlAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-26.8,85,82.4);


(lib.okBtn_down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.txt = new cjs.Text("Test", "32px 'Arial'", "#2067A0");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 36;
	this.txt.lineWidth = 81;
	this.txt.parent = this;
	this.txt.setTransform(0,-18);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// btn
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#359CBC").s().p("AibDzQhlAAhIhHQhHhHAAhlQAAhkBHhHQBIhHBlAAIE3AAQBlAABHBHQBIBHAABkQAABlhIBHQhHBHhlAAgAk/iiQhEBEAABeQAABfBEBEQBEBEBgAAIE3AAQBgAABEhEQBEhEAAhfQAAhehEhEQhEhEhgAAIk3AAQhgAAhEBEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#407D9E").s().p("AibEMQhvAAhPhPQhOhOAAhvQAAhtBOhPQBPhPBvAAIE3AAQBvAABOBPQBPBPAABtQAABvhPBOQhOBPhvAAgAlIirQhHBHAABkQAABlBHBHQBIBHBlAAIE3AAQBlAABHhHQBIhHAAhlQAAhkhIhHQhHhHhlAAIk3AAQhlAAhIBHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#78D9FD","#306BBD"],[0,1],0,24.4,0,-24.4).s().p("AibDzQhlAAhIhHQhHhHAAhlQAAhkBHhHQBIhHBlAAIE3AAQBlAABHBHQBIBHAABkQAABlhIBHQhHBHhlAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-26.8,85,82.4);

(lib.parchmentCont = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.t = new lib.t();
	this.t.parent = this;
	this.t.setTransform(-154.5,-118.1);

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1));

	// m
	this.m = new lib.m();
	this.m.parent = this;
	this.m.setTransform(-138.6,-60.2);

	this.timeline.addTween(cjs.Tween.get(this.m).wait(1));

	// b
	this.b = new lib.b();
	this.b.parent = this;
	this.b.setTransform(-152.2,60.2);

	this.timeline.addTween(cjs.Tween.get(this.b).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.5,-118.1,310.8,231.9);

(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9B278").s().p("AWOBuQrBg5x5AXQo8ALmxAXQgOgfgIguIgEgmIBJgyIhJg2QHVBAJWAgQStA+KPicIguBbIAuAYQgLBKgPAVQgFAHgEAAg");
	this.shape.setTransform(155.2,39.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E6640").s().p("AWJEJQn0gorgAAQoJAApSAUQkqAKjGALIgCAAQgQAAgIgQQgPgggJgyQgFgfAAgOQgBgPANgJIApgcIgqgfQgJgHgCgNQgOiTAjhPQATgsAdgNIALgCIAFABQH6BgLYAAQIAAAJCgwQEigYC/gYIAEgBQALAAAHAHQAWAWAFAaQAEATgHAQQgCAFgCACIgIAJIABAAQAPAAAIANQAWAiAEBDQADApgEAbQAAAFgDAFIgiBDIAYAPQAPAJgCASQgKBCgPAeQgOAcgYAAgAWPDvIACABQAVAAAPhnIgtgaIAthbQADgYgBggQgDhCgUgeIg7AAIAtg1QADgHgBgJQgCgVgRgQQi6AZkiAYQpEAwoHAAQrZAAn+hhQgTAIgQAkQgfBJANCLIBJA2IhJAyIAFAoQAHAuAOAfQDBgLEqgKQJUgTIOgBQLlABH1Aog");
	this.shape_1.setTransform(155,26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FBD390","#EDBA7C"],[0.62,1],0,24,0,-23.9).s().p("AWPDvQrBg5x4AXQo9ALmxAXQgOgfgHguIgFgoIBJgyIhJg2QgNiLAfhJQAQgkATgIQLLCIRgg2QIxgcGig2QARAQACAVQABAJgDAHIgtA1IA7AAQAUAeADBCQABAggDAYIgtBbIAtAaQgLBKgPAVQgEAHgFAAg");
	this.shape_2.setTransform(155,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E6640").s().p("AAjDuIg9AAQgJAAgHgFQgIgFgCgJIgPgvQgDgKAEgJQADgJAJgFQAVgKAFgIQgEgFgNgHQgOgJgOgFQgPgFgDgPQgOhIAEgzQACgbAGgPQAEgKAKgEIAwgTIglgbQgIgHgDgJQgCgJAEgKIAVgnQAHgPARAAIA6AAQAJAAAIAGQAHAGACAJQAyDgABBwQACBMgXAdQgOARgVAAQgGAAgGgCgAg1isIBKA4IhaAlIgGAiQgDAuAOBFIASAHQAUAKAMALQAjAig/AfIAQAwIBCAAIAHACQAZAAAEhDQAFhrg3j7Ig6AAg");
	this.shape_3.setTransform(10.3,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5B073").s().p("AAoDTIhCAAIgQgwQA/gggjgiQgMgLgUgJIgSgIQgOhFADguIAGgiIBaglIhKg4IAVgoIA6AAQBBEpgTBdQgHAlgQAAQgEAAgFgDg");
	this.shape_4.setTransform(10.3,27.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(251,207,143,0)","#E7BB80","#D4A670","#AD7D4F"],[0.027,0.447,0.596,0.741],0,42.3,0,-14).s().p("A1ICMIgEgvIAUgUIgngYIAAg1QERiwTxA1QJ6AbJCA+IAABDIgqAUIAqAYIAAAiQgFAEgFAdg");
	this.shape_5.setTransform(153.6,44.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD693").s().p("A1ICMIgEgvIAUgUIgngZIAAg0IACgBIAVgLIACgCIPHh5IAXAAIAJAAIFPAGIBqADIARABIA4ACIBCADIIaAgIAnAEIApADIIQAvIAABDIgqATIAqAZIAAAhIgCAEQgFAIgEAWg");
	this.shape_6.setTransform(153.6,44.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E6640").s().p("AVUCXQAEgWAFgIIACgEIAAgiIgqgYIAqgUIAAhCIoQgwIgpgDIgngDIoaggIhCgDIg5gCIgQgBIhqgEIlPgFIgJAAIgXAAIvHB5IgCABIgVAKIgCABIAAA2IAnAYIgUAVIAEAvIgWAAIgDguQgBgJAHgHIABgBIgQgKQgKgHAAgMIAAg2QAAgKAKgGQDWiLMsAAQHrAAKdAzQFPAZDyAaQAJABAGAGQAFAGAAAIIAABCQAAANgMAGIgGADIAHAEQALAGAAAMIAAAiIAAAEQgBAHgFAFQgDAFgDANg");
	this.shape_7.setTransform(153.6,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.1,58.2);


(lib.m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(251,207,143,0)","#E7BB80","#D4A670","#AD7D4F"],[0.027,0.447,0.596,0.741],-0.5,14.1,-0.5,-42.2).s().p("A0/BEIgPjQMAqdAAAQgMBGgGDTg");
	this.shape.setTransform(138.1,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#AD7D4F","#D4A670","#E7BB80","#FBCF8F"],[0.263,0.424,0.522,0.969],-0.2,42.6,-0.2,-17.9).s().p("A07CzIAAgJIA4gUIgjgsIgKkcIAfARQAqAVA4AWQC1BIECA3QM1C3T+gcIABAPg");
	this.shape_1.setTransform(139.5,102.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E6640").s().p("AVEJaIgBgPQgLjbAch+Ig4gCIAghdIAHhhIgxgdIAjgZQgBiYADiaQAFjcANhHIAVAAQgIAwgGCYQgHCyABDbQAAAJgIAGIgKAHIAVANQAMAGgBAOIgHBiIgBAGIgXBAIAcACQAKABAGAIQAGAHgCALQgbB6ALDXIABARgA1HJaIgBgIQAAgQAPgEIAcgLIgRgVQgEgFgBgHIgVomQAAgNALgHIAVgNIgRgYQgEgFAAgHQAAgHAEgFIABgCQgOgEgBgPIginfIAWAAIAhHdIAjAAIgZAjIAZAiIAVAAIg4AiIAVImIAjAsIg4AUIAAAJg");
	this.shape_2.setTransform(138.6,60.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD693").s().p("A0yJaIAAgJIA4gUIgjgsIgVomIA4giIgVAAIgZgiIAZgjIgjAAIghndMAqcAAAQgNBHgFDcQgDCaABCYIgjAZIAxAdIgHBhIggBdIA4ACQgcB+ALDbIABAPg");
	this.shape_3.setTransform(138.6,60.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.3,120.5);

(lib.b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEA775").s().p("AKNA+QvQgkwqBYQgMgNgOgcQgcg5gKhQQIqAyJ/AQQT+AlGuiYIAGBZIg9AvIA1A1IgbAmQkUgjnqgRg");
	this.shape.setTransform(154.8,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E6640").s().p("AWIEGQm6g9rWAAQoBAApgAeQkyAPjPARIgCAAQgKgBgIgHQgzg1gPhdQgNhLANgzQADgKANgMQAYgVA+goIg/gRQgIgCgFgHQgFgHAAgIQACg7AXgiQANgRAOgIQAGgCAFgBIADABQF0AzOEAAQHPAAIugOQEZgHDAgGIAAAAQAMAAAHAIIAVAYQAIAJgCALQgCAMgKAGIgcASIA/AWQAPAFACASIANDHQABAOgLAHIgnAgIAhAiQAHAGABAJQAAAKgFAHIgbAmQgIALgNAAgAWLDuIAcgmIg2g1IA+gyIgOjIIhvgpIBIgtIgVgXQi6AHkYAGQoxAOnTABQuEgBl3gzIgSASQgSAcgCAxIB2AhIhEAqQhEAtgDAKQgMAuAMBGQAPBWAsAvQDJgQEygPQJigfIHAAQLXAAG8A+g");
	this.shape_1.setTransform(154.8,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FBD390","#EBB678"],[0.533,1],0,23.8,0,-23.7).s().p("AllC6QpCARnGAiQgrgugPhWQgMhHAMgtQADgLBEgsIBEgqIh2ghQACgxARgcIASgSQHHA+SxgNQJbgHH/gTIAVAYIhIAtIBvApIANDIIg9AyIA1A0IgbAmQpvhWyBAjg");
	this.shape_2.setTransform(154.8,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#916842").s().p("AA7CoIhUgTQgKgDgFgIQhUiBAZhbQAKgkAagbQANgNANgHQAEgCAHAAIA8AAQANAAAIAKIAfAtQAGAIgBAKQgCAJgHAHIg4AxIA0AJQAPADAFAPQAOAwgKA5QgFAdgJAVQgHAPgQAAgAgriBQgUATgJAaQgeBTBTB9IBUATQAHgRAFgaQAJg0gNgtIhkgRIBdhTIgggtIg8AAQgIAEgJAJg");
	this.shape_3.setTransform(297.8,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7A064").s().p("AgTB8QhTh9AehTQAJgaAUgTQAJgJAIgEIA8AAIAgAtIhdBTIBkARQANAtgJA0QgFAagHARg");
	this.shape_4.setTransform(297.8,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E6640").s().p("AgyDWQgMgEgFgLIgWg5QgEgIADgIQACgIAHgFIAkgcIgvguQgEgEgCgHQgQgzAQheIAUhYQACgIAHgFQAGgFAJAAIAuAAQA2AGAfAvQAtBFgWCXQgLBOgWBGQgCAHgGAFQgSAOgfAAQgcAAgggKgAhJh1QgQBbAPAvIBDBDIg7AtIAXA5QAcAIAZAAQAXAAAKgIQAehcAHhgQAPi8hqgMIgrAAg");
	this.shape_5.setTransform(10.8,28.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6B072").s().p("AgIDFIgjgHIgXg5IA7gtIhDhDQgPgvAQhbIAThRIArAAQBqAMgPC8QgHBggeBcQgKAJgWAAIgTgCg");
	this.shape_6.setTransform(10.8,28.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#AD7D4F","#D4A670","#E7BB80","#FBCF8F"],[0.263,0.424,0.522,0.969],0,12.3,0,-48.1).s().p("AnDBwQoQgTl6gmQAPgkAEhNIABhAMAp3AAAIAQCxQobBEq2AAQkTAAktgLg");
	this.shape_7.setTransform(152.6,12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD693").s().p("AB1B6Qn1AAoZghIghgCImTgfQAPglAEhNIABhAMAp3AAAQAGBlAKBNIzDBCIgWAAg");
	this.shape_8.setTransform(152.6,12.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E6640").s().p("AuUBkQkNgQiugRQgLgCgFgJQgGgKAEgKQAMgdAFg9QADgpAAglIAVAAIgBBAQgFBNgPAkIGTAgIAhABQIZAiH1AAIAWAAITDhDQgKhNgGhkIAWAAQAFBhAKBNQACAJgGAHQgFAHgJACQocBCrAAAQnwAAoZghg");
	this.shape_9.setTransform(152.5,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,308.4,53.6);
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
