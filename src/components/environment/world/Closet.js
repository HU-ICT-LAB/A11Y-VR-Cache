AFRAME.registerComponent("own-closet", {
    schema: {
        open: {type: "string"},
        sleutel: {type: "string"}
    },

    init: function () {
        this.el.setAttribute("class", "interactable");
        this.el.setAttribute("own-closet", "open: false");
        this.el.setAttribute("id", "closet");
        this.el.setAttribute("sound", "src: #kast;");
   
	},

    update: function(oldData) {
        this.el.addEventListener("click", () => {
            if(this.el.data.sleutel === "true") {
                if(this.data.open === "false") {
                    this.el.setAttribute("sound", "src: #kastopen;");
                    this.el.setAttribute("animation-mixer", "clip: 001; timeScale: 0.03;");
                    setTimeout(() => {this.el.setAttribute("animation-mixer", "timeScale: 0;")}, 10500);
                    this.el.components.sound.playSound();
                    this.el.setAttribute("own-closet", "open: true");
                    sessionStorage.setItem("closetOpened", "true");
                    document.getElementById("cache").setAttribute("cache-interaction", "isAllowed: true");
                    this.el.removeAttribute("sound");
                    this.el.setAttribute("sound", "src: #kast");

                }
            }
            else {
                this.el.setAttribute("sound", "src: #kast;");
            }
        });
    }
})

