AFRAME.registerComponent("chair", {
    
	init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.setAttribute("id", "chair");
        el.setAttribute("sound", "src: #chairSound;");
        
  
	}
})