AFRAME.registerComponent("bed", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.addEventListener("raycaster-intersected", () => {
            document.getElementById("bedSound").components.sound.playSound();
		});
	}
})