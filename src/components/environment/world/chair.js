AFRAME.registerComponent("chair", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.addEventListener("raycaster-intersected", () => {
            document.getElementById("chairSound").components.sound.playSound();
		});
	}
})