AFRAME.registerComponent("player", {
	schema: {
		device: {type: "string"},
		visual: {type: "string"}
	},
	init: function () {
		const element = this.el;
		let visual = "";

		switch (this.data.device) {
		case "pc" :
			element.innerHTML =
                    "<a-entity id=\"camera\" position=\"0 1 0\" camera kinematic-body look-controls wasd-controls>\n" +
                    "<a-cursor></a-cursor>\n" +
                    "     </a-entity>\n" +
                    "</a-entity>";
			break;
		case "oculus" :
			element.innerHTML =
				"<a-entity id=\"rig\" kinematic-body=\"shape:mesh\">\n" +
				"    <a-entity id=\"camera\" position=\"0 1 0\">\n" +
				"        <a-entity camera look-controls>"+ visual +"</a-entity>\n" +
				"    </a-entity>\n" +
				"    <a-entity id=\"left\" haptics vibration oculus-touch-controls=\"hand: left\" ></a-entity>\n" +
				"    <a-entity id=\"right\" haptics vibration oculus-touch-controls=\"hand: right\" laser-controls raycaster=\"lineColor: red; lineOpacity: 0.5; far: 1.6; objects: .interactable\" oculus-thumbstick-controls=\"acceleration: 20\"></a-entity>\n" +
				"</a-entity>";
			break;
		default:

		}
	}
})