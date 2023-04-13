AFRAME.registerComponent("cameraPos", {
	init: function () {
		const element = this.el;
        element.addEventListener("enter-vr", () => {
            document.getElementById("camera").setAttribute("position", "0 1 0");
        })
	}
})