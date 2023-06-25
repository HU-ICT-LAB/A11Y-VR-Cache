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
                //TODO: hier moet een geluid komen die vertelt dat de speler het gehaald heeft en dat ie ontsnapt is en dat ie het gehaald heeft en dat het spel hier stopt
                setTimeout(() => {window.location.href = '../../index.html'}, 2000);
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