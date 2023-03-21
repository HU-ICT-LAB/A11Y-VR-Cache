AFRAME.registerComponent('own-cube', {
    init: function() {
       var el = this.el;
       const geometry = new THREE.BoxGeometry(2, 2, 5);
       const material = new THREE.MeshBasicMaterial( {color: "red"} );
       el.setObject3D('mesh', new THREE.Mesh(geometry, material));
       el.getObject3D('mesh');
    }

});