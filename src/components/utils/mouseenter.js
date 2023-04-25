AFRAME.registerComponent('border-collide', {
    
    init: function() {
        let player = document.getElementById("camera");

        player.addEventListener("collide", () => {
            console.log("ik heb iets aangeraakt");
            document.getElementById("right").components.haptics.pulse(1, 50);
            document.getElementById("test").components.sound.playSound();
        })
    }
})