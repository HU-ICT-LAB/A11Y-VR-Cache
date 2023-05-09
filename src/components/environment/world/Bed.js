AFRAME.registerComponent("bed", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.addEventListener("click", () => {
            document.getElementById("bedSound").components.sound.playSound();
		});

        this.el.addEventListener("raycaster-intersected", () => {
            document.getElementById("right").components.haptics.pulse(1, 50);
        });
	}
})