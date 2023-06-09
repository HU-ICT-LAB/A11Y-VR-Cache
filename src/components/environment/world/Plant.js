AFRAME.registerComponent("plant", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.setAttribute("id", "plant");
        el.setAttribute("sound", "src: #plantSound");
   
	}
})