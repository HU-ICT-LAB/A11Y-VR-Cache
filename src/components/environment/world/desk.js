AFRAME.registerComponent("desk", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.setAttribute("id", "desk");
        el.setAttribute("sound", "src: #deskSound");
   
	}
})