AFRAME.registerComponent('own-cube', {
    init: function() {
       var el = this.el;
    //    const geometry = new THREE.BoxGeometry(2, 2, 5);
    //    const material = new THREE.Data3DTexture( {color: "red"} );
    //    el.setObject3D('mesh', new THREE.Mesh(geometry, material));
    //    el.getObject3D('mesh');

       el.addEventListener("raycaster-intersected", () => {
            document.getElementById("test").components.sound.playSound();
            document.getElementById("right").components.haptics.pulse(0.5, 50);

       });

       el.addEventListener("raycaster-intersected-cleared", () => {
        document.getElementById("test").components.sound.stopSound();
       })
    }

});