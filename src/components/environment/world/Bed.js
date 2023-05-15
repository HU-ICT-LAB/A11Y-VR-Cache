AFRAME.registerComponent("bed", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.setAttribute("id", "bed");
        el.setAttribute("sound", "src: #bedSound");
   
	}
})