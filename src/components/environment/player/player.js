AFRAME.registerComponent("player", {
	init: function () {
		const element = this.el;

		if(sessionStorage.getItem("versie") === "1") {
			let object = sessionStorage.getItem("object");
			switch(object) {
				case "bed":  
			}
		}

		element.addEventListener("bButtonDown", () => {
				console.log("enter toets werkt")
				if(sessionStorage.getItem("versie") === "1") {
					sessionStorage.setItem("versie",  2);
					window.location.reload();
					return;
				}
				sessionStorage.setItem("versie",  1);
				window.location.reload();
			});

		
		if(sessionStorage.getItem("versie") === "1") {
				element.addEventListener("raycaster-intersection", (e) => {
					let object = e.detail.els[0];
					object.components.sound.playSound();
				
				});
		}

		else {
			element.addEventListener("raycaster-intersection", () => {
				console.log("ik ben aan het trillen");
				element.components.haptics.pulse(1, 50);
			
			});

			element.addEventListener("click", (e) => {
				let object = e.detail.intersectedEl;
				object.components.sound.playSound();
			})
		}
		


		
	}
})