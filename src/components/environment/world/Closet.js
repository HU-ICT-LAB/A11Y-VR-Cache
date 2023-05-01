AFRAME.registerComponent("own-closet", {
	init: function () {
        this.el.setAttribute("class", "interactable");
        this.el.setAttribute("sound", "src: #kast;")

        this.el.addEventListener("raycaster-intersected", () => {
            document.getElementById("right").components.haptics.pulse(1, 50);
        });

        this.el.addEventListener("click", () => {
            this.el.setAttribute("sound", "src: #kast;")
            this.el.components.sound.playSound();
        });

        this.el.addEventListener("click", () => {
            this.el.setAttribute("sound", "src: #kastopen;")
            this.el.setAttribute("animation-mixer", "clip: 001; timeScale: 0.2;");
            setTimeout(() => {this.el.setAttribute("animation-mixer", "timeScale: 0;")}, 1200);
            this.el.components.sound.playSound();

        });

        this.el.addEventListener("click", () => {
            this.el.setAttribute("animation-mixer", "timeScale: 0.2;");
            this.el.addEventListener("animation-loop", () => {
                this.el.setAttribute("sound", "src: #kastdicht;")
                this.el.removeAttribute("animation-mixer");
                this.el.components.sound.playSound();
            })
        });
	}
})

