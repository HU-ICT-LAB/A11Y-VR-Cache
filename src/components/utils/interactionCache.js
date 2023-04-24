AFRAME.registerComponent('cache-interaction', {
    init: function() {
        const el = this.el;
        el.setAttribute("class", "interactable");

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