AFRAME.registerComponent("player", {
	schema: {
		versie: {type: "string"}
	},

	 versie1: function(e) {
		console.log(e.detail.els[0]);
		let object = e.detail.els[0];
			object.components.sound.playSound();
	
	
	},

	versie2: function() {
		console.log("ik ben aan het trillen");
			document.getElementById("right").components.haptics.pulse(1, 50);
	},

	clickSound: function(e) {
		let object = e.detail.intersectedEl;
		object.components.sound.playSound();
	},

	init: function () {
		const element = this.el;

		element.addEventListener("xbuttonup", () => {
				console.log("enter toets werkt")
				if(this.data.versie === "1") {
					element.setAttribute("player", "versie: 2");
					console.log(this.data.versie);
					return;
				}
				element.setAttribute("player", "versie: 1");
				console.log(this.data.versie);
			});
		
	},

	update: function(oldData) {
		const element = this.el;

		element.addEventListener("raycaster-intersection", this.versie1);

		if(this.data.versie === "1") {
			element.removeEventListener("raycaster-intersection", this.versie2);
			element.removeEventListener("click", this.clickSound);
			element.addEventListener("raycaster-intersection", this.versie1)
		}

		else {
			element.removeEventListener("raycaster-intersection", this.versie1);
			element.addEventListener("raycaster-intersection", this.versie2);
			element.addEventListener("click", this.clickSound);
		}

	}
})