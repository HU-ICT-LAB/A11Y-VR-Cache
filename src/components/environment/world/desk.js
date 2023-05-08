AFRAME.registerComponent("desk", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.addEventListener("raycaster-intersected", () => {
            document.getElementById("deskSound").components.sound.playSound();
		});
	}
})