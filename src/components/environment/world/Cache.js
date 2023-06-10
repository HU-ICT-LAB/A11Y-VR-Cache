AFRAME.registerComponent('cache-interaction', {
    schema: {
        isAllowed: {type: "string"}
    },

    init: function() {
        const el = this.el;
        el.setAttribute("class", "interactable");
    },

    update: function(oldData) {
        const el = this.el;
        if(this.data.isAllowed === "true") {
            el.setAttribute( "sound", "src: #dichtbijCache; autoplay: true; loop: true; rolloffFactor: 40");
            el.addEventListener("cacheEvent", () => {
                document.getElementById("cacheGevonden").components.sound.playSound();
                sessionStorage.clear();
                setTimeout(() => {window.location.href = '../../index.html'}, 1500);
                
            });
    
            el.addEventListener("raycaster-intersected", () => {
                console.log("controller op cache");

                var pulseDelay = 750;

                document.getElementById("right").components.haptics.pulse(0.5, 100);

                setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 1);
                setTimeout(() => { document.getElementById("right").components.haptics.pulse(0.5, 100); }, pulseDelay * 2);
                setTimeout(() => { document.getElementById("right").components.haptics.pulse(1, 100); }, pulseDelay * 3);
            });
        }
     
    }
})
