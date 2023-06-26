AFRAME.registerComponent('exit', {
    schema: {
        doorKeyFound: {type: "string"}
    },

    init: function() {
        const element = this.el;
        element.setAttribute("class", "interactable");
        element.setAttribute("id", "door");
        element.setAttribute("material", "opacity: 0;");
        element.setAttribute("exit", "doorKeyFound: false;");
        element.setAttribute("sound", "src: #deur");
    },

    update: function(oldData) {
        if(this.data.doorKeyFound === "true") {
            this.el.addEventListener("doorEvent", () => {
                sessionStorage.clear();
                document.getElementById("cacheGevonden").components.sound.playSound();
                setTimeout(() => {document.getElementById("victory").components.sound.playSound()}, 2000);
                setTimeout(() => {window.location.href = '../../index.html'}, 8000);
            });
        }
    },

    tick: function() {
        const el = this.el;
        if(sessionStorage.getItem("doorKeyFound") === "true") {
            el.setAttribute("exit", "doorKeyFound: true;");
        }
    }
})