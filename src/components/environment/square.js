AFRAME.registerComponent('own-cube', {
    init: function() {
       var el = this.el;

       el.addEventListener("raycaster-intersected", () => {
            document.getElementById("test").components.sound.playSound();
            document.getElementById("right").components.haptics.pulse(15, 50);

       });

       el.addEventListener("collide", () => {
         console.log("ew ik ben aangeraakt door de speler");
       });

       el.addEventListener("raycaster-intersected-cleared", () => {
        document.getElementById("test").components.sound.stopSound();
       });
    }

});