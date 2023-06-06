AFRAME.registerComponent("own-closet", {
	closetOpened: false,
    
    init: function () {
        this.el.setAttribute("class", "interactable");
        this.el.setAttribute("id", "closet");
        this.el.setAttribute("sound", "src: #kast;")
  

        if(this.closetOpened === false) {
            this.el.addEventListener("bbuttondown", () => {
                this.el.setAttribute("sound", "src: #kastopen;")
                this.el.setAttribute("animation-mixer", "clip: 001; timeScale: 0.2;");
                setTimeout(() => {this.el.setAttribute("animation-mixer", "timeScale: 0;")}, 1600);
                this.el.components.sound.playSound();
                this.closetOpened = true;
                document.getElementById("cache").setAttribute( "sound", "src: #dichtbijCache; autoplay: true; loop: true; rolloffFactor: 40");
    
            });
        }else {
            this.el.addEventListener("bbuttondown", () => {
                this.el.setAttribute("animation-mixer", "timeScale: 0.2;");
                this.el.addEventListener("animation-loop", () => {
                    this.el.setAttribute("sound", "src: #kastdicht;")
                    this.el.removeAttribute("animation-mixer");
                    this.el.components.sound.playSound();
                    document.getElementById("cache").removeAttribute("sound");
                    this.closetOpened = false;
                })
            });
        }
   
	}
})

