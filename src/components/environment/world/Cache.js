AFRAME.registerComponent('cache-interaction', {
    init: function() {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.setAttribute("id", "cache");
        // el.setAttribute("sound", "src: #cacheGevonden");
   

        el.addEventListener("bbuttondown", () => {
            document.getElementById("cacheGevonden").components.sound.playSound();
            console.log("cache aangeklikt");
        });

        el.addEventListener("raycaster-intersected", () => {
			console.log("controller op cache");
            document.getElementById("right").components.haptics.pulse(15, 50);
		});
        },
    })