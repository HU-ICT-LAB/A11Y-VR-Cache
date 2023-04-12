AFRAME.registerComponent('cache-interaction', {
    intersect: false,
    
    init: function() {
        const el = this.el;

        el.addEventListener("click", () => {
            document.getElementById("cacheGevonden").components.sound.playSound();
            console.log("cache aangeklikt");
        });

        el.addEventListener("raycaster-intersected", () => {
			console.log("controller op cache");
			this.intersect = true;
		});

        el.addEventListener("raycaster-intersected-cleared", function () {
			this.intersect = false;
		});

        setInterval(this.vibrate.bind(this), 50);},

        vibrate: function () {
            if (this.intersect) {
                document.getElementById("right").components.haptics.pulse(1, 50);
            }
        },
    })