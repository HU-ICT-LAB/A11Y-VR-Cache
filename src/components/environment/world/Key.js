AFRAME.registerComponent("key", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.setAttribute("id", "key");
        el.setAttribute("sound", "src: #keySound");
   
	}
})