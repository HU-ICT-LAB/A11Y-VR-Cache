AFRAME.registerComponent('border-collide', {
    
    init: function() {
        var el = this.el;

        el.addEventListener('collide', () => {
            document.getElementById("right").components.haptics.pulse(1, 50);
            document.getElementById("test").components.sound.playSound();
        })
    }
})