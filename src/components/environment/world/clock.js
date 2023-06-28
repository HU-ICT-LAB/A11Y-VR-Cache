AFRAME.registerComponent("clock", {

	init: function () {
        const el = this.el;
        el.setAttribute("animation-mixer", "clip: Animation; timeScale: 1");

        el.setAttribute("class", "interactable");
        el.setAttribute("id", "clock");
        el.setAttribute("sound", "src", "#ticking");
        el.setAttribute("sound", "autoplay", true);
        el.setAttribute("sound", "loop", true);
	}
})