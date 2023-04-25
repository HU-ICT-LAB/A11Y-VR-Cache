AFRAME.registerComponent("own-closet", {
	init: function () {
        this.el.setAttribute("class", "interactable");

        this.el.addEventListener("raycaster-intersected", () => {
            console.log("ik ben een coole kast");
            this.el.setAttribute("animation-mixer", "clip: L_door|open_left; timeScale: 1"); 
            this.el.addEventListener("animation-loop", () => {
                this.el.removeAttribute("animation-mixer");
            })
            
        });

        this.el.addEventListener("raycaster-intersected-cleared", () => {
            this.el.removeAttribute("animation-mixer");
        })
        // this.el.addEventListener("click", () => {
        //     this.el.setAttribute("animation-mixer", "clip: L_door|open_left; repeat: once"); 
        //     this.el.removeAttribute("animation-mixer");
        // });
	}
})