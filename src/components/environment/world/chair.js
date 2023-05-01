AFRAME.registerComponent("chair", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.addEventListener("click", () => {
            document.getElementById("chairSound").components.sound.playSound();
		});
	}
})