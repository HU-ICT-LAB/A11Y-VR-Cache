AFRAME.registerComponent("border1", {
	intersect: false,
    cam: null,
    border1: null,
    border2:  null,
    border3: null,
    border4:  null,

	init: function () {
		const element = this.el;
		element.setAttribute("material", "color: green;");
		element.setAttribute("scale", "0 10 20");
		element.setAttribute("static-body", null);
		element.setAttribute("class", "interactable");

        this.cam = document.getElementById("camera").object3D.position;
        this.border1 = document.getElementById("wall1").getAttribute("position");

        this.border2 = document.getElementById("wall2").getAttribute("position");
        this.border3= document.getElementById("wall3").getAttribute("position");
        this.border4 = document.getElementById("wall4").getAttribute("position");



		this.el.addEventListener("raycaster-intersected", function () {
			console.log("je hebt de  muur geraakt")
			this.intersect = true;
		});
		this.el.addEventListener("raycaster-intersected-cleared", function () {
			this.intersect = false;
		});
		setInterval(this.vibrate.bind(this), 50);
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

        let distance1 = camPos.distanceTo(border1Post)
        let distance2 = camPos.distanceTo(border2Post)
        let distance3 = camPos.distanceTo(border3Post)
        let distance4 = camPos.distanceTo(border4Post)

        if(distance1 < 2 || distance2 < 2 || distance3 < 2 || distance4 < 2) {
            document.getElementById("test").components.sound.playSound();
            setInterval(this.vibrate.bind(this), 50);
        }
        else {
            document.getElementById("test").components.sound.stopSound();
        }
    }
});