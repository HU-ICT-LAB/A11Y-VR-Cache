AFRAME.registerComponent("key", {
    schema: {
        keyFound: { type: "string" }
    },

    init: function () {
        const el = this.el;
        el.setAttribute("class", "interactable");
        el.setAttribute("id", "key");
        el.setAttribute( "sound", "src: #dichtbijCache; autoplay: true; loop: true; rolloffFactor: 40");

                this.el.addEventListener("keyEvent", () => {
                        sessionStorage.setItem("keyFound", "true")
                        this.el.setAttribute("key", "keyFound: true")
        })
    },

    update: function (oldData) {
        const el = this.el;
        if (this.data.keyFound === "true") {
                console.log("sleutel gevonden")
                el.setAttribute( "sound", "src: #cacheGevonden");
                document.getElementById("cacheGevonden").components.sound.playSound();
                document.getElementById("key").remove() //?
                //vervang sound attribute met gevonden geluid (cacheGevonden.mp3)
                //speel geluid eenmalig af
                //key verdwijnt (html tag eraf halen)
        }
    }
})