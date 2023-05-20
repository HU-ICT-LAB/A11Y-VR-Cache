AFRAME.registerComponent("clock", {
    
	init: function () {
        const el = this.el;
        this.el.setAttribute("animation-mixer", "clip: Animation; timeScale: 1");
        document.getElementById("clockSound").components.sound.playSound();
	}
})