AFRAME.registerComponent("player", {
	schema: {
		versie: {type: "string"}
	},

	 versie1: function(e) {
		console.log(e.detail.els[0]);
		let object = e.detail.els[0];
		if(object.id === "key") {
			document.getElementById("keySound").components.sound.playSound();

            var pulseDelay = 750;

            document.getElementById("right").components.haptics.pulse(0.5, 100);

            setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 1);
            setTimeout(() => { document.getElementById("right").components.haptics.pulse(0.5, 100); }, pulseDelay * 2);
            setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 3);
		}
        else if(object.id === "closet") {
            if(sessionStorage.getItem("closetOpened") !== "true") {
                var pulseDelay = 750;

                document.getElementById("right").components.haptics.pulse(0.5, 100);
				object.components.sound.playSound();

                setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 1);
                setTimeout(() => { document.getElementById("right").components.haptics.pulse(0.5, 100); }, pulseDelay * 2);
                setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 3);
            }
			else {
				object.components.sound.playSound();
			}
        } else if (object.id === "clock") {
			document.getElementById("clockSound").components.sound.playSound();
		} 
		else if(object.id === "door") {
			if(sessionStorage.getItem("doorKeyFound") !== "true") {
				object.components.sound.playSound();
			}
			else{
				var pulseDelay = 750;
				document.getElementById("right").components.haptics.pulse(0.5, 100);

                setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 1);
                setTimeout(() => { document.getElementById("right").components.haptics.pulse(0.5, 100); }, pulseDelay * 2);
                setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 3);
			}
		}
		else {
			object.components.sound.playSound();
		}
		
	
	
	},

	versie2: function(e) {
		console.log("ik ben aan het trillen");

        let object = e.detail.els[0];

        if(object.id === "key") {
            var pulseDelay = 750;

            document.getElementById("right").components.haptics.pulse(0.5, 100);

            setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 1);
            setTimeout(() => { document.getElementById("right").components.haptics.pulse(0.5, 100); }, pulseDelay * 2);
            setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 3);
        }
        else if(object.id === "closet") {
            if(sessionStorage.getItem("closetOpened") !== "true") {
                var pulseDelay = 750;

                document.getElementById("right").components.haptics.pulse(0.5, 100);

                setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 1);
                setTimeout(() => { document.getElementById("right").components.haptics.pulse(0.5, 100); }, pulseDelay * 2);
                setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 3);
            }
        }
		else if(object.id === "door") {
			if(sessionStorage.getItem("doorKeyFound") === "true") {
				var pulseDelay = 750;
				document.getElementById("right").components.haptics.pulse(0.5, 100);

                setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 1);
                setTimeout(() => { document.getElementById("right").components.haptics.pulse(0.5, 100); }, pulseDelay * 2);
                setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 3);
			}
		}
        else {
		    document.getElementById("right").components.haptics.pulse(1, 50);
        }
	},

	clickSound: function(e) {
		let object = e.detail.intersectedEl;
		if(object.id === "key") {
			document.getElementById("keySound").components.sound.playSound();
		} else if(object.id === "clock"){
			document.getElementById("clockSound").components.sound.playSound();
		}
		object.components.sound.playSound();
	},

	init: function () {
		const element = this.el;

		element.addEventListener(
			"bbuttonup", () => {
				console.log("enter toets werkt")
				if(this.data.versie === "1") {
					element.setAttribute("player", "versie: 2");
					console.log(this.data.versie);
					document.getElementById("versie2").components.sound.playSound();
					return;
				}
				element.setAttribute("player", "versie: 1");
				document.getElementById("versie1").components.sound.playSound();
				console.log(this.data.versie);
			});
		
			document.getElementById("right").addEventListener("abuttonup", function(e){
				var intersectedObjects = document.getElementById("right").components.raycaster.intersectedEls;
				if (intersectedObjects.length > 0) {
					var object = intersectedObjects[0];
			if(object.id === "key") {
					object.emit("keyEvent");
				}
				if(object.id === "closet"){
					console.log("kast interactable");
					object.emit("closetEvent")
				}
				if(object.id === "cache"){
					console.log("cache interactable");
					object.emit("cacheEvent")
				}
				if(object.id === "door") {
					console.log("door interactable");
					object.emit("doorEvent");
				}
				}
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