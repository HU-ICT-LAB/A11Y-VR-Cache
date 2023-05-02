AFRAME.registerComponent('cache-interaction', {
    init: function() {
        const el = this.el;
        el.setAttribute("class", "interactable");
        if(sessionStorage.getItem("closetState") === "open") {
            el.setAttribute( "sound", "src: #dichtbijCache; autoplay: true; loop: true; rolloffFactor: 40");
        }
        else {
            el.removeAttribute("sound");
        }

        el.addEventListener("click", () => {
            document.getElementById("cacheGevonden").components.sound.playSound();
            console.log("cache aangeklikt");
        });

        el.addEventListener("raycaster-intersected", () => {
			console.log("controller op cache");
            document.getElementById("right").components.haptics.pulse(15, 50);
		});
        },
    })