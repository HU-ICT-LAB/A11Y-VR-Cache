AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
        to: {default: '10 10 10', type: 'vec3'},
        back: {default: '2 2 2', type: 'vec3'}
    },

    init: function () {
         var data = this.data;
        var el = this.el;
        this.el.addEventListener('click', function () {
            if(el.object3D.scale === data.to.default){
                el.object3D.scale.copy(data.back);
            }
            el.object3D.scale.copy(data.to);
    });
}
})