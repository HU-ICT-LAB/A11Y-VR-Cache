AFRAME.registerComponent("border1", {
	intersect: false,
    cam: null,
    border1: null,
    border2:  null,
    border3: null,
    border4:  null,
    border5: null,
    border6:  null,
    border7: null,
    border8:  null,
    border9: null,
    border10:  null,
    border11: null,
    border12:  null,

	init: function () {
		const element = this.el;
		element.setAttribute("material", "color: green;");
		element.setAttribute("scale", "0 10 1");
		element.setAttribute("static-body", null);
		element.setAttribute("class", "interactable");

        this.cam = document.getElementById("camera").object3D.position;
        this.border1 = document.getElementById("wall1").getAttribute("position");
        this.border2 = document.getElementById("wall2").getAttribute("position");
        this.border3= document.getElementById("wall3").getAttribute("position");
        this.border4 = document.getElementById("wall4").getAttribute("position");
        this.border5 = document.getElementById("wall5").getAttribute("position");
        this.border6 = document.getElementById("wall6").getAttribute("position");
        this.border7= document.getElementById("wall7").getAttribute("position");
        this.border8 = document.getElementById("wall8").getAttribute("position");
        this.border9 = document.getElementById("wall9").getAttribute("position");
        this.border10 = document.getElementById("wall10").getAttribute("position");
        this.border11= document.getElementById("wall11").getAttribute("position");
        this.border12 = document.getElementById("wall12").getAttribute("position");



		this.el.addEventListener("raycaster-intersected", function () {
			console.log("je hebt de  muur geraakt")
			this.intersect = true;
		});
		this.el.addEventListener("raycaster-intersected-cleared", function () {
			this.intersect = false;
		});
	},

	vibrate: function () {
		if (this.intersect) {
			document.getElementById("right").components.haptics.pulse(1, 50);
		}
	},

    tick: function() {
        let camPos = this.cam;
        let border1Post = this.border1;
        let border2Post = this.border2;
        let border3Post = this.border3;
        let border4Post = this.border4;
        let border5Post = this.border5;
        let border6Post = this.border6;
        let border7Post = this.border7;
        let border8Post = this.border8;
        let border9Post = this.border9;
        let border10Post = this.border10;
        let border11Post = this.border11;
        let border12Post = this.border12;

        let distance1 = camPos.distanceToSquared(border1Post)
        let distance2 = camPos.distanceToSquared(border2Post)
        let distance3 = camPos.distanceToSquared(border3Post)
        let distance4 = camPos.distanceToSquared(border4Post)
        let distance5 = camPos.distanceToSquared(border5Post)
        let distance6 = camPos.distanceToSquared(border6Post)
        let distance7 = camPos.distanceToSquared(border7Post)
        let distance8 = camPos.distanceToSquared(border8Post)
        let distance9 = camPos.distanceToSquared(border9Post)
        let distance10 = camPos.distanceToSquared(border10Post)
        let distance11 = camPos.distanceToSquared(border11Post)
        let distance12 = camPos.distanceToSquared(border12Post)
        
        let allowedDistance = 0.5;
        if(distance1 < allowedDistance || distance2 < allowedDistance || distance3 < allowedDistance || distance4 < allowedDistance || distance5 < allowedDistance || distance6 < allowedDistance || distance7 < allowedDistance || distance8 < allowedDistance || distance9 < allowedDistance || distance10 < allowedDistance || distance11 < allowedDistance || distance12 < allowedDistance) {
            // document.getElementById("test").components.sound.playSound();
            document.getElementById("right").components.haptics.pulse(1, 50);
        }
        else {
            document.getElementById("test").components.sound.stopSound();
        }
    }
});