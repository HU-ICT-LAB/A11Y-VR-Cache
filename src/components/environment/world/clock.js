AFRAME.registerComponent("clock", {

	init: function () {
        const el = this.el;
        el.setAttribute("animation-mixer", "clip: Animation; timeScale: 1");

        el.setAttribute("sound", "src", "#clockSound");
        el.setAttribute("sound", "autoplay", true);
        el.setAttribute("sound", "loop", true);
	}
})