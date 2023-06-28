AFRAME.registerComponent("key", {
    schema: {
        keyFound: { type: "string" }
    },

    init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.setAttribute("id", "key");
        el.setAttribute("sound", "src: #dichtbijCache; autoplay: true; loop: true; rolloffFactor: 40");

                this.el.addEventListener("keyEvent", () => {
                        sessionStorage.setItem("keyFound", "true")
                        this.el.setAttribute("key", "keyFound: true")
        })
    },

    update: function (oldData) {
        const el = this.el;
        if (this.data.keyFound === "true") {
                console.log("sleutel gevonden");
                el.removeAttribute("sound");
                document.getElementById("cacheGevonden").components.sound.playSound();
                el.setAttribute("material","opacity: 0;");
                el.removeAttribute("gltf-model");
        }
    }
})