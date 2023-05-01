AFRAME.registerComponent("chair", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.addEventListener("click", () => {
			console.log("stoel");
            document.getElementById("chairSound").components.sound.playSound();
		});
	}
})